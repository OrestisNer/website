import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import background from '../../assets/images/blog-page-background.jpg';
import Logo from '../Logo';
import SocialIcons from '../SocialIcons';
import PowerButton from '../PowerButton';
import Blog from '../Blog';
import blogs from '../../data/blogs';
import Anchor from '../Anchor';
import BigTitle from '../BigTitle';

const MainContainer = styled.div`
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
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
    grid-gap: calc(1rem + 2vw);
`;

const BlogPage = () => {
    const [numbers, setNumbers] = useState(0);

    useEffect(() => {
        let num = (window.innerHeight - 70) / 30 + 4;
        setNumbers(parseInt(num));
    }, []);

    return (
        <MainContainer>
            <Container>
                <Logo />
                <PowerButton />
                <SocialIcons />
                <BigTitle text="BLOG" top="5rem" left="5rem" />

                <Anchor numbers={numbers} />
                <Center>
                    <Grid>
                        {blogs.map(blog => (
                            <Blog key={blog.id} blog={blog} />
                        ))};
                    </Grid>
                </Center>
            </Container>
        </MainContainer>
    )
}

export default BlogPage;
