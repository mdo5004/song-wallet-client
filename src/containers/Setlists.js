import React from 'react';
import Setlist from '../components/setlist';
import {ConnectedNewSetlist as NewSetlist} from '../components/newSetlist';
import { Grid } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import * as setlistActions from '../actions/SetlistActions';
import { connect } from 'react-redux';

export class Setlists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            new:false
        }
    }
    componentDidMount(){
        this.props.actions.loadSetlists();
    }
    createNewSetlist = () => {
        this.setState({
            new:true
        })
    }
    render() {
        
        const setlistsIndex = this.props.setlists.map( (setlist, index) => {
            
            return (
                <Setlist setlist={setlist} key={index}/>
            )
        })
        return (
            <Grid columns={3} doubling stackable container>
                {setlistsIndex}
                <NewSetlist callback={this.createNewSetlist} isCreating={this.state.new}/>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        setlists: state.setlists
    }
}
const mapDispatchToProps = (dispatch) => {  
    return {
        actions: bindActionCreators(setlistActions, dispatch)
    };
}
export const ConnectedSetlists = connect(mapStateToProps,mapDispatchToProps)(Setlists)

