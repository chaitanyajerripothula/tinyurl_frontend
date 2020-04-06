import React from 'react';
// import PropTypes from 'prop-types';
import { Modal, Button, Card, Container, Row, Col, Form } from 'react-bootstrap';

export default function Register(props) {
	return (
		<div className="home-register-register">
			<Modal {...props} centered>
				<Card style={{ width: '100%' }}>
					<Card.Body>
						<Card.Title>Register</Card.Title>
						<Container fluid>
							<Row>
								<Form style={{ width: '100%' }}>
									<Form.Group controlId="formBasicname">
										<Form.Label>Name</Form.Label>
										<Form.Control type="text" placeholder="Enter name" />
									</Form.Group>
									<Form.Group controlId="formBasicmobileno">
										<Form.Label>Mobile No</Form.Label>
										<Form.Control type="text" placeholder="Enter mobileno" />
									</Form.Group>
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

									<Form.Group controlId="formMatchPassword">
										<Form.Label>Verify Password</Form.Label>
										<Form.Control type="password" placeholder="Password" />
									</Form.Group>
								</Form>
							</Row>
							<Row style={{ float: 'right' }}>
								<Col>
									<Button variant="danger" onClick={props.handleRegisterClose}>
										Close
									</Button>
								</Col>
								<Col>
									<Button variant="success" onClick={props.handleRegisterClose}>
										Register
									</Button>
								</Col>
							</Row>
						</Container>
					</Card.Body>
				</Card>
			</Modal>
		</div>
	);
}

Register.propTypes = {};
Register.defaultProps = {};
