import { WelcomePage, Usage, Pricing } from './';

export default {
	path: '',
	childRoutes: [
		{ path: '/home', component: WelcomePage, isIndex: true },
		{ path: '/usage', component: Usage },
		{ path: '/pricing', component: Pricing }
	]
};
