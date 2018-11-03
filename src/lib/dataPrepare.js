export const prepareDevisesForDropdown = function (devises) {
	
	//Initialiser un tableau vide
	const array = [];
	
	// Pour chaque propriété de l'objet "devises" fourni
	// pusher dans le tableau un objet avec les valeurs
	// attendues par Semantic UI pour générer un dropdown
	Object.keys(devises).map((key) => {
	   return array.push({
		 key,
		 value: key,
		 icon: 'flag outline',
		 text: `${key} - ${devises[key]}`
	   });
	});
	console.log(array);
	return array;
};