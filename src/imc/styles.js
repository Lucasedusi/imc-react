import styled, { css } from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 30rem;
	height: 25rem;
	justify-content: center;
	padding: 1.5rem 3rem;
	background-color: #fff;
	box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h1`
	text-align: center;
	font-size: 32px;
`;

export const Input = styled.input`
	margin: 0.8rem 0;
	height: 3rem;
	width: 100%;
	padding: 1rem;
	border-radius: 4px;
	border: 1px solid #ccc;
`;

export const Button = styled.button`
	width: 100%;
	height: 2rem;
	justify-content: center;
	align-items: center;
	background: #008080;
	border: 0;
	color: #fff;
	border-radius: 4px;
	transition: all 0.5s;

	&&:hover {
		background: #008023;
	}
`;

export const Result = styled.h1`
	text-align: center;
	font-size: 32px;
	margin-top: 20px;
`;
