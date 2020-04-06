import React from 'react';
// import PropTypes from 'prop-types';
import { Modal, Button, Card, Container, Row, Col, Form } from 'react-bootstrap';

export default function Login(props) {
	return (
		<Modal {...props} centered>
			<Card style={{ width: '100%' }}>
				<Card.Body>
					<Card.Title>Login</Card.Title>
					<Container fluid>
						<Row>
							<Form style={{ width: '100%' }}>
								<Form.Group controlId="formBasicEmail">
									<Form.Label>Email address</Form.Label>
									<Form.Control type="email" placeholder="Enter email" />
									<Form.Text className="text-muted">
										We'll never share your email with anyone else.
									</Form.Text>
								</Form.Group>

								<Form.Group controlId="formBasicPassword">
									<Form.Label>Password</Form.Label>
									<Form.Control type="password" placeholder="Password" />
								</Form.Group>
								<Form.Group controlId="formBasicCheckbox">
									<Form.Check type="checkbox" label="Check me out" />
								</Form.Group>
							</Form>
						</Row>
						<Row style={{ float: 'right' }}>
							<Col>
								<Button variant="danger" onClick={props.onHide}>
									Close
								</Button>
							</Col>
							<Col>
								<Button variant="success" onClick={props.onHide}>
									Login
								</Button>
							</Col>
						</Row>
					</Container>
				</Card.Body>
			</Card>
		</Modal>
	);
}

Login.propTypes = {};
Login.defaultProps = {};
