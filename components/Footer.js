import React from 'react';;
import styled from 'styled-components';

const FooterCls = styled.footer`
    background: linear-gradient(to right, #A6FFCB, #12D8FA, #1FA2FF);
    text-align:center;
    padding:2rem;
`;

const Footer = () => {
    return (
        <div>
            <FooterCls>&copy;2021 E-Commerce site. All rights reserved.</FooterCls> 
        </div>
    )
}

export default Footer;
