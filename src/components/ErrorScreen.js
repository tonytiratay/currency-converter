import React from 'react';
import { Icon } from 'semantic-ui-react';

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
	container: {
		display: 'flex',
	    flex: 1,
	    backgroundColor: '#D63C3C',
	    color: '#fff',
	    alignItems: 'center',
	    justifyContent: 'center',
	},
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
