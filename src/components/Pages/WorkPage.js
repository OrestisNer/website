import { useEffect, useRef, lazy, Suspense } from "react";
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, mediaQueries } from '../Theme';
import Loading from "../Loading";
import Card from '../Card';
import { motion } from 'framer-motion';
import { FibonacciSvg } from '../SVGs';
import works from '../../data/works';


const Logo = lazy(() => import('../Logo'));
const SocialIcons = lazy(() => import('../SocialIcons'));
const PowerButton = lazy(() => import('../PowerButton'));
const BigTitle = lazy(() => import('../BigTitle'));

const Box = styled(motion.div)`
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

    ${mediaQueries(50)`
        left:calc(8rem + 15vw);
    `};

    ${mediaQueries(40)`
        top: 30%;
        left:calc(6rem + 15vw);
    `};

    ${mediaQueries(40)`
        left:calc(2rem + 15vw);
    `};

    ${mediaQueries(25)`
        left:calc(1rem + 15vw);
    `};
`;

const Rotate = styled.span`
    display: block;
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    width: 80px;
    height: 80px;
    z-index: 1;

    ${mediaQueries(40)`
        width:60px;
        height:60px;   
        svg{
            width:60px;
            height:60px;
        }
    `};

    ${mediaQueries(25)`
        width:50px;
        height:50px;
        svg{
            width:50px;
            height:50px;
        }
    `};
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
            <Suspense fallback={<Loading />}>
                <Box
                    key="work"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1 } }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                >
                    <Logo theme="dark" />
                    <SocialIcons fill={darkTheme.text} />
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
            </Suspense>
        </ThemeProvider>

    )
}

export default WorkPage;
