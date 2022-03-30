import { Routes, Route } from 'react-router-dom';
import { NavBar } from '../components/navBar';
import { About, Home, PersonalPage, Repository } from './pageDigest'

export const App: React.FC = ()=>{ 

    return(
    <>
    <Routes>
        <Route path="/" element={<NavBar />}>
            <Route path='home' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='repository' element={<Repository />} />
            <Route path='repsonalpage' element={<PersonalPage />} />
        </Route>
    </Routes>
    </>
    );
}