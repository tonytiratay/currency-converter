import React, { useState, useEffect } from 'react';

import { fetchDevises, getConversionRates } from '../api/fixer';

import LoadingScreen from '../components/LoadingScreen';
import ErrorScreen from '../components/ErrorScreen';

import { Container, Segment, Form } from 'semantic-ui-react';

export default function CurrencyConverter(){

	// Initialiser tous les states nécessaires

	const [error, setError] = useState(false); // Erreur avec l'API
	const [amount, setAmount] = useState(50); // Valeur saisie par l'user
	const [devisesList, setDevisesList] = useState([]); // Liste des devises
	const [rates, setRates] = useState({USD: 1.13}); // Liste des ratios
	const [loading, setLoading] = useState(true);  // UI loading
	const [result, setResult] = useState(0); // Resultat de la conversion
	const [devise, setDevise] = useState('USD'); // Devise sélectionnée
	
	// Récupérer tous les ratios et devises si aucun de chargé

	useEffect(async () => {

		if (devisesList.length === 0 && !error) {
			let devises = await fetchDevises();
		    if (!devises.error) {
		    	setDevisesList(devises);
		    } else {
		    	setError(true);
		    }
		}

		if (!rates['EUR'] && !error){
			let rates = await getConversionRates();
			if (!rates.error) {
		    	setRates(rates);
		    } else {
		    	setError(true);
		    }
		}

		// et effectuer la première conversion avec les valeurs par défaut
		
		const fullNumber = amount * rates[devise]; // Faire la conversion
		const roundedNumber = Math.round(fullNumber * 100) / 100; // Arrondir le résultat
		setResult(roundedNumber); // L'assigner au state
		
		// Arrêter le loading pour afficher le converter
		
		setLoading(false);
	});

	// Gérer les changements de valeur ou de devise

	const handleChangeDevise = (elem, target) => {
		const deviseToConvertTo = target.value; // Récupérer la devise choisie
		setDevise(deviseToConvertTo); // L'assigner au state
		const fullNumber = amount * rates[deviseToConvertTo]; // Faire la conversion
		const roundedNumber = Math.round(fullNumber * 100) / 100; // Arrondir le résultat
		setResult(roundedNumber); // L'assigner au state
	};

	const handleChangeAmount = (elem, target) => {
		const amountToConvertFrom = target.value; // Récupérer le montant saisi
		setAmount(amountToConvertFrom); // L'assigner au state
		const fullNumber = amountToConvertFrom * rates[devise]; // Faire la conversion
		const roundedNumber = Math.round(fullNumber * 100) / 100; // Arrondir le résultat
		setResult(roundedNumber); // L'assigner au state
	};

	// Affichage du ratio entre 1 euro et la devise sélectionnée

	const displayRatio = () => {
		const fullNumber = rates[devise]; // Faire la conversion
		const roundedNumber = Math.round(fullNumber * 100) / 100; // Arrondir le résultat
		return (
			<div style={styles.ratio}>
				<h3>1 EUR = {roundedNumber} {devise}</h3>
			</div>
		);
	};

	// Affichage du convertisseur

	const converter = () => {
		return(
			<div style={styles.container}>
				<img style={styles.image} src="logo.gif" alt="logo oclock"/>
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
										value={amount}
										type='text' 
										onChange={handleChangeAmount.bind(this)}
										placeholder='€'/>
									<Form.Dropdown
										label="Devise à convertir"
										options={devisesList} 
										placeholder="devise"
										value={devise}
										onChange={handleChangeDevise.bind(this)}
										search selection fluid/>
								</Form.Group>
							</Form>
						</Segment>
						<Segment style={styles.resultArea} placeholder>
						{displayRatio()}
						<h1>{amount || 0} EUR = {result} {devise}</h1>
					</Segment>
					</Segment.Group>
				</Container>
			</div>
		);
	};

	// Afficher le bon composant en fonction de l'état de l'application

	return loading ? <LoadingScreen /> : error ? <ErrorScreen /> : converter()

}


const styles = {
	container: {
		display: 'flex',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#23c2a7',
		flexDirection: 'column'
	},
	image: {
		maxWidth: '100%'
	},
	ratio: {

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