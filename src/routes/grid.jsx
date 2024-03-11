import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/grid.css';

export default function Grid() {
	const [images, setImages] = useState([]);

	let location = useLocation().pathname.replace('/', '');

	useEffect(() => {
		const dataFetch = async () => {
			const data = await (await fetch('data.json')).json();

			for (const prop in data) {
				if (prop === location) setImages(data[prop]);
			}
		};
		dataFetch();
	}, [location]);

	return (
		<>
			{images.length ? (
				<ul className='grid'>
					{images.map((img) => (
						<li key={img.titulo}>
							<Link to={`/imagem/${img.id}`} className='image-link'>
								<img src={img.link} alt={img.description} />
							</Link>
						</li>
					))}
				</ul>
			) : (
				<p>Ainda não foram colocadas imagens</p>
			)}
		</>
	);
}
