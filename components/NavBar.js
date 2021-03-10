import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import UnstyledLink from '../components/styled/unstyled';
import { FiShoppingCart } from "react-icons/fi";
import useCart from "../hooks/useCart";

const Nav = styled.nav`
    background: linear-gradient(to right, #A6FFCB, #12D8FA, #1FA2FF);
    padding:2rem;
    font-size:2rem;
    border-bottom:3px dotted #fafafa;
`;

const NavContainer = styled.div`
    max-width:968px;
    width:100%;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
`;

const ShoppingCart = styled(FiShoppingCart)`
    margin-right: 1rem;

    &:hover {
        cursor:pointer;
    }
`;

const NavBar = () => {
    const { openCart } = useCart();
    const handleClick = () => {
        openCart();
    }

    return (
        <Nav>
            <NavContainer>
                <Link href='/'><UnstyledLink>Bavanya Boutique</UnstyledLink></Link>
                <ShoppingCart onClick={handleClick}/>
            </NavContainer>
        </Nav>
    )
}


export default NavBar;