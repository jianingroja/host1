import { createModuleFederationConfig } from '@module-federation/modern-js';

export default createModuleFederationConfig({
	name: 'host1',
	remotes: {
		remote1: 'remote1@http://localhost:3001/_next/static/chunks/remoteEntry.js',
	},
	shared: {
		'react': { singleton: true, eager: true },
		'react-dom': { singleton: true, eager: true },
	},
});
