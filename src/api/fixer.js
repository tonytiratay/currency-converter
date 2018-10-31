import axios from 'axios';

const API_KEY = "ab5a60705d698ab7b12cec067843600b";

export const fetchDevises = () => {
	let result = axios.get('http://data.fixer.io/api/symbols?access_key=' + API_KEY)
		.then((results) => {
			const devises = results.data.symbols;
			const array = [];
	    	Object.keys(devises).map(function(key, index) {
			   array.push({
				 key,
				 value: key,
				 text: `${key} - ${devises[key]}`
			   });
			});
			return array;
		})
		.catch((error) => {
			return {error}
		});
	return result
};

export const getConversionRates = () => {
	let result = axios.get('http://data.fixer.io/api/latest?access_key=' + API_KEY)
		.then((conversion) => {
			return conversion.data.rates;
		})
		.catch((error) => {
			return {error}
		});
	return result
};


