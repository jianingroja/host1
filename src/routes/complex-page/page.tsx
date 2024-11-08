import React, { Suspense } from 'react';
import ComplexPage from 'remote1/complex-page';

const Index = (): JSX.Element => {
	return (
		<div>
			<Suspense fallback={<div>Loading...</div>}>
				<ComplexPage />
			</Suspense>
		</div>
	);
};

export default Index;
