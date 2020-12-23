import React, {useEffect} from 'react';
import {useRouter} from 'next/router';

const Home = () => {
	const router = useRouter();

	useEffect(() => {
		void router.replace('/about');
	}, [router]);

	return <div/>;
};

export default Home;
