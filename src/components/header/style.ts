"use client";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
	top: 0;
	width: 100%;
	background: rgba(20, 20, 20, 0.9);
	backdrop-filter: blur(10px);
	padding: 1rem;
	z-index: 100;
`;

export const Navbar = styled.nav`
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	justify-content: flex-end;
	gap: 2rem;
`;

export const NavLink = styled.a`
	color: #E0E0E0;
	text-decoration: none;
	font-weight: 500;
	transition: color 0.3s ease;

	&:hover {
		color: #4a8fff;
	}
`;