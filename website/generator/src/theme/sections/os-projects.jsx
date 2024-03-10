import React from 'react';
import { IconLinkCards, osProjectIcons } from '@site/src/components';

export const EsOpenSource = (props) => {
	return (
		<IconLinkCards
			{...props}
			title='Start exploring'
			osProjectIcons
			cards={[
				{
					icon: osProjectIcons.boilerplate,
					text: 'Eightshift Boilerplate',
					url: 'https://github.com/duenneffe/eightshift-boilerplate'
				},
				{
					icon: osProjectIcons.boilerplate,
					text: 'Eightshift Boilerplate Plugin',
					url: 'https://github.com/duenneffe/eightshift-boilerplate-plugin'
				},
				{
					icon: osProjectIcons.eightshiftLibs1,
					text: 'Eightshift Libs',
					url: 'https://github.com/duenneffe/eightshift-libs'
				},
				{
					icon: osProjectIcons.eightshiftFrontendLibs,
					text: 'Eightshift Frontend Libs',
					url: 'https://github.com/duenneffe/eightshift-frontend-libs'
				},
				{
					icon: osProjectIcons.eightshiftForms,
					text: 'Eightshift Forms',
					url: 'https://github.com/duenneffe/eightshift-forms'
				},
				{
					icon: osProjectIcons.eightshiftDocs,
					text: 'Eightshift Docs',
					url: 'https://github.com/duenneffe/eightshift-docs'
				},
				{
					icon: osProjectIcons.storybook,
					text: 'Eightshift Storybook',
					url: 'https://github.com/duenneffe/eightshift-storybook'
				},
				{
					icon: osProjectIcons.eightshiftCodingStandard,
					text: 'Eightshift Coding Standards for WordPress',
					url: 'https://github.com/duenneffe/eightshift-coding-standards'
				},
			]}
		/>
	);
};
