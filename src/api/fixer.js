import axios from 'axios';

// importer la clé d'API depuis le fichier de config
// Pour les besoins de l'exercice, ce fichier est commité
// ATTENTION !!! En situation réelle, ajouter le fihcier de config au .gitignore

import { API_KEY } from '../config';

// Récupérer la liste de toutes les devises
export const fetchDevises = () => {

	// Preparer l'url pour la requête

	const fetchURL = 'http://data.fixer.io/api/symbols?access_key=' + API_KEY;
	const result = axios.get(fetchURL)
		.then((results) => {

			// Stocker dans "devises" les résultats fournis par l'API

			const devises = results.data.symbols;
			// Préparer les devise dans un tableau au format attendu
			// par le dropdown de semantic-ui

			const array = [];
	    	Object.keys(devises).map((key, index) => {
			   return array.push({
				 key,
				 value: key,
				 icon: 'flag outline',
				 text: `${key} - ${devises[key]}`
			   });
			});

			return array;
		})
		.catch((error) => {
			
			// En cas d'erreur, renvoyer un objet avec une propriété error

			return {error}
		});
	return result
};

// Récupérer la liste de tous les ratios de conversion

export const getConversionRates = () => {

	// Preparer l'url pour la requête

	const fetchURL = 'http://data.fixer.io/api/latest?access_key=' + API_KEY;
	const result = axios.get(fetchURL)
		.then((conversion) => {

			// Extraire et renvoyer les ratios de conversion
			return conversion.data.rates;
		})
		.catch((error) => {
			
			// En cas d'erreur, renvoyer un objet avec une propriété error
			return {error}
		});
	return result
};


