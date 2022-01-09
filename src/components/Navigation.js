import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const linkAnimation = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 }
};

const Contact = styled.a`
    color: ${props => props.theme.text};
    position: absolute;
    top: 2rem;
    right: calc(1rem + 2vw);
    text-decoration: none;
    z-index: 1;
    transition: all .2s ease-in-out;
`;

export const ContactLink = () => (
    <Contact target="_blank" href="mailto:orestis.ner@gmail.com">
        <motion.h2 {...linkAnimation}>
            Say hi..
        </motion.h2>
    </Contact>
);


const Blog = styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    top: 50%;
    right: calc(1rem + 2vw);
    transform: rotate(90deg) translate(-50%, -50%);
    text-decoration: none;
    z-index: 1;
`;

export const BlogLink = () => (
    <Blog to="/blog">
        <motion.h2 {...linkAnimation}>Blog</motion.h2>
    </Blog>
);


const Work = styled(NavLink)`
    color: ${props => props.click ? props.theme.body : props.theme.text};
    position: absolute;
    top: 50%;
    left: calc(1rem + 2vw);
    transform: translate(-50%, -50%) rotate(-90deg);
    text-decoration: none;
    z-index: 1;
`;

export const WorkLink = (props) => (
    <Work click={props.click} to="/work">
        <motion.h2 {...linkAnimation}>Work</motion.h2>
    </Work>
);

const About = styled(NavLink)`
    color: ${props => props.click ? props.theme.body : props.theme.text};
    text-decoration: none;
    z-index: 1;
`;

export const AboutLink = (props) => (
    <About click={props.click} to="/about">
        <motion.h2 {...linkAnimation}>About</motion.h2>
    </About>
);

const Skills = styled(NavLink)`
    color: ${props => props.theme.text};
    text-decoration: none;
    z-index: 1;
`;

export const SkillsLink = () => (
    <Skills to="/skills">
        <motion.h2 {...linkAnimation}>Skills</motion.h2>
    </Skills>
);


