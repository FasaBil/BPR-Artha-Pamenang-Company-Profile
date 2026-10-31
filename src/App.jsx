import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import ProfilPerusahaan from './pages/ProfilPerusahaan.jsx';
import Tabungan from './pages/Tabungan.jsx';
import Deposito from './pages/Deposito.jsx';
import Pembiayaan from './pages/Pembiayaan.jsx';
import Kontak from './pages/Kontak.jsx';

export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="profil-perusahaan" element={<ProfilPerusahaan />} />
                <Route path="tabungan" element={<Tabungan />} />
                <Route path="deposito" element={<Deposito />} />
                <Route path="pembiayaan" element={<Pembiayaan />} />
                <Route path="kontak" element={<Kontak />} />
                <Route path="*" element={<Home />} />
            </Route>
        </Routes>
    );
}
