import React from 'react';

export default function Image({ image }) {
	return (
		<div>
			<img src={image.urls.small} alt='' />
		</div>
	);
}
