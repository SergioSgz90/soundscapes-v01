import play_circle from '../../img/play-circle.svg';
import pause_circle from '../../img/pause-circle.svg';
import trash3 from "../../img/trash3.svg";
import { iSound } from '../../models/sound';
import { useContext, useRef} from 'react';
import { SoundListContext } from '../../context/soundList.context';




export const Sound = ({ sound }: { sound:iSound } ) => {
    //state
    const { deleteSound, isPlaying, selectSound} = useContext(SoundListContext);
    const handleDelete = () => deleteSound(sound.id as number)
    const handleClickPlay = () => {isPlaying(sound)};
    const handleSelect = () => {selectSound(sound)}


    //hook for the Audio Player useRef()
    const refSound = useRef<HTMLAudioElement>(null)
    //(refSound.current != null) fixes the error of "Object is possibly null"
    const handlePlaySound = () => {if (refSound.current != null){sound.playing ? refSound.current.play() : refSound.current.pause()}}
    

    //View 

    return (
        
        <>

            <div className={sound.selected === true ? "Sound_container_selected":"Sound_container"} >
                <img className="Sound_image" src={sound.picture} alt="img" onClick={handleSelect} />
                <div className="Sound_info_container" >
                    <ul className="Sound_mainInfo">
                        <li className="Sound_name">
                            {sound.id} - {sound.name}
                        </li>
                        <li className="Sound_author">By {sound.author}</li>
                    </ul>
                    <ul className="Sound_subInfo">
                        <li className="Sound_location"> 
                            {
                                (" lat: " + Number(sound.latitude).toFixed(3) + " lng: " + Number(sound.longitude).toFixed(3))
                            } 
                        </li>
                        <li className="Sound_category">{sound.category}</li>
                    </ul>
                    <div className='Sound_buttons_Container'>
                     <audio  src={sound.soundFile} ref={refSound} onEnded={handleClickPlay} ></audio>
                    <button type="button" onClick={() => {handleClickPlay(); handlePlaySound();}}>
                       <img
                            className="playPause_button"
                            src= {sound.playing ? pause_circle : play_circle}
                            alt="icon"
                           
                        ></img>
                    </button>
                    <button type="button" onClick={() => handleDelete()}>
                        <img
                            className="delete_button"
                            src={trash3}
                            alt="icon"
                        ></img>
                    </button>
                    
                    </div>
                </div>
            </div>
        </>
    );
};
