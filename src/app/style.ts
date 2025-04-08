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
    opacity: 1;
    transform: translateY(0);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
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

export const About = styled.section`
    margin: 6rem 0;
    transition: opacity 0.6s ease, transform 0.6s ease;
    opacity: 1;
    transform: translateY(0);
`;

export const AboutContainer = styled.div`
    display: flex;
    gap: 2rem;
    align-items: start;
    margin-top: 2rem;
`;

export const ProfileImage = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    background: var(--card-bg);
    border: 2px solid var(--primary-color);
    flex-shrink: 0;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
`;

export const ProfilePlaceholder = styled.svg`
    width: 100%;
    height: 100%;
    padding: 2rem;
    color: #4a8fff;
`;

export const AboutText = styled.div`
    flex: 1;
`;

export const Skills = styled.section`
    margin: 6rem 0;
    transition: opacity 0.6s ease, transform 0.6s ease;
    opacity: 1;
    transform: translateY(0);
`;

export const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
`;

export const SkillCategory = styled.div`
    background: #2a2a2a;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
    }

    h3 {
        color: #4a8fff;
        margin-bottom: 1rem;
    }

    ul {
        list-style: none;
    }

    li {
        margin: 0.5rem 0;
        padding-left: 1.5rem;
        position: relative;
    }
`;

export const Contact = styled.section`
    margin: 6rem 0;
    transition: opacity 0.6s ease, transform 0.6s ease;
    opacity: 1;
    transform: translateY(0);
`;

export const ContactLinks = styled.div`
    display: flex;
    gap: 2rem;
    margin-top: 2rem;

    a {
        color: #4a8fff;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.3s ease;
    }

    a:hover {
        color: #61dafb;
    }
`;