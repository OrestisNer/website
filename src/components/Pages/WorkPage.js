import React, { useRef, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from '../Theme';
import Logo from '../Logo';
import SocialIcons from '../SocialIcons';
import PowerButton from '../PowerButton';
import works from '../../data/works';
import Card from '../Card';
import { FibonacciSvg } from '../SVGs';
import BigTitle from '../BigTitle';
import { motion } from 'framer-motion';

const Box = styled.div`
    background-color: ${props => props.theme.body};
    height: 400vh;
    position: relative;
    display: flex;
    align-items: center;
`;

const Main = styled(motion.ul)`
    position: fixed;
    top: 12rem;
    left: calc(10rem + 15vw);
    height: 40vh;
    display: flex;

    color: white;
`;

const Rotate = styled.span`
    display: block;
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    width: 80px;
    height: 80px;
    z-index: 1;
`;

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,

        transition: {
            staggerChildren: 0.5,
            duration: 0.5
        }
    }
};

const WorkPage = () => {

    const ref = useRef(null);
    const fibonacciRef = useRef(null)

    useEffect(() => {
        let element = ref.current;

        const rotate = () => {
            element.style.transform = `translateX(${-window.scrollY}px)`;
            fibonacciRef.current.style.transform = `rotate(${-window.scrollY}deg)`;
        }

        window.addEventListener('scroll', rotate);
        return () => window.removeEventListener('scroll', rotate);
    }, []);




    return (
        <ThemeProvider theme={darkTheme}>
            <Box>
                <Logo theme="dark" />
                <SocialIcons theme="dark" />
                <PowerButton />
                <BigTitle text="WORK" top='10%' right="20%" />
                <Main ref={ref} variants={container} initial="hidden" animate="show">
                    {works.map(work => (
                        <Card key={work.id} data={work} />
                    ))}
                </Main>
                <Rotate ref={fibonacciRef}>
                    <FibonacciSvg width={80} height={80} fill={darkTheme.text} />
                </Rotate>
            </Box>
        </ThemeProvider>

    )
}

export default WorkPage;
