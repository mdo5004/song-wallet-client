import React from 'react';
import { Grid, Card, Table, Icon } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as groupActions from '../actions/GroupActions';
import getFriends from '../actions/FriendActions';
import Autosuggest from 'react-autosuggest';
import '../css/Autosuggest.css'

export class Groups extends React.Component {
    componentDidMount() {
        this.props.actions.getGroups();
    }

    render() {

        const groupElements = this.props.groups.map( (group, index)=> {

            return <GroupTable 
                       key={group.id}
                       index={index}
                       group={group} 
                       />
        })
        return (
            <Grid columns={3} doubling stackable container>
                {groupElements}
            </Grid>
        )
    }
}
const mapStateToPropsGroups = (state) => {
    return {groups:state.groups}
}
const mapDispatchToProps = (dispatch) => {  
    return {
        actions: bindActionCreators(groupActions, dispatch)
    };
}
export const ConnectedGroups = connect(mapStateToPropsGroups,mapDispatchToProps)(Groups)

class GroupHeader extends React.Component {
    render() {
        return(
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell><Icon name="group" /></Table.HeaderCell>
                    <Table.HeaderCell>{this.props.name}</Table.HeaderCell>
                    <Table.HeaderCell><Icon name="delete" /></Table.HeaderCell>
                </Table.Row>
            </Table.Header>
        )
    }
}
class GroupTable extends React.Component {
    render() {

        const { name, users } = this.props.group;    
        return (
            <Grid.Column>
                <Card >
                    <Table>
                        <GroupHeader name={name}/>
                        <GroupMembers members={users}/>
                        <ConnectedAddMemberRow index={this.props.index} />
                    </Table>
                </Card>
            </Grid.Column>
        )
    }
}
class GroupMembers extends React.Component {
    render() {
        let group;
        if (this.props.members) {
            group = this.props.members.map( member => {
                return (<MemberRow member={member} key={member.name}/>)
            })}
        return (
            <Table.Body>
                {group}
            </Table.Body>
        )
    }
}
class MemberRow extends React.Component {
    render() {
        const member = this.props.member
        return (
            <Table.Row key={member.id}>
                <Table.Cell  width={2}><Icon name="user"/></Table.Cell>
                <Table.Cell width={12}>{member.name}</Table.Cell>
                <Table.Cell  width={2}><Icon name="delete"/></Table.Cell>
            </Table.Row> 
        )
    }
}
class AddMemberRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            suggestions: [],
        }
    }

    onChange = (event, { newValue }) => {
        this.setState({
            text: newValue
        })
    }
    handleKeypress = (event) => {
        if(event.which === 13){
            this.addMemberToGroup()
        }
    }

    addMemberToGroup = () => {
        this.props.actions.addMemberToGroup(this.state.text,this.props.index);
        this.setState({
            text:''
        })
    }
    
    getSuggestions = (value) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        //TODO: make this SMARTER
        const suggestions = inputLength === 0 ? [] : this.props.friends.filter(
            lang => lang.name.toLowerCase().match(inputValue) !== null)
        return suggestions
    }
    getSuggestionValue = (suggestion) => {return suggestion.name};
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        })
    }

// Autosuggest will call this function every time you need to clear suggestions.
onSuggestionsClearRequested = () => {
    this.setState({
        suggestions: []
    })
}
renderSuggestion = suggestion => {
    return <span>{suggestion.name}</span>
}
render() {
    const inputProps = {
        value:this.state.text,   
        onChange:this.onChange,
        type: 'search',
        placeholder: 'Search Friends'
    }
    
    return (
        <Table.Footer>
            <Table.Row>
                <Table.HeaderCell></Table.HeaderCell>
                <Table.HeaderCell>
                    <Autosuggest 
                        suggestions={this.state.suggestions}
                        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                        getSuggestionValue={this.getSuggestionValue}
                        renderSuggestion={this.renderSuggestion}
                        inputProps={inputProps}
                        value={this.state.text} 
                        onChange={this.handleInput}
                        />
                </Table.HeaderCell>
                <Table.HeaderCell>
                    <Icon 
                        name="add" 
                        onClick={this.addMemberToGroup}
                        />
                </Table.HeaderCell>
            </Table.Row>
        </Table.Footer>
    )
}
}
const mapStateToPropsAddMemberRow = (state) => {
    return {friends:state.friends}
}
const ConnectedAddMemberRow = connect(mapStateToPropsAddMemberRow,mapDispatchToProps)(AddMemberRow)