import Footer from '../components/Footer';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne'
import NotFound from '../components/404'

const NotFoundPage = () => {
    return (
        <Layout pageTitle="Not Found">
            <NavOne />
            <NotFound /> 
            <Footer />
        </Layout>
    )
}

export default NotFoundPage;
