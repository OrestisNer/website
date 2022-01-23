import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import { FacebookSvg, GithubSvg, TwitterSvg, LinkedInSvg } from './SVGs'
import { darkTheme, mediaQueries } from './Theme';
import { motion } from 'framer-motion';


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

        ${mediaQueries(20)`
            margin: 0.3rem 0;
        `};
    }

    ${mediaQueries(40)`
        left: 1rem;
        svg{
            width:20px;
            height:20px
        }
    `};
`;

const Line = styled(motion.span)`
    width: 2px;
    height: 3rem;
    background-color: ${props => props.fill ?? getSocialColor(props.theme)}
`;

const getSocialColor = (theme) => {
    const mq = window.matchMedia("(max-width: 50em)").matches;
    if (theme === 'dark') {
        return (mq) ? darkTheme.body : darkTheme.text;
    }

    return darkTheme.body;
}

const SocialIcons = (props) => {

    const iconProps = {
        width: 25,
        height: 25,
        fill: props.fill ?? getSocialColor(props.theme)
    };

    return (
        <Icons>
            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: 'spring', duration: 1, delay: 1 }}
            >
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "//github.com/OrestisNer" }}>
                    <GithubSvg {...iconProps} />
                </NavLink>
            </motion.div>
            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: 'spring', duration: 1, delay: 1.2 }}
            >
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "//linkedin.com/in/nerantzis-orestis-rafail/" }}>
                    <LinkedInSvg {...iconProps} />
                </NavLink>
            </motion.div>
            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: 'spring', duration: 1, delay: 1.4 }}
            >
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "//facebook.com/people/Orestis-Nerantzis/100004602365611/" }}>
                    <FacebookSvg {...iconProps} />
                </NavLink>
            </motion.div>
            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: 'spring', duration: 1, delay: 1.6 }}
            >
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "/" }}>
                    <TwitterSvg {...iconProps} />
                </NavLink>
            </motion.div>
            <Line
                theme={props.theme}
                fill={props.fill}
                initial={{ height: 0 }}
                animate={{ height: '3rem' }}
                transition={{ type: 'spring', duration: 0.2, delay: 0.8 }}
            />
        </Icons>
    )
}

export default SocialIcons
