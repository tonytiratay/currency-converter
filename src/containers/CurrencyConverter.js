import React, { useState, useEffect } from 'react';

import { fetchDevises, getConversionRates } from '../api/fixer';

import { Container, Segment, Form, Label, Dropdown, Input } from 'semantic-ui-react';

export default function CurrencyConverter(){
	const [amount, setAmount] = useState(100);
	const [devisesList, setDevisesList] = useState([]);
	const [rates, setRates] = useState({});
	const [loading, setLoading] = useState(true);
	const [result, setResult] = useState(0);
	const [devise, setDevise] = useState('USD');
	
	useEffect(async () => {
		if (devisesList.length == 0) {
			let devises = await fetchDevises();
		    if (!devises.error) {
		    	setDevisesList(devises);
		    }
		}

		if (!rates['EUR']){
			let rates = await getConversionRates();
			if (!rates.error) {
		    	setRates(rates);
		    }
		}
		setLoading(false);
	});

	const handleChangeDevise = (elem, target) => {
		const deviseToConvertTo = target.value;
		setDevise(deviseToConvertTo);
		setResult(amount * rates[deviseToConvertTo]);
	};

	const handleChangeAmount = (elem, target) => {
		const amountToConvertFrom = target.value;
		setAmount(amountToConvertFrom);
		setResult(amountToConvertFrom * rates[devise]);
	};

	return(
		<div style={styles.container}>
			<Container>
				<Segment.Group style={styles.segments}>
					<Segment>
						<h1>Currency Converter</h1>
					</Segment>
					<Segment>
						<Form>
							<Form.Group widths='equal'>
								<Input
									value={amount}
									loading={loading}  
									type='text' 
									onChange={handleChangeAmount.bind(this)}
									placeholder='€'/>
								<Dropdown
									loading={loading} 
									options={devisesList} 
									placeholder="devise"
									value={devise}
									onChange={handleChangeDevise.bind(this)}
									search selection fluid/>
							</Form.Group>
						</Form>
					</Segment>
					<Segment style={styles.resultArea} placeholder>
					<h1>{result} {devise}</h1>
				</Segment>
				</Segment.Group>
			</Container>
		</div>
	);
}


const styles = {
	container: {
		display: 'flex',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#23c2a7',
	},
	segments: {
		width: '100%'
	},
	resultArea: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
};