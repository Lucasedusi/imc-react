import styled from "styled-components";

export const Content = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 2rem;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 30rem;
	height: 25rem;
	justify-content: center;
	padding: 1.5rem 3rem;
	background-color: #fff;
	box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
	border-radius: 5px;
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
	height: 2.5rem;
	justify-content: center;
	align-items: center;
	background: #008080;
	border: 0;
	color: #fff;
	border-radius: 4px;
	transition: all 0.5s;
	margin-bottom: 1rem;
	font-size: 18px;
	font-weight: 600;

	&&:hover {
		background: #008b8b;
	}
`;

export const ButtonClear = styled.button`
	width: 100%;
	height: 2.5rem;
	justify-content: center;
	align-items: center;
	background: #a0522d;
	border: 0;
	color: #fff;
	border-radius: 4px;
	font-size: 18px;
	font-weight: 600;
	transition: all 0.5s;

	&&:hover {
		background: #cd853f;
	}
`;

export const Result = styled.h1`
	text-align: center;
	font-size: 32px;
	margin-top: 20px;
`;
