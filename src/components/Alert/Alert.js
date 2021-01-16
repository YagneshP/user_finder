import React, { useContext } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AlertContext } from '../context/Alert/alertContext';
const Alert = () => {
	const alertContext = useContext(AlertContext);
	return (
		<Container>
			<Row>
				<Col style={{ backgroundColor: 'grey', height: '40px' }}>{alertContext.alert}</Col>
			</Row>
		</Container>
	);
};

export default Alert;
