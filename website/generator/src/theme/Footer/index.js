import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';

import { Footer as DuenneffeFooter } from '@site/src/components';

function Footer() {
	const { footer } = useThemeConfig();

	return (
		<DuenneffeFooter footer={footer} />
	);
}

export default React.memo(Footer);
