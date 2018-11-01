import React, { useState, useEffect } from 'react';

import { fetchDevises, getConversionRates } from '../api/fixer';

import { Container, Segment, Form } from 'semantic-ui-react';

export default function CurrencyConverter(){

	// Initialiser tous les states nécessaires

	const [amount, setAmount] = useState(0); // Valeur saisie par l'user
	const [devisesList, setDevisesList] = useState([]); // Liste des devises
	const [rates, setRates] = useState({}); // Liste des ratios
	const [loading, setLoading] = useState(true);  // UI loading
	const [result, setResult] = useState(0); // Resultat de la conversion
	const [devise, setDevise] = useState('USD'); // Devise sélectionnée
	
	// Récupérer tous les ratios et devises si aucun de chargé

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
		
		// Arrêter le loading en cas de succès comme d'erreur

		setLoading(false);
	});

	// Gérer les changements de valeur ou de devise

	const handleChangeDevise = (elem, target) => {
		const deviseToConvertTo = target.value; // Récupérer la devise choisie
		setDevise(deviseToConvertTo); // L'assigner au state
		const fullNumber = amount * rates[deviseToConvertTo]; // Faire la conversion
		const roundedNumber = Math.round(fullNumber * 100) / 100; // Arrondir le résultat
		setResult(roundedNumber); // L'assinger au state
	};

	const handleChangeAmount = (elem, target) => {
		const amountToConvertFrom = target.value; // Récupérer le montant saisi
		setAmount(amountToConvertFrom); // L'assigner au state
		const fullNumber = amountToConvertFrom * rates[devise]; // Faire la conversion
		const roundedNumber = Math.round(fullNumber * 100) / 100; // Arrondir le résultat
		setResult(roundedNumber); // L'assinger au state
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
								<Form.Input
									label="Montant en €"
									disabled={loading}
									value={amount}
									loading={loading}  
									type='text' 
									onChange={handleChangeAmount.bind(this)}
									placeholder='€'/>
								<Form.Dropdown
									label="Devise à convertir"
									disabled={loading}
									loading={loading} 
									options={devisesList} 
									placeholder="devise"
									value={devise}
									onChange={handleChangeDevise.bind(this)}
									search selection fluid/>
							</Form.Group>
						</Form>
					</Segment>
					<Segment style={styles.resultArea} loading={loading} placeholder>
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