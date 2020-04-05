/* This is the Root component mainly initializes Redux and React Router. */

import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { hot, setConfig } from 'react-hot-loader';
import store from './common/store';
import routeConfig from './common/routeConfig';
import history from './common/history';
import { Navbar, Nav, Form, Button, Container, Row, Col } from 'react-bootstrap';
import Login from './features//home/Login';

setConfig({
	logLevel: 'debug'
});

function renderRouteConfigV3(routes, contextPath) {
	// Resolve route config object in React Router v3.
	const children = []; // children component list

	const renderRoute = (item, routeContextPath) => {
		let newContextPath;
		if (/^\//.test(item.path)) {
			newContextPath = item.path;
		} else {
			newContextPath = `${routeContextPath}/${item.path}`;
		}
		newContextPath = newContextPath.replace(/\/+/g, '/');
		if (item.component && item.childRoutes) {
			const childRoutes = renderRouteConfigV3(item.childRoutes, newContextPath);
			children.push(
				<Route
					key={newContextPath}
					render={(props) => <item.component {...props}>{childRoutes}</item.component>}
					path={newContextPath}
				/>
			);
		} else if (item.component) {
			children.push(<Route key={newContextPath} component={item.component} path={newContextPath} exact />);
		} else if (item.childRoutes) {
			item.childRoutes.forEach((r) => renderRoute(r, newContextPath));
		}
	};

	routes.forEach((item) => renderRoute(item, contextPath));

	// Use Switch so that only the first matched route is rendered.
	return <Switch style={{ widh: '100%' }}>{children}</Switch>;
}

function Root() {
	const [ show, setShow ] = useState(false);

	const handleShow = () => {
		setShow(true);
	};

	const handleClose = () => {
		setShow(false);
	};

	const children = renderRouteConfigV3(routeConfig, '/');
	return (
		<div>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">TinyUrl</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link href="home">Home</Nav.Link>
					<Nav.Link href="usage">Usage</Nav.Link>
					<Nav.Link href="pricing">Pricing</Nav.Link>
				</Nav>
				<Form inline>
					<Container>
						<Row>
							<Col>
								<Button variant="outline-info" onClick={handleShow}>
									Login
								</Button>
							</Col>
							<Col>
								<Button variant="outline-info">Signup</Button>
							</Col>
						</Row>
					</Container>
				</Form>
			</Navbar>
			<div style={{ height: '100%' }}>
				<Provider store={store}>
					<div>
						<Login show={show} onHide={handleClose} />
					</div>
					<ConnectedRouter history={history} style={{ width: '100%' }}>
						{children}
					</ConnectedRouter>
				</Provider>
			</div>
		</div>
	);
}

export default hot(module)(Root);
