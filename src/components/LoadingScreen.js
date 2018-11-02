import React from 'react';
// Import main styles
import { container, imageContainer } from '../styles';
import { Icon } from 'semantic-ui-react';

// Comosant affiché lors du chargement des devises et ratios

export default function LoadingScreen() {
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
    			<p style={styles.loadingText}>
    				<Icon loading name='sync alternate' />Chargement des devises...
				</p>
			</div>
    	</div>
    </div>
  );
};

const styles = {
	container,
	imageContainer,
	image: {
		maxWidth: '100%'
	},
	loadingText: {
		fontSize: 24,
		marginTop: 30
	}
};
