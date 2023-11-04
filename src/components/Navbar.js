import '../App.css'
import React, {useState} from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
    MDBBadge,
} from 'mdb-react-ui-kit';

function NavScrollExample() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <MDBNavbar expand='lg' light bgColor='light' className='sticky-top'>
            <MDBContainer fluid className='ps-5 pe-5'>
              
                <MDBNavbarBrand href='#' className='ms-5 fs-3 fw-bolder'>
                <MDBNavbarLink href='/'>
                    <MDBIcon fab icon="neos" size='xl'/>
                    ANAYSHP
                </MDBNavbarLink>
                </MDBNavbarBrand>
                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 d-flex justify-content-end align-items-center'>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' href='/'>
                                Home
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='/about'>About</MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBDropdown>
                                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                    Categories
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link href='/category/phones'>Phones</MDBDropdownItem>
                                    <MDBDropdownItem link href='/category/laptops'>Computers</MDBDropdownItem>
                                    <MDBDropdownItem link href='/category/tablets'>Tablets</MDBDropdownItem>
                                    <MDBDropdownItem link href='/category/televisions'>Televisions</MDBDropdownItem>
                                    <MDBDropdownItem link href='/category/monitors'>Monitors</MDBDropdownItem>
                                    <MDBDropdownItem link href='/category/speakers'>Speakers</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink href='/contact'>
                                Contact
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem className='ms-5 me-5'>
                            <MDBNavbarLink href='/search'>
                            <MDBBtn rounded className='mx-2' color='dark'>
                                Search Product
                            </MDBBtn>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem className='d-flex justify-content-around'> 
                            <MDBNavbarLink href='/user'>
                                <span>
                                    <i class="fas fa-user fa-lg"></i>
                                </span>
                            </MDBNavbarLink>
                        
                            <MDBNavbarLink href='#'>
                                <span>
                                    <MDBIcon fas icon="heart fa-lg" />
                                </span>
                            </MDBNavbarLink>
                        
                            <MDBNavbarLink href='/cart' className='d-flex align-items-center'>

                                <span>
                                    <MDBIcon fas icon='shopping-cart fa-lg'></MDBIcon>
                                </span>
                                <MDBBadge pill color='danger'>3</MDBBadge>
                            </MDBNavbarLink>
                        </MDBNavbarItem>


                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}

export default NavScrollExample;