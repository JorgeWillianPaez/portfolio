"use client"
import styled from "styled-components"

export const Main = styled.main`
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
`;

export const Hero = styled.section`
    margin: 6rem 0;
    transition: opacity 0.6s ease, transform 0.6s ease;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    opacity: 1;
    transform: translateY(0);
`;

export const Title = styled.h1`
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #4a8fff, #61dafb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const Subtitle = styled.h2`
    font-size: 2rem;
    margin-bottom: 1.5rem;
`;