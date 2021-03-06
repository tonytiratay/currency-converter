import React, { useState, useEffect } from 'react'; // Importer React et les 2 hooks nécessaires
import { fetchDevises, getConversionRates } from '../api/fixer'; // Import api methods
import LoadingScreen from '../components/LoadingScreen'; // Import Loading Screen
import ErrorScreen from '../components/ErrorScreen'; // Import Error Screen
import { container } from '../styles'; // Import main styles
import { Container, Segment, Form, Icon } from 'semantic-ui-react'; // Import semantic ui components

export default function CurrencyConverter(){

	// Initialiser tous les states nécessaires (Hook useState)

	const [error, setError] = useState(false); // Erreur avec l'API
	const [amount, setAmount] = useState(15); // Valeur saisie par l'user
	const [devisesList, setDevisesList] = useState([]); // Liste des devises
	const [rates, setRates] = useState({}); // Liste des ratios
	const [loading, setLoading] = useState(true);  // UI loading true par defaut
	const [result, setResult] = useState(0); // Resultat de la conversion
	const [devise, setDevise] = useState('USD'); // Devise sélectionnée
	
	// Récupérer tous les ratios et devises si aucun de chargé
	// Cette fonction (Hook useEffect) est appelée au premier render, et à tous les suivants.

	useEffect(async () => {

		if (devisesList.length === 0 && !error) {
			
			// Appel API pour récupérer les devises

			let devises = await fetchDevises();

		    if (!devises.error) { 
		    	// Si pas d'erreur, modifier le state avec les devises
		    	setDevisesList(devises);
		    } else {  
		    	// Sinon modifier le state avec l'error message
		    	setError(devises.error.message);
		    }
		}

		if (!rates['EUR'] && !error){
			
			// Appel API pour récupérer les ratios de conversion

			let rates = await getConversionRates();

			if (!rates.error) {  
				// Si pas d'erreur, modifier le state avec les ratios de conversion
		    	setRates(rates);
		    } else {  
		    	// Sinon modifier le state avec l'error message
		    	setError(rates.error.message);
		    }
		}

		// Effectuer la première conversion avec les valeurs par défaut
		
		const fullNumber = amount * rates[devise]; // Faire la conversion avec la devise
		const roundedNumber = Math.round(fullNumber * 100) / 100; // Arrondir le résultat
		setResult(roundedNumber); // L'assigner au state
		
		// Arrêter le loading pour afficher l'application
		
		setLoading(false);
	});

	// Gérer les changements de valeur ou de devise

	const handleChangeDevise = (e, target) => {
		const deviseToConvertTo = target.value; // Récupérer la devise choisie
		setDevise(deviseToConvertTo); // L'assigner au state
		const fullNumber = amount * rates[deviseToConvertTo]; // Faire la conversion avec la devise
		const roundedNumber = Math.round(fullNumber * 100) / 100; // Arrondir le résultat
		setResult(roundedNumber); // L'assigner au state
	};

	const handleChangeAmount = (e, target) => {
		const amountToConvertFrom = target.value; // Récupérer le montant saisi
		setAmount(amountToConvertFrom); // L'assigner au state
		const fullNumber = amountToConvertFrom * rates[devise]; // Faire la conversion avec la devise
		const roundedNumber = Math.round(fullNumber * 100) / 100; // Arrondir le résultat
		setResult(roundedNumber); // L'assigner au state
	};

	// Affichage du ratio entre 1 euro et la devise sélectionnée

	const displayRatio = () => {

		// Récupérer le ratio et l'arrondir
		const roundedNumber = Math.round(rates[devise] * 100) / 100;

		return (
			<div style={styles.ratio}>
				<h3>1 EUR <Icon name="arrow right" />{roundedNumber} {devise}</h3>
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
						<Segment inverted>
							<h1><Icon name="exchange" /> Currency Converter</h1>
						</Segment>
						<Segment style={styles.form}>
							<Form>
								<Form.Group widths='equal'>
									<Form.Input
										label="Montant en €"
										value={amount}
										type='number' 
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
							<h1>
								{amount || 0} EUR <Icon name="arrow right" />
								<span style={{fontSize: 48}}> {result} {devise}</span>
							</h1>
							<Icon style={styles.moneyIcon} name="money bill alternate outline" />
							{displayRatio()}
						</Segment>
					</Segment.Group>
				</Container>
			</div>
		);
	};

	// Afficher le bon composant en fonction de l'état de l'application

	return loading ? <LoadingScreen /> : error ? <ErrorScreen message={error} /> : converter()

}


const styles = {
	container,
	image: {
		maxWidth: '100%'
	},
	segments: {
		width: '100%',
		color: '#333'
	},
	form: {
		background: '#eee',
	},
	resultArea: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	moneyIcon: {
		fontSize: 48,
		color: '#eee',
		marginTop: 13
	},
	ratio: {
		color: '#ccc'
	}
};