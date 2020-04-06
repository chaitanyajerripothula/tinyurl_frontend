/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

import * as d3 from 'd3';

export default function Chart(props) {
	const d3Container = useRef(null);

	useEffect(
		() => {
			if (props.data && d3Container.current) {
				const svg = d3.select(d3Container.current);
				const x = d3Container.current.parentNode.getBoundingClientRect().left;
				const y = d3Container.current.parentNode.getBoundingClientRect().top;
				const width = d3Container.current.parentNode.getBoundingClientRect().width;
				const height = d3Container.current.parentNode.getBoundingClientRect().height;
				console.log(x + width * 0.5, y + height * 0.5, d3Container.current.parentNode.getBoundingClientRect());
				// Bind D3 data
				const update = svg.selectAll('circle').data(props.data);

				// Enter new D3 elements
				update
					.enter()
					.append('circle')
					.attr('cx', 45)
					.attr('cy', 45)
					.attr('r', 35)
					.attr('width', 90)
					.attr('height', 90)
					.attr('fill', 'red')
					.attr('overflow', 'visible');

				// Update existing D3 elements
				// update.attr('x', (d, i) => i * 40).text((d) => d);

				// Remove old D3 elements
				update.exit().remove();
			}
		},
		[ props.data, d3Container.current ]
	);

	return (
		<Card style={{ height: '100%', width: '100%', background: '#333A40' }}>
			<svg className="d3-component" ref={d3Container} />
		</Card>
	);
}

Chart.propTypes = {};
Chart.defaultProps = {};
