import { useState } from 'react';
import '../styles/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function Home() {
	const [form, setform] = useState({
		name: '',
		email: '',
		msg: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		window.Email.send({
			Host: 'smtp.elasticemail.com',
			Username: 'emilytakara28@gmail.com',
			Password: 'E17789B9B55CFC2F7385A8A17DC79EB0F376',
			To: 'emilytakara28@gmail.com',
			From: 'emilytakara28@gmail.com',
			Subject: `Portfólio: Mensagem de ${form.name}`,
			Body: `
			${form.msg}
			
			Enviado por: ${form.email}`,
		}).then((msg) => alert(msg));

		return true;
	};

	return (
		<main className='home'>
			<section className='hero'>
				<h1 className='titulo'>Emily Takara</h1>
				<h2>Ilustradora</h2>
				<hr />

				<a href='#contatoForm' className='home-btn'>
					Contato
				</a>
			</section>

			<section className='social'>
				<h1>Formas de contato</h1>
				<ul>
					<li>
						<Link to='https://www.instagram.com/emily_tkr/' target='_blank'>
							<FontAwesomeIcon icon={faInstagram} />
							@emily.tkr
						</Link>
					</li>
					<li>
						<Link to='https://twitter.com/NotRings' target='_blank'>
							<FontAwesomeIcon icon={faXTwitter} />
							@emily.tkr
						</Link>
					</li>
					<li>
						<Link to='mailto:emilytakara28@gmail.com' target='_blank'>
							<FontAwesomeIcon icon={faEnvelope} />
							emilytakara28@gmail.com
						</Link>
					</li>
				</ul>
			</section>

			<section id='contatoForm' onSubmit={handleSubmit}>
				<h1>Envie uma mensagem diretamente para mim</h1>
				<form>
					<div className='inputWrapper'>
						<label htmlFor='name'>Nome Completo:</label>
						<input type='text' name='name' id='name' value={form.nome} onChange={(e) => setform({ ...form, name: e.target.value })} required />
					</div>
					<div className='inputWrapper'>
						<label htmlFor='email'>E-mail:</label>
						<input type='email' name='email' id='email' value={form.email} onChange={(e) => setform({ ...form, email: e.target.value })} required />
					</div>
					<div className='inputWrapper'>
						<label htmlFor='msg'>Mensagem:</label>
						<textarea type='text' name='msg' id='msg' value={form.msg} onChange={(e) => setform({ ...form, msg: e.target.value })} required></textarea>
					</div>
					<button type='submit'>Enviar</button>
				</form>
			</section>
		</main>
	);
}
