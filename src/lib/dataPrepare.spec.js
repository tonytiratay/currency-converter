import { prepareDevisesForDropdown } from './dataPrepare';

describe('dataPrepare', () => {
	it('should return an array of objects', () => {

		// Un objet comme fixer renvoi lors de l'appel à son API

		const fakeData = {
			AED: "United Arab Emirates Dirham",
		};

		// Un tableau tel que semantic UI attend pour
		// générer un dropdown

		const expectedObject = [{
			icon: "flag outline",
			key: "AED",
			text: "AED - United Arab Emirates Dirham",
			value: "AED"
		}];
	
		// Vérifier que la fonction renvoi bien un tableau formatté
		// tel qu'il devrait l'être lorsqu'on lui passe en argument
		// un objet tel que fourni par Fixer
		
		expect(prepareDevisesForDropdown(fakeData)).toMatchObject(expectedObject);

	});
});