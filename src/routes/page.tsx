import { Helmet } from '@modern-js/runtime/head';
import './index.css';
import { Link } from '@modern-js/runtime/router';

const Index = () => (
	<div className='container-box'>
		<Helmet>
			<link
				rel='icon'
				type='image/x-icon'
				href='https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico'
			/>
		</Helmet>
		<main>
			<div>
				<h1>Home</h1>
				<div>
					<Link to='/simple-page'>Go to Simple Page</Link>
				</div>
				<div>
					<Link to='/complex-page'>Go to useRouter Page</Link>
				</div>
			</div>
		</main>
	</div>
);

export default Index;
