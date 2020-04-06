import React from 'react';
// import PropTypes from 'prop-types';
import { Card, Container, Row, Col, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Pricing() {
	return (
		<div className="home-pricing" style={{ marginTop: '10vh' }}>
			<Container fluid>
				<Row>
					<Col style={{ marginTop: '20px' }}>
						<Card style={{ height: '100%' }}>
							<Table striped bordered hover style={{ height: '100%', width: '100%' }}>
								<tbody>
									<tr>
										<td colSpan="2" style={{ textAlign: 'center' }}>
											Free Trail for 14 days!!!
										</td>
									</tr>
									<tr>
										<td>Campaign Management</td>
										<td>Mark</td>
									</tr>
									<tr>
										<td>Link Management</td>
										<td>Mark</td>
									</tr>
									<tr>
										<td>Account Management</td>
										<td>Mark</td>
									</tr>
									<tr>
										<td>Traffic Routing</td>
										<td>Mark</td>
									</tr>
									<tr>
										<td>Brand Control</td>
										<td>Mark</td>
									</tr>
									<tr>
										<td>Analytics</td>
										<td>Mark</td>
									</tr>
									<tr>
										<td>Dashboard</td>
										<td>Mark</td>
									</tr>
									<tr>
										<td>Link Analytics</td>
										<td>Mark</td>
									</tr>
									<tr>
										<td colSpan="2" style={{ textAlign: 'center' }}>
											<Link to="/home">Register Now</Link>
										</td>
									</tr>
								</tbody>
							</Table>
						</Card>
					</Col>
					<Col style={{ marginTop: '20px' }}>
						<Card style={{ height: '100%' }}>
							<Table striped bordered hover style={{ height: '100%', width: '100%' }}>
								<tbody>
									<tr>
										<td colSpan="2" style={{ textAlign: 'center' }}>
											Economy @2000/month
										</td>
									</tr>
									<tr>
										<td>Campaign Management</td>
										<td>Mark</td>
									</tr>
									<tr>
										<td>Link Management</td>
										<td>Mark</td>
									</tr>
									<tr>
										<td>Account Management</td>
										<td>Mark</td>
									</tr>
									<tr>
										<td>Traffic Routing</td>
										<td>Mark</td>
									</tr>
									<tr>
										<td>Brand Control</td>
										<td>Mark</td>
									</tr>
									<tr>
										<td>Analytics</td>
										<td>Mark</td>
									</tr>
									<tr>
										<td>Dashboard</td>
										<td>Mark</td>
									</tr>
									<tr>
										<td>Link Analytics</td>
										<td>Mark</td>
									</tr>
									<tr>
										<td colSpan="2" style={{ textAlign: 'center' }}>
											<Link to="/home">Buy Now</Link>
										</td>
									</tr>
								</tbody>
							</Table>
						</Card>
					</Col>
					<Col style={{ marginTop: '20px' }}>
						<Card style={{ height: '100%' }}>
							<Table striped bordered hover style={{ height: '100%', width: '100%' }}>
								<tbody>
									<tr>
										<td colSpan="2" style={{ textAlign: 'center' }}>
											Enterprise @3900/month
										</td>
									</tr>
									<tr>
										<td>Campaign Management</td>
										<td>Mark</td>
									</tr>
									<tr>
										<td>Link Management</td>
										<td>Mark</td>
									</tr>
									<tr>
										<td>Account Management</td>
										<td>Mark</td>
									</tr>
									<tr>
										<td>Traffic Routing</td>
										<td>Mark</td>
									</tr>
									<tr>
										<td>Brand Control</td>
										<td>Mark</td>
									</tr>
									<tr>
										<td>Analytics</td>
										<td>Mark</td>
									</tr>
									<tr>
										<td>Dashboard</td>
										<td>Mark</td>
									</tr>
									<tr>
										<td>Link Analytics</td>
										<td>Mark</td>
									</tr>
									<tr>
										<td colSpan="2" style={{ textAlign: 'center' }}>
											<Link to="/home">Buy Now</Link>
										</td>
									</tr>
								</tbody>
							</Table>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

Pricing.propTypes = {};
Pricing.defaultProps = {};
