import { Error } from '../components/page';
import { withLayout } from '../layout/Layout';

export const Error404 = () => <Error ErrorNumber={404}>Not Found</Error>;

export default withLayout(Error404);
