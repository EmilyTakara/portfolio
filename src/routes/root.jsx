import { NavLink, Outlet } from 'react-router-dom';
import '../styles/header.css';

export default function Root() {
	return (
		<>
			<header className='container header'>
				<nav>
					<ul>
						<li>
							<NavLink to='/'>Home</NavLink>
						</li>
						<li>
							<NavLink to='/desenhos'>Desenhos</NavLink>
						</li>
						<li>
							<NavLink to='/rascunhos'>Rascunhos</NavLink>
						</li>
						<li>
							<NavLink to='/tatuagens'>Tatuagens</NavLink>
						</li>
						<li>
							<NavLink to='/outros'>Outros</NavLink>
						</li>
					</ul>
				</nav>
			</header>

			<div className='container'>
				<Outlet />
			</div>
		</>
	);
}
