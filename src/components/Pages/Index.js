import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { ContactLink, BlogLink, WorkLink, AboutLink, SkillsLink } from '../Navigation';
import Logo from '../Logo';
import PowerButton from '../PowerButton';
import SocialIcons from '../SocialIcons';
import Intro from '../Intro';
import { FibonacciSvg } from '../SVGs';

const IndexContainer = styled.div`
    background: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    position: relative;

    h2, h3, h4, h5, h6 {
        font-family: 'Karla', sans-serif;
        font-weight: 500;
    }
`
const Container = styled.div`
    padding: 2rem;
`;

const rotate = keyframes`
    from {
        transform: rorate(0);
    } to {
        transform: rotate(360deg);
    }
`;

const DarkDiv = styled.div`
    background-color: #000;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 50%;
    width: ${props => props.click ? '50%' : '0%'};
    height: ${props => props.click ? '100%' : '0%'};
    z-index: 1;
    transition: height 0.5s ease, width 1s ease 0.5s;
`;

const Center = styled.button`
    position: absolute;
    top: ${props => props.click ? '85%' : '50%'};
    left: ${props => props.click ? '92%' : '50%'};
    transform: translate(-50%, -50%);
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 1s ease;

    &>:first-child {
        animation: ${rotate} infinite 1.5s linear;
    }

    &>:last-child {
        display: ${props => props.click ? 'none' : 'inline-block'};
        padding-top: 1rem;
    }
`;

const BottomBar = styled.div`
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
    width: 100%;

    display: flex;
    justify-content: space-evenly;
`;


const Index = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <IndexContainer>
            <DarkDiv click={click} />
            <Container>
                <PowerButton />
                <Logo theme={click ? 'dark' : 'light'} />
                <SocialIcons theme={click ? 'dark' : 'light'} />

                <Center click={click}>
                    <FibonacciSvg onClick={() => handleClick()} width={click ? 120 : 200} height={click ? 120 : 200} fill='currentColor' />
                    <span>Click Here</span>
                </Center>

                <ContactLink />
                <BlogLink />
                <WorkLink click={click} />

                <BottomBar>
                    <AboutLink click={click} />
                    <SkillsLink />
                </BottomBar>
            </Container>
            {click ? <Intro click={click} /> : null}
        </IndexContainer>
    )
}

export default Index;
