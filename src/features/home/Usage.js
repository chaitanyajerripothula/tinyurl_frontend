import React from 'react';
// import PropTypes from 'prop-types';
import { Toast } from 'react-bootstrap';

export default function Usage() {
	return (
		<Toast style={{ width: '100%', 'max-width': '100%', 'margin-top': '10px' }}>
			<Toast.Body style={{ width: '100%' }}>
				Welcome to TinyURL!™ Are you sick of posting URLs in emails only to have it break when sent causing the
				recipient to have to cut and paste it back together? Then you've come to the right place. By entering in
				a URL in the text field below, we will create a tiny URL that will not break in email postings and never
				expires.
				<br />
				<br />
				An example Turn this URL:
				http://www.amazon.com/Kindle-Wireless-Reading-Display-Globally/dp/B003FSUDM4/ref=amb_link_353259562_2?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=center-10&pf_rd_r=11EYKTN682A79T370AM3&pf_rd_t=201&pf_rd_p=1270985982&pf_rd_i=B002Y27P3M
				into this TinyURL: http://tinyurl.com/KindleWireless Which one would you rather cut and paste into your
				browser? That's the power of TinyURL!
				<br />
				<br />
				Redirection to any page in your site! With TinyURL, you can also make a smaller URL that will work for
				any page on your site. Let's say that you have a website with the homepage that is at:
				http://www.my-internet-isp.com/~myusername Entering that URL into TinyURL will create a URL like
				http://tinyurl.com/3 With this you can then redirect someone to anywhere within your site by appending a
				slash and the pages filename to it. So if you have a page at
				http://www.my-internet-isp.com/~myusername/my-links-page.html, you can use the URL
				http://tinyurl.com/3/my-links-page.html and going to this URL will forward the visitor to the page in
				your website.
			</Toast.Body>
		</Toast>
	);
}

Usage.propTypes = {};
Usage.defaultProps = {};
