import React from 'react';
import {Container, Image, Nav, Navbar, NavDropdown, OverlayTrigger, Tooltip} from "react-bootstrap";
import photo from '../store/logo.png'
import {Link, useLocation} from "react-router-dom";
import "../style/navbar.css"
import telegram from "../store/telegram.png"
const Header = () => {

    const location = useLocation();

    const exect = [
        '/loader',
        {/* Можно вводить любую часть домена без Header */}
    ];

    if (location.pathname === '/loader' || exect.includes(location.pathname)) {
        return null;
    }

    return (
        <Navbar  className={'p-4 '} style={{background:"lightgreen"}} variant="light" expand="lg">

           <Link className={"justify-content-center d-flex"} style={{width:"260px"}}  to={'/'}>
               <Image
                   width={'260px'}
                      src={photo} />
           </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="justify-content-end flex-grow-1 pe-3" >

                            <Link className={"navbar_button"} to={"/"} > Home </Link>

                            <Link className={"navbar_button"} to={"schedule"} > Schedule </Link>

                    </Nav>
                    <OverlayTrigger
                        placement="bottom"
                        overlay={<Tooltip id="button-tooltip-2">Ссылка на бота</Tooltip>}
                    >
                        {({ ref, ...triggerHandler }) => (
                    <Link
                        className={"navbar_button"}
                           to="https://t.me/schedule121_bot"
                        {...triggerHandler}
                    >

                        <Image width={"55px"}
                               ref={ref}
                               roundedCircle
                               src={telegram}
                        />

                    </Link>
                        )}
                    </OverlayTrigger>
                </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;