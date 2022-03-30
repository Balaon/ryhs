import { Outlet, NavLink } from 'react-router-dom'
import { Footer } from '../footer';

export const NavBar: React.FC = () => {

    return(
        <>
        <header>
            <NavLink to='/home'>Главная</NavLink>
            <NavLink to='/about'>О нас</NavLink>
            <NavLink to='/repository'>Репозиорий</NavLink>
            <NavLink to='/repsonalpage'>Личная страница</NavLink>
        </header>
        
        <Outlet />
        <Footer />
        </>
    );
}