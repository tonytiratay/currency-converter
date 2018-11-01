import React from 'react';
import { Icon } from 'semantic-ui-react';

export default function LoadingScreen({ loading }) {
  return (
    <div style={styles.container}>
    	<div style={styles.imageContainer}>
    		<div><img style={styles.image} src="logo.gif" alt="logo oclock"/></div>
    		<div><h1>Currency Converter</h1></div>
    		<div><p style={styles.loadingText}><Icon loading name='sync alternate' />Chargement des devises...</p></div>
    	</div>
    </div>
  );
};

const styles = {
	container: {
		display: 'flex',
	    flex: 1,
	    backgroundColor: '#23c2a7',
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
	loadingText: {
		fontSize: 24,
		marginTop: 30
	}
};
