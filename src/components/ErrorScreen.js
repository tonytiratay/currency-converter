import React from 'react';
// Import main styles
import { container, imageContainer } from '../styles';
import { Icon } from 'semantic-ui-react';

// Composant affiché lorsque l'API n'est pas joignable 

export default function ErrorScreen({message}) {
  return (
    <div style={styles.container}>
    	<div style={styles.imageContainer}>
    		<div>
    			<img style={styles.image} src="logo.gif" alt="logo oclock"/>
			</div>
    		<div>
    			<h1>Currency Converter: {message}</h1>
			</div>
    		<div>
    			<p style={styles.errorText}>
    				Oups... Impossible de se connecter à Fixer<Icon name='warning' />
				</p>
				<ul>
					<li>Vérifiez votre connexion internet</li>
					<li>Assurez vous que votre environnement est en HTTP et pas en HTTPS (version gratuite de fixer)</li>
					<li>Essayez plus tard, l'API de Fixer est peut-être injoignable</li>
				</ul>
			</div>
    	</div>
    </div>
  );
};

const styles = { 
	container: {...container, backgroundColor: '#D63C3C' },
	imageContainer,
	image: {
		maxWidth: '100%'
	},
	errorText: {
		fontSize: 24,
		marginTop: 30
	}
};
