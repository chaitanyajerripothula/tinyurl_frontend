import React from 'react';
// import PropTypes from 'prop-types';
import { Toast } from 'react-bootstrap';

export default function Usage() {
	return (
		<Toast className={'home-usage'} style={{ width: '100%', maxWidth: '100%', marginTop: '10px' }}>
			<Toast.Body style={{ width: '100%' }}>
				<u>
					<h2>Designing a URL Shortening service like TinyURL</h2>
				</u>
				<br />
				&emsp; Let's design a URL shortening service like TinyURL. This service will provide short aliases
				redirecting to long URLs.
				<br />
				&emsp;&emsp;Similar services: bit.ly, goo.gl, qlink.me, etc.
				<hr />
				<u>
					<h4>1. Why do we need URL shortening???</h4>
				</u>
				&emsp; URL shortening is used to create shorter aliases for long URLs. We call these shortened aliases
				“short links.” Users are redirected to the original URL when they hit these short links. Short links
				save a lot of space when displayed, printed, messaged, or tweeted. Additionally, users are less likely
				to mistype shorter URLs.
				<br />
				&emsp; For example, if we shorten this page through TinyURL:
				https://www.originalurl.io/collection/page/5668639101419520/5649050225344512/5668600916475904/ We would
				get: http://tinyurl.com/xutiahc The shortened URL is nearly one-third the size of the actual URL.
				<br />
				&emsp;URL shortening is used for optimizing links across devices, tracking individual links to analyze
				audience and campaign performance, and hiding affiliated original URLs.
				<hr />
				<u>
					<h4>2. Requirements of the System</h4>
				</u>
				<b>
					<i>
						<span role="img" aria-label="tip">
							&emsp;&emsp;&emsp;&emsp;💡 You should always clarify requirements at the beginning of the
							interview. Be sure to ask questions to find the exact scope of the system that the
							interviewer has in mind. Our URL shortening system should meet the following requirements:
						</span>
					</i>
				</b>
				<br />
				<br />
				<u>
					<h6>Functional Requirements:</h6>
				</u>
				<span>
					<ol>
						<li>
							Given a URL, our service should generate a shorter and unique alias of it. This is called a
							short link. This link should be short enough to be easily copied and pasted into
							applications.
						</li>
						When users access a short link, our service should redirect them to the original link.
						<li />
						Users should optionally be able to pick a custom short link for their URL.
						<li />
						<li>
							Links will expire after a standard default timespan. Users should be able to specify the
							expiration time.
						</li>
					</ol>
				</span>
				<span>
					<u>
						<h6>Non-Functional Requirements:</h6>
					</u>
					<ol>
						<li>
							The system should be highly available. This is required because, if our service is down, all
							the URL redirections will start failing.
						</li>
						<li>URL redirection should happen in real-time with minimal latency.</li>
						<li>Shortened links should not be guessable (not predictable)</li>
					</ol>
				</span>
			</Toast.Body>
		</Toast>
	);
}

Usage.propTypes = {};
Usage.defaultProps = {};
