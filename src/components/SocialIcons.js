import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import { FacebookSvg, GithubSvg, TwitterSvg, LinkedInSvg } from './SVGs'
import { darkTheme } from './Theme';

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 2rem;

    z-index: 3;

    &>*:not(:last-child) {
        margin: 0.5rem 0;
    }
`;

const Line = styled.span`
    width: 2px;
    height: 3rem;
    background-color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body}
`;



const SocialIcons = (props) => {
    const iconProps = {
        width: 25,
        height: 25,
        fill: props.theme === 'dark' ? darkTheme.text : darkTheme.body
    };

    return (
        <Icons>
            <div>
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "//github.com/OrestisNer" }}>
                    <GithubSvg {...iconProps} />
                </NavLink>
            </div>
            <div>
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "//linkedin.com/in/nerantzis-orestis-rafail/" }}>
                    <LinkedInSvg {...iconProps} />
                </NavLink>
            </div>
            <div>
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "//facebook.com/people/Orestis-Nerantzis/100004602365611/" }}>
                    <FacebookSvg {...iconProps} />
                </NavLink>
            </div>
            <div>
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "/" }}>
                    <TwitterSvg {...iconProps} />
                </NavLink>
            </div>
            <Line color={props.theme} />
        </Icons>
    )
}

export default SocialIcons
