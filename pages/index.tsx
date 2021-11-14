import { GetStaticProps } from 'next';

import { query } from '../db';

type HomeProps = { widgets: string[] };

function Home({ widgets }: HomeProps) {
	return (
		<>
			<h1>Home</h1>
			Widgets:
			<ul>
				{widgets.map((w, i) => <li key={i}>{w}</li>)}
			</ul>
		</>
	);
}

export const getStaticProps: GetStaticProps<HomeProps> = async context => {
	const result = await query('SELECT * FROM widgets');
	return {
		props: {
			widgets: result.rows.map(r => r.name),
		},
	};
};

export default Home;
