import React from 'react';
import { Grid, Card, Table, Icon } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as groupActions from '../actions/GroupActions';

export class Groups extends React.Component {
    componentDidMount() {
        this.props.actions.getGroups();
    }
    addMemberToGroup = (memberName, groupId) => {
        
        const group = this.props.groups.filter( group => group.id === groupId )[0]
        
        const member = {name:memberName, id:null}

        group.members.push(member)
        
        this.props.actions.updateGroup(group)
        
    }
    render() {

        const groupElements = this.props.groups.map( (group, index)=> {
    
            return <GroupTable 
                       key= {group.id}
                       group={group} 
                       addMemberToGroup={this.addMemberToGroup}
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
    constructor(props) {
        super(props);
        this.state = {
            text:''
        }

    }
    updateText = (text) => {
        this.setState({
            text:text
        })
    }
    addMemberToGroup = () => {
        this.props.addMemberToGroup(this.state.text,this.props.group.id)
    }
    render() {
        
        const { name, users } = this.props.group;    
        return (
            <Grid.Column>
                <Card >
                    <Table>
                        <GroupHeader name={name}/>
                        <GroupMembers members={users}/>
                        <AddMemberRow 
                            text={this.state.text} 
                            updateText={this.updateText}
                            addMemberToGroup={this.addMemberToGroup}
                            />
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

    handleInput = (event) => {
        this.props.updateText(event.target.value);
    }
    handleKeypress = (event) => {
        if(event.which === 13){
            // enter key pressed
            this.props.addMemberToGroup();
        }
    }
    render() {
        return (
            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell></Table.HeaderCell>
                    <Table.HeaderCell>
                        <input 
                            type="text" 
                            placeholder="New Member" 
                            value={this.props.text} 
                            onChange={this.handleInput}
                            onKeyDown={this.handleKeypress}
                            />
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                        <Icon 
                            name="add" 
                            onClick={this.props.addMemberToGroup}
                            />
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        )
    }
}