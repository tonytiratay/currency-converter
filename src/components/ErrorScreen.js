import React from 'react';
// Import main styles
import { container } from '../styles';
import { Icon } from 'semantic-ui-react';

// Composant affiché lorsque l'APU n'est pas joignable 

export default function ErrorScreen() {
  return (
    <div style={styles.container}>
    	<div style={styles.imageContainer}>
    		<div>
    			<img style={styles.image} src="logo.gif" alt="logo oclock"/>
			</div>
    		<div>
    			<h1>Currency Converter</h1>
			</div>
    		<div>
    			<p style={styles.errorText}>
    				<Icon name='warning' />Oups...
				</p>
				<p style={styles.errorText}>Impossible de se connecter à l'API de Fixer.<br/> 
					Vérifiez votre connexion internet, ou essayez plus tard !
				</p>
			</div>
    	</div>
    </div>
  );
};

const styles = { 
	container: {...container, backgroundColor: '#D63C3C' },
	imageContainer: {
		display: 'flex',
		maxWidth: '50%',
		flexDirection: 'column',
		alignItems: 'center',
	    justifyContent: 'center',
	},
	image: {
		maxWidth: '100%'
	},
	errorText: {
		fontSize: 24,
		marginTop: 30
	}
};
