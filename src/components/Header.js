import React from 'react';
import {Container, Image, Nav, Navbar, NavDropdown, OverlayTrigger, Tooltip} from "react-bootstrap";
import photo from '../store/logo.png'
import {Link} from "react-router-dom";
import "../style/navbar.css"
import telegram from "../store/telegram.png"
const Header = () => {


    return (
        <Navbar className={'p-4 w-100'} style={{background:"lightgreen"}} variant="light" expand="lg">

           <Link className={"h-50 justify-content-center d-flex"} style={{width:"500px"}}  to={'/'}>
               <img className={"w-75 h-50"} src={photo} />
           </Link>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav style={{marginLeft:"auto"}}>

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

            </Container>
        </Navbar>
    );
};

export default Header;