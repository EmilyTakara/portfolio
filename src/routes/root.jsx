import { NavLink, Outlet } from 'react-router-dom';
import '../styles/header.css';
import { useEffect, useState } from 'react';

export default function Root() {
	const [prop, setProp] = useState([]);

	useEffect(() => {
		const dataFetch = async () => {
			const data = await (await fetch('/portfolio/data.json')).json();

			setProp(Object.keys(data));
		};
		dataFetch();
	}, []);

	return (
		<>
			<header className='container header'>
				<nav>
					<ul>
						<li>
							<NavLink to='/'>Home</NavLink>
						</li>
						{prop.map((p) => {
							return (
								<li>
									<NavLink to={p.toLowerCase()}>{p}</NavLink>
								</li>
							);
						})}
					</ul>
				</nav>
			</header>

			<div className='container'>
				<Outlet />
			</div>
		</>
	);
}
