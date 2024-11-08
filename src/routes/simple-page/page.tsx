import React, { Suspense } from 'react';
import SimplePage from 'remote1/simple-page';

const Index = (): JSX.Element => {
	return (
		<div>
			<Suspense fallback={<div>Loading...</div>}>
				<SimplePage />
			</Suspense>
		</div>
	);
};

export default Index;
