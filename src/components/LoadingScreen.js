import React from 'react';
import { Icon } from 'semantic-ui-react';

export default function LoadingScreen({ loading }) {
  return (
    <div style={styles.container}>
    	<div style={styles.imageContainer}>
    		<div><img style={styles.image} src="logo.png" alt="logo oclock"/></div>
    		<div><p style={styles.loadingText}><Icon loading name='sync alternate' />Loading symbols...</p></div>
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
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
	    justifyContent: 'center',
	},
	image: {
		maxWidth: '100%'
	},
	loadingText: {
		fontSize: 24
	}
};
