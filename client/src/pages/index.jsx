import AuthProvider from '@/services/AuthProvider';
import { useRouter } from 'next/router';

import Layout from '@/Layouts/Layout';
import Products from '@/components/Products/Products';
import Developers from '@/components/Developers/Developers';
import Banner from '@/components/Banner/Banner';

const Index = ({isAuth, user}) => {
    const router = useRouter();
    return (
        <Layout className='container'>
            <Products title='Последние циферблаты' className='mb-40'></Products>
            <Banner className='mb-40'></Banner>
            <Products title='Категория циферблатов' className='mb-40'></Products>
            <Products title='Категория циферблатов' className='mb-40'></Products>
            <Products title='Категория циферблатов' className='mb-40'></Products>
            <Developers></Developers>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const {isAuth, user} = await AuthProvider(context);
    return { props: { isAuth, user } }
}


export default Index;
