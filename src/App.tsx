import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { menuOptionsType } from './interfaces/menuoption';
import { Layout } from './components/Layout/Layout';
import { SoundListProvider } from "../src/context/soundList.provider";
const Home = React.lazy(() => import('../src/pages/Home/Home'));
const About = React.lazy(() => import('../src/pages/About/About'));

function App() {
    const menuOptions: menuOptionsType = [
        { path: 'about', label: 'About' },
        { path: 'home', label: 'Home' },
    ];
    

    return (
        <SoundListProvider>
            <Layout menuOptions={menuOptions}>
                <Routes>
                    <Route
                        path="home"
                        element={
                            <React.Suspense>
                                <Home> </Home>
                            </React.Suspense>
                        }
                    ></Route>
                    <Route
                        path="*"
                        element={
                            <React.Suspense>
                                <Home> </Home>
                            </React.Suspense>
                        }
                    ></Route>
                    <Route
                        path="about"
                        element={
                            <React.Suspense>
                                <About> </About>
                            </React.Suspense>
                        }
                    ></Route>
                </Routes>
            </Layout>
    
        </SoundListProvider>
    );
}

export default App;
