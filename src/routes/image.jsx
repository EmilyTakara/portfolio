import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/image.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export default function Image() {
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

	let isCollection = typeof image.link === 'object';

	const settings = {
		className: 'center',
		centerMode: true,
		infinite: true,
		centerPadding: '60px',
		slidesToShow: 1,
		adaptiveHeight: true,
		speed: 500,
	};

	return (
		<>
			<button onClick={() => navigate(-1)} className='navigate'>
				<FontAwesomeIcon icon={faArrowLeft} />
				Voltar
			</button>
			<main className='imagem'>
				{isCollection ? (
					<Slider {...settings}>
						{image.link.map((link) => (
							<div>
								<img src={link} alt={image.titulo} />
							</div>
						))}
					</Slider>
				) : (
					<img src={image.link} alt={image.titulo} />
				)}

				<div className='info'>
					<h1>{image.titulo}</h1>
					<p className='data'>{image.data}</p>
					<p className='desc'>{image.desc}</p>
				</div>
			</main>
		</>
	);
}
