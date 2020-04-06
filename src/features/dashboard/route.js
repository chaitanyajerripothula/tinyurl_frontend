// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import { ViewDashboard } from './';

export default {
	path: 'dashboard',
	childRoutes: [ { path: 'view', component: ViewDashboard, isIndex: true } ]
};
