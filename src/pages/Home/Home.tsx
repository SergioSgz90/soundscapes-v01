import { MapSection } from "../../components/MapSection/MapSection";
import { SoundForm } from "../../components/SoundForm/SoundForm";
import { SoundList } from "../../components/SoundList/SoundList";
import { useContext } from 'react';
import { SoundListContext } from '../../context/soundList.context';
export const Home = (children:any) => {
    
    return (
        <div>
            <div className="Home">
                <SoundList/>
                <MapSection />
                <SoundForm />
            </div>
        </div>
    );
};
export default Home;