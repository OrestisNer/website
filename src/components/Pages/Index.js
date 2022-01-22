import { lazy, Suspense, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FibonacciSvg } from '../SVGs';
import { mediaQueries } from '../Theme';
import Loading from '../Loading';
import Intro from '../Intro';

import { ContactLink, BlogLink, WorkLink, AboutLink, SkillsLink } from '../Navigation';
import PowerButton from '../PowerButton';
import SocialIcons from '../SocialIcons';
const Logo = lazy(() => import('../Logo'));

const IndexContainer = styled(motion.div)`
    background: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    position: relative;

    h2, h3, h4, h5, h6 {
        font-family: 'Karla', sans-serif;
        font-weight: 500;
    }

    h2 {
        ${mediaQueries(40)`
            font-size:1.2em;
        `};
    
        ${mediaQueries(30)`
            font-size:1em;
        `};
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

    ${props => props.click ?
        mediaQueries(50)`
            height: 50%;
            right:0;
            width: 100%;
            transition: width 0.5s ease, height 1s ease 0.5s;
        ` :
        mediaQueries(50)`
            height: 0;
            width: 0;
        `
    }
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
    
    @media only screen and (max-width: 50em) {
        top: ${(props) => (props.click ? "90%" : "50%")};
        left: ${(props) => (props.click ? "90%" : "50%")};
        width: ${(props) => (props.click ? "80px" : "150px")};
        height: ${(props) => (props.click ? "80px" : "150px")};
    }

    @media only screen and (max-width: 30em) {
        width: ${(props) => (props.click ? "40px" : "150px")};
        height: ${(props) => (props.click ? "40px" : "150px")};
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
    const [path, setpath] = useState("");

    const handleClick = () => setClick(!click);

    const moveY = {
        y: "-100%",
    };
    const moveX = {
        x: `${path === "work" ? "100%" : "-100%"}`,
    };
    const mq = window.matchMedia("(max-width: 50em)").matches;

    return (
        <Suspense fallback={<Loading />}>
            <IndexContainer
                key="modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={path === "about" || path === "skills" ? moveY : moveX}
                transition={{ duration: 0.5 }}
            >
                <DarkDiv click={+click} />
                <Container>
                    <PowerButton />
                    <Logo theme={click ? "dark" : "light"} />
                    <SocialIcons theme={click ? "dark" : "light"} />

                    <Center click={+click}>
                        <FibonacciSvg
                            onClick={() => handleClick()}
                            width={click ? 80 : 150}
                            height={click ? 80 : 150}
                            fill="currentColor"
                        />
                        <span>Click Here</span>
                    </Center>

                    <ContactLink click={+click} />
                    <BlogLink click={+click} />
                    <WorkLink click={+click} />

                    <BottomBar>
                        <AboutLink click={+click} />
                        <SkillsLink />
                    </BottomBar>
                </Container>

                {click ? <Intro click={+click} /> : null}
            </IndexContainer>
        </Suspense>
    )
}

export default Index;
