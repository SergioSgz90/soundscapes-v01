import { useContext } from 'react';
import { SoundListContext } from '../../context/soundList.context';
import { Sound } from '../Sound/Sound';

export const SoundList = () => {
    const {sounds} = useContext(SoundListContext);

    return (
        <div className="SoundList">
            <h2 className="SoundList_Title">Sound Collection:</h2>
          
                <ul className="SoundList_container">
                    {sounds.map((item) => (
                        <li key={item.id}>
                            <Sound sound={item}/>
                        </li>
                    ))}
                </ul>
            
        </div>
    );
};
