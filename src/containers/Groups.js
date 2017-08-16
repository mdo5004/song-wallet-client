import React from 'react';
import { Grid, Card, Table, Icon } from 'semantic-ui-react';

export class Groups extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            groups: [
                {
                    id:"1",
                    name:"Incubus Cover Band",
                    members: [
                        {
                            name:"Ryan O'Connell",
                            id:"2"
                        },
                        {
                            name:"Michael O'Connell",
                            id:"1"
                        },
                    ]
                },
                {
                    id:"2",
                    name:"Punch Brothers Cover Band",
                    members: [
                        {
                            name:"Michael O'Connell",
                            id:"1"
                        },{
                            name:"Levi Mason",
                            id:"3"
                        },{
                            name:"Daniel Carter",
                            id:"4"
                        },{
                            name:"Alexa Carter",
                            id:"5"
                        }
                    ]
                }
            ]
        }
    }
    addMemberToGroup = (memberName, groupId) => {

    }
    render() {

        const groupElements = this.state.groups.map( group => {
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
        const { name, members } = this.props.group;    

        return (
            <Grid.Column>
                <Card >
                    <Table>
                        <GroupHeader name={name}/>
                        <GroupMembers members={members}/>
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
        const groupMembers = this.props.members.map( member => {
            return (<MemberRow member={member} key={member.name}/>)
        })
        return (
            <Table.Body>
                {groupMembers}
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