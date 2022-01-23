import { lazy, Suspense, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FibonacciSvg } from '../SVGs';
import { mediaQueries } from '../Theme';
import Loading from '../Loading';
import Intro from '../Intro';

// Components
import { ContactLink, BlogLink, WorkLink, AboutLink, SkillsLink } from '../Navigation';
const Logo = lazy(() => import('../Logo'));
const PowerButton = lazy(() => import('../PowerButton'));
const SocialIcons = lazy(() => import('../SocialIcons'));

const IndexContainer = styled(motion.div)`
    background: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;

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
    width: ${props => props.$startClick ? '50%' : '0%'};
    height: ${props => props.$startClick ? '100%' : '0%'};
    z-index: 1;
    transition: height 0.5s ease, width 1s ease 0.5s;

    ${props => props.$startClick ?
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
    top: ${props => props.$startClick ? '85%' : '50%'};
    left: ${props => props.$startClick ? '92%' : '50%'};
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
        display: ${props => props.$startClick ? 'none' : 'inline-block'};
        padding-top: 1rem;
    }
    
    @media only screen and (max-width: 50em) {
        top: ${(props) => (props.$startClick ? "90%" : "50%")};
        left: ${(props) => (props.$startClick ? "90%" : "50%")};
        width: ${(props) => (props.$startClick ? "80px" : "150px")};
        height: ${(props) => (props.$startClick ? "80px" : "150px")};
    }

    @media only screen and (max-width: 30em) {
        width: ${(props) => (props.$startClick ? "40px" : "150px")};
        height: ${(props) => (props.$startClick ? "40px" : "150px")};
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
    const [startClick, setStartClick] = useState(false);
    const handleStartClick = () => setStartClick(!startClick);

    return (
        <Suspense fallback={<Loading />}>
            <IndexContainer
                key="modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <DarkDiv $startClick={startClick} />
                <Container>
                    <PowerButton />
                    <Logo theme={startClick ? "dark" : "light"} />
                    <SocialIcons theme={startClick ? "dark" : "light"} />

                    <Center $startClick={startClick}>
                        <FibonacciSvg
                            onClick={() => handleStartClick()}
                            width={startClick ? 80 : 150}
                            height={startClick ? 80 : 150}
                            fill="currentColor"
                        />
                        <span>Click Here</span>
                    </Center>

                    <ContactLink $startClick={startClick} />
                    <BlogLink $startClick={startClick} />
                    <WorkLink $startClick={startClick} />

                    <BottomBar>
                        <AboutLink $startClick={startClick} />
                        <SkillsLink />
                    </BottomBar>
                </Container>

                {startClick ? <Intro $startClick={startClick} /> : null}
            </IndexContainer>
        </Suspense>
    )
}

export default Index;
