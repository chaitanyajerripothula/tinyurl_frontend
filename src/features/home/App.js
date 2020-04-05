import React from 'react';

export default function App({ children }) {
	return (
		<div className="home-app" style={{ height: '100%' }}>
			<div className="page-container" style={{ height: '100%' }}>
				{children}
			</div>
		</div>
	);
}
