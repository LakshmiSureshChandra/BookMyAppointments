import type { FC } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import Categories from '../../components/Categories/Categories'
import HospitalList from '../../components/HospitalList/HospitalList'
import Footer from '../../components/Footer/Footer'

const Home: FC = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Categories />
            <HospitalList />
            <Footer />
        </>
    )
}

export default Home