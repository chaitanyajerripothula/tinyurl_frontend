import { createBrowserHistory } from 'history';

// A singleton history object for easy API navigation
const history = createBrowserHistory(
	{
		// basename: 'https://chaitanyajerripothula.github.io/tinyurl_frontend/'
	}
);

console.log(history);

export default history;
