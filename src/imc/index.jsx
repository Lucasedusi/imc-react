import React, { useState } from "react";

import { Container, Input, Button, Title, Result } from "./styles";

const Imc = () => {
	const [weight, setweight] = useState();
	const [height, setheight] = useState();
	const [result, setResult] = useState();

	console.log(height, weight);

	const calculateImc = () => {
		const imc = weight / (height * height);
		const formattedImc = imc.toFixed(2);
		setResult(formattedImc);
	};

	return (
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

			<Result>{result}</Result>
		</Container>
	);
};

export default Imc;
