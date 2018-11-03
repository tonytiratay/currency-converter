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
    			<Icon style={styles.brokenIcon} name="broken chain" />
			</div>
    		<div>
    			<h1>Currency Converter: {message}</h1>
    			<p style={styles.errorText}>
    				Oups... Impossible de se connecter à Fixer !
				</p>
			</div>
    		<div>
				<ul style={styles.listMessages} >
					<li>Vérifiez votre connexion internet</li>
					<li>Assurez vous que votre environnement est en HTTP et non en HTTPS</li>
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
	brokenIcon: {
		fontSize: 120
	},
	errorText: {
		fontSize: 24,
	},
	listMessages: {
		marginTop: 20,
		padding: '10px 40px',
		border: '1px solid #fff',
		fontSize: 18,
		lineHeight: '36px'
	}
};
