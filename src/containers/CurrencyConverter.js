import React from 'react';
import { Container, Segment, Form, Label } from 'semantic-ui-react';

export default function CurrencyConverter(){
	const countryOptions = [ { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' } ]
	return(
		<div style={styles.container}>
			<Container>
				<Segment.Group style={styles.segments}>
					<Segment>
						<h1>Currency Converter</h1>
					</Segment>
					<Segment>
						<Form>
							<Form.Group widths='equal'>
								<Form.Input labelPosition='right' type='text' placeholder='Amount'>
									<input />
									<Label basic>€</Label>
								</Form.Input>
								<Form.Select inline fluid options={countryOptions} placeholder="devise"/>
							</Form.Group>
						</Form>
					</Segment>
					<Segment style={styles.resultArea} placeholder>
					<h1>Resultat</h1>
				</Segment>
				</Segment.Group>
			</Container>
		</div>
	);
}


const styles = {
	container: {
		display: 'flex',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#23c2a7',
	},
	segments: {
		width: '100%'
	},
	resultArea: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
};