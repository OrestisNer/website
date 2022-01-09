import React from 'react'
import styled from 'styled-components'
import { darkTheme } from './Theme';

const LogoComponent = styled.h1`
    display: inline-block;
    color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};
    font-family: 'Pacifico', cursive;

    position: fixed;
    left: 2rem;
    top: 2rem;
    z-index: 3;
`;

const Logo = (props) => {
    return (
        <LogoComponent color={props.theme}>
            ON
        </LogoComponent>
    )
}

export default Logo
