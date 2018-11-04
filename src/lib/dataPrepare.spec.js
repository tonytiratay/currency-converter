import { prepareDevisesForDropdown } from './dataPrepare';

describe('dataPrepare', () => {
	it('should return an array of objects', () => {

		// Un objet comme fixer renvoi lors de l'appel à son API

		const fakeData = {
			AED: "United Arab Emirates Dirham",
			USD: "United States Dollar"
		};

		// Un tableau tel que semantic UI attend pour
		// générer un dropdown

		const expectedObject = [
			{
				icon: "flag outline",
				key: "AED",
				text: "AED - United Arab Emirates Dirham",
				value: "AED"
			},
			{
				icon: "flag outline",
				key: "USD",
				text: "USD - United States Dollar",
				value: "USD"
			}
		];
	
		// Vérifier que la fonction renvoi bien un tableau formaté
		// tel qu'il devrait l'être lorsqu'on lui passe en argument
		// un objet dont la structure est la même que celle fourni par Fixer
		
		expect(prepareDevisesForDropdown(fakeData)).toMatchObject(expectedObject);

	});
});