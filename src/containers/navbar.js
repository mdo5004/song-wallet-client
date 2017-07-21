import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
export class NavigationBar extends Component {

    render() {
        const currentUsername = 'mdo5004';
        return (
            <Navbar inverse staticTop fluid collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        SongWallet
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer exact to="/">
                            <NavItem eventKey={1}>Home</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/options">
                            <NavItem eventKey={2}>Options</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/friends">
                            <NavItem eventKey={3}>Friends</NavItem>
                        </LinkContainer>
                    </Nav>
                    <Nav pullRight>
                        <NavDropdown eventKey={4} title={currentUsername} id="basic-nav-dropdown">
                            <MenuItem eventKey={4.1}>Action</MenuItem>
                            <MenuItem eventKey={4.2}>Another action</MenuItem>
                            <MenuItem eventKey={4.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={4.3}><Glyphicon glyph="log-out"/> Logout</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        songs: state.songs
    }
}
export const ConnectedNavbar = connect(mapStateToProps,null)(NavigationBar)