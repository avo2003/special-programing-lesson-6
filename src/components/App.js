import React, { useState, useEffect } from 'react';

import Image from './Image';
import SearchBar from './SearchBar';
import Loader from './Loader';
import unsplash from '../apis/unsplash';

function App() {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const handleSearch = async term => {
		setIsLoading(true);
		try {
			const response = await unsplash.get('/search/photos', {
				params: {
					query: term,
					orientation: 'landscape',
				},
			});
			setImages(response.data.results);
			setIsLoading(false);
		} catch (error) {
			setError('We are sorry! Something went wrong!');
			setIsLoading(false);
		}
	};

	useEffect(() => {
		handleSearch('surfing');
	}, []);

	const renderImage = () => {
		if (isLoading) return <Loader />;
		if (error) return <div className='error'>{error}</div>;

		return (
			<div>
				{images.map(image => (
					<Image key={image.id} image={image} />
				))}
			</div>
		);
	};

	return (
		<div className='App'>
			<h1>Search for Images</h1>
			<SearchBar handleSearch={handleSearch} />
			<div>{renderImage()}</div>
		</div>
	);
}

export default App;
