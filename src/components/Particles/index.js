import React from 'react'
import Particles from 'react-tsparticles';
import styled from 'styled-components';
import lightConfig from './config/particlesjs-config-light.json';
import darkConfig from './config/particlesjs-config.json';

const Box = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 0;
`;

const ParticlesComponent = (props) => {
    return (
        <Box>
            <Particles
                params={props.theme === 'dark' ? darkConfig : lightConfig}
                style={{ position: 'absolute', top: 0 }}
            />
        </Box>
    )
}

export default ParticlesComponent
