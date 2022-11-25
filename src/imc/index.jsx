import React, { useState } from "react";

import {
	Container,
	Content,
	Input,
	Button,
	ButtonClear,
	Title,
	Result,
} from "./styles";

const Imc = () => {
	const [weight, setweight] = useState();
	const [height, setheight] = useState();
	const [result, setResult] = useState();

	const calculateImc = () => {
		const imc = weight / (height * height);
		const formattedImc = imc.toFixed(2);
		setResult(formattedImc);

		if (formattedImc <= 18.5) {
			alert("Está ABAIXO do Peso");
		} else if (formattedImc <= 24.9) {
			alert("Peso ideal, Parabéns");
		} else if (formattedImc <= 29.9) {
			alert("Levemente acima dp peso, Cuidado");
		} else if (formattedImc <= 34.9) {
			alert("Obesidade Grau I");
		} else if (formattedImc <= 39.9) {
			alert("Obesidade Grau II");
		} else {
			alert("Obesidade Grau III");
		}
	};

	const clearInput = () => {
		setweight("");
		setheight("");
		setResult("");
	};

	return (
		<Content>
			<Container>
				<Title>IMC</Title>
				<Input
					type="number"
					value={weight}
					onChange={(e) => setweight(e.target.value)}
					placeholder="Peso KG"
				/>

				<Input
					type="number"
					value={height}
					onChange={(e) => setheight(e.target.value)}
					placeholder="Altura"
				/>

				<Button onClick={calculateImc}>Calcular</Button>
				<ButtonClear onClick={clearInput}>Limpar Campos</ButtonClear>

				<Result>{result}</Result>
			</Container>
		</Content>
	);
};

export default Imc;
