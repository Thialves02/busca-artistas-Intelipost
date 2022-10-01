import React from 'react'
import { NavbarContainer } from './style'
import logo from '../../assets/images/logo.svg'

export default function Navbar() {
    return (
        <NavbarContainer>
            <img src={logo} alt='logo' />
        </NavbarContainer>
    )
}
