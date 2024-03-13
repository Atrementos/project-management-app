import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar';

export default function RootLayout() {
    return <div className='h-screen flex gap-8 overflow-hidden'>
        <SideBar />
        <Outlet />
    </div>;
};