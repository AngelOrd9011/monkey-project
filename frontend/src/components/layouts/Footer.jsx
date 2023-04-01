import { RiCopyrightLine } from 'react-icons/ri';

const Footer = () => {
	return (
		<footer className="sticky-footer">
			<div className="app-footer">
				<span className="contact">
					<a href="https://www.instagram.com/angelord90/" target="_blank" rel="noreferrer">
						<i className="pi pi-instagram" style={{ color: '#EF6C00' }} />
					</a>
				</span>
				<span className="contact">
					<a href="https://www.facebook.com/m.angel091190/" target="_blank" rel="noreferrer">
						<i className="pi pi-facebook" style={{ color: '#EF6C00' }} />
					</a>
				</span>
				<span className="contact">
					<a href="https://twitter.com/AngeLord9011" target="_blank" rel="noreferrer">
						<i className="pi pi-twitter" style={{ color: '#EF6C00' }} />
					</a>
				</span>
				<span className="copy-rights">
					<RiCopyrightLine /> {'  '}AngelOrd9011
				</span>
			</div>
		</footer>
	);
};
export default Footer;
