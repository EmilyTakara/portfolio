import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div id='error-page'>
			<h1>Opa!</h1>
			<p>Desculpe, um erro inesperado ocorreu.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
}
