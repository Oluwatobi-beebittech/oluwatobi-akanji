'use client'

import * as React from 'react';
import styled from 'styled-components';
import { colour, fontFamily, fontSize, space } from '@/theme';

const Container = styled.section`
    background-color: ${colour('black')};
    padding: ${space('space-24')};
    min-height: 100dvh;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${space('space-8')}
`

const Title = styled.h1`
    font-family: ${fontFamily('heading')};
    color: ${colour('primary')};
    font-size: ${fontSize('xxxLarge')};
`;

const Subtitle = styled.h2`
    font-family: ${fontFamily('body')};
    color: ${colour('secondary')};
    font-size: ${fontSize('large')};
    font-weight: 800;
`;

export const Hero = () => {
    return (
        <Container>
            <TitleContainer>
                <Title>Oluwatobi Akanji</Title>
                <Subtitle>Software Engineer</Subtitle>
            </TitleContainer>
        </Container>
    );
}