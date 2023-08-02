import { ContactMap } from '../components/contact/ContactMap';
const Contact = () => {
	return (
		<>
			<h1>Conócenos</h1>
			<section className="grid contact-container shadow-8">
				<div className="col-12 md:col-6 flex justify-content-center align-items-center">
					<div className="contact">
						<p>
							Av. xxxxxxxxxxxxxx,
							<br /> Col. xxxxxxxxxxxxxx, <br />
							Alcaldía xxxxxxxxxxxxxx,
							<br /> C.P. 00000, Ciudad de México.
						</p>
						<p>Tel. 00 0000 0000.</p>
						<p>m.angel091190@gmail.com</p>
					</div>
				</div>
				<div className="col-12 md:col-6 flex justify-content-center align-items-center">
					<ContactMap />
				</div>
			</section>
		</>
	);
};

export default Contact;
