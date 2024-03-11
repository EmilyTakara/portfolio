import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/image.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function Imagem() {
	const [image, setImage] = useState({});

	let { imagemID } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const dataFetch = async () => {
			const data = await (await fetch('../data.json')).json();

			for (const prop in data) {
				data[prop].forEach((img) => {
					if (img.id === imagemID) setImage(img);
				});
			}
		};
		dataFetch();
	}, [imagemID]);

	return (
		<>
			<button onClick={() => navigate(-1)} className='navigate'>
				<FontAwesomeIcon icon={faArrowLeft} />
				Voltar
			</button>
			<main className='imagem'>
				<img src={image.link} alt={image.titulo} />
				<div className='info'>
					<h1>{image.titulo}</h1>
					<p className='data'>{image.data}</p>
					<p className='desc'>{image.desc}</p>
				</div>
			</main>
		</>
	);
}
