import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';    

const Layout = () => {
    return (
        <>
        <Header />
        <Sidebar />

        <main
          style={{
            marginLeft: 240,
            padding: 20,
        }}>
        <Outlet />
        </main>
        </>
    );
} 

export default Layout;