import React from 'react';
import { Grid, Card, Table, Icon } from 'semantic-ui-react';

export class Groups extends React.Component {

    render() {
        const groups = [
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
        const groupElements = groups.map( group => {
            return <Group group={group}/>
        })
        return (
            <Grid columns={3} doubling stackable container>
                {groupElements}
            </Grid>
        )
    }

}

class Group extends React.Component {

    render() {
        return (
            <Grid.Column>
                <Card >
                    <GroupTable group={this.props.group}/>
                </Card >
            </Grid.Column>
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
    render() {
        const { name, members } = this.props.group;    

        return (
            <Table>
                <GroupHeader name={name}/>
                <GroupMembers members={members}/>
                <AddMemberRow />
            </Table>
        )
    }
}
class GroupMembers extends React.Component {
    render() {
        const groupMembers = this.props.members.map( member => {
            return (<MemberRow member={member}/>)
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
    render() {
        return (
            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell></Table.HeaderCell>
                    <Table.HeaderCell><input type="text" placeholder="New Member"/></Table.HeaderCell>
                    <Table.HeaderCell><Icon name="add"/></Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        )
    }
}