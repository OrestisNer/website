import { lazy, Suspense, useState, useEffect } from 'react';
import styled from 'styled-components';
import background from '../../assets/images/blog-page-background.jpg';
import { mediaQueries } from '../Theme';
import { motion } from 'framer-motion';
import Loading from '../Loading';

import blogs from '../../data/blogs';

const Logo = lazy(() => import('../Logo'));
const SocialIcons = lazy(() => import('../SocialIcons'));
const PowerButton = lazy(() => import('../PowerButton'));
const Blog = lazy(() => import('../Blog'));
const Anchor = lazy(() => import('../Anchor'));
const BigTitle = lazy(() => import('../BigTitle'));


const MainContainer = styled(motion.div)`
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
`;

const Container = styled.div`
    background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.8)`};
    width: 100%;
    height: auto;
    position: relative;
    padding-bottom: 5rem;
`;

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10rem;

    ${mediaQueries(30)`
        padding-top: 7rem;
    `};
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
    grid-gap: calc(1rem + 2vw);

    ${mediaQueries(50)`
        grid-template-columns: 100%;
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
}

const BlogPage = () => {
    const [numbers, setNumbers] = useState(0);

    useEffect(() => {
        let num = (window.innerHeight - 70) / 30 + 4;
        setNumbers(parseInt(num));
    }, []);

    return (
        <Suspense fallback={<Loading />}>
            <MainContainer
                variants={container}
                initial='hidden'
                animate='show'
                exit={{
                    opacity: 0, transition: { duration: 0.5 }
                }}
            >
                <Container>
                    <Logo />
                    <PowerButton />
                    <SocialIcons />
                    <BigTitle text="BLOG" top="5rem" left="5rem" />

                    <Anchor numbers={numbers} />
                    <Center>
                        <Grid variants={container} initial="hidden" animate="show">
                            {blogs.map(blog => (
                                <Blog key={blog.id} blog={blog} />
                            ))};
                        </Grid>
                    </Center>
                </Container>
            </MainContainer>
        </Suspense>
    )
}

export default BlogPage;
