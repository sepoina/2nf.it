import React from 'react';
import { CtaImageButton } from '@site/src/components';

export const EsOsFreebies = (props) => {
	return (
		<CtaImageButton
			{...props}
			title='Find more libraries, tools, and design assets free for everyone to use.'
			buttonLabel='Open-source freebies'
			buttonUrl='https://duenneffe.com/open-source'
			imageUrl='./img/homepage/html-monochromatic.svg'
		/>
	);
};
