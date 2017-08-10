import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export class NavigationBar extends React.Component {
    
    state = { activeItem: this.props.match }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Menu attached='top' tabular>
                    <Menu.Item as={NavLink} to={'/songs'} name='songs' active={activeItem === 'songs'} onClick={this.handleItemClick} />
                    <Menu.Item as={NavLink} to={'/setlists'} name='setlists' active={activeItem === 'setlists'} onClick={this.handleItemClick} />
                    <Menu.Item as={NavLink} to={'/groups'} name='groups' active={activeItem === 'groups'} onClick={this.handleItemClick} />
                    <Menu.Item as={NavLink} to={'/friends'} name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
                    <Menu.Item as={NavLink} to={'/signout'} name='logout' active={activeItem === 'friends'} onClick={this.handleItemClick} position='right'/>

                </Menu>

            </div>
        )
    }
}