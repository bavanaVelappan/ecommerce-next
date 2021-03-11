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
const Qty = styled.span`
    position:absolute;
    right:0;
    font-size:1rem;
    margin-right:30.5rem;
    top:0;
    margin-top:1.5rem;
    font-weight:600;
`;

const NavBar = () => {
    const { openCart, totalQty } = useCart();
    const handleClick = () => {
        openCart();
    }

    return (
        <Nav>
            <NavContainer>
                <Link href='/'>
                    <UnstyledLink>Bavanya Boutique</UnstyledLink>
                </Link>
                <ShoppingCart onClick={handleClick}/><Qty>{totalQty}</Qty>
            </NavContainer>
        </Nav>
    )
}
export default NavBar;