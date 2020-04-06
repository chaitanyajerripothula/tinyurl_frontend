import React from 'react';
import Chart from './Chart';
// import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

export default function ViewDashboard() {
	return (
		null && (
			<Container
				fluid
				className="dashboard-view-dashboard"
				style={{ width: '100%', height: '100%', margin: '20px', padding: '20px' }}
			>
				<Row gutter={8} style={{ width: '100%', margin: '20px !important' }}>
					<Col xs={3} lg={3}>
						<Chart id="1" data={[ 1 ]} style={{ height: '500px' }} />
					</Col>
					<Col xs={3} lg={3}>
						<Chart id="1" data={[ 1 ]} style={{ height: '500px' }} />
					</Col>
					<Col xs={3} lg={3}>
						<Chart id="1" data={[ 1 ]} style={{ height: '500px' }} />
					</Col>
					<Col xs={3} lg={3}>
						<Chart id="1" data={[ 1 ]} style={{ height: '500px' }} />
					</Col>
				</Row>

				<Row style={{ width: '100%' }}>
					<Col xs={4} lg={3}>
						<Chart id="1" data={[ 1 ]} style={{ height: '500px' }} />
					</Col>
					<Col xs={4} lg={3}>
						<Chart id="1" data={[ 1 ]} style={{ height: '500px' }} />
					</Col>
					<Col xs={4} lg={3}>
						<Chart id="1" data={[ 1 ]} style={{ height: '500px' }} />
					</Col>
					<Col xs={4} lg={3}>
						<Chart id="1" data={[ 1 ]} style={{ height: '500px' }} />
					</Col>
					<Col xs={4} lg={3}>
						<Chart id="1" data={[ 1 ]} style={{ height: '500px' }} />
					</Col>
					<Col xs={4} lg={3}>
						<Chart id="1" data={[ 1 ]} style={{ height: '500px' }} />
					</Col>
				</Row>
			</Container>
		)
	);
}

ViewDashboard.propTypes = {};
ViewDashboard.defaultProps = {};
