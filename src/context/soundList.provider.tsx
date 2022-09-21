import { iSound } from '../models/sound';
import { useEffect, useState } from 'react';
import * as api from '../services/http-sounds';
import { SoundListContext } from './soundList.context';


export function SoundListProvider({ children }: { children: JSX.Element }) {
    //Model

    const initialState: Array<iSound> = [];
    const [sounds, setSounds] = useState(initialState);
   

    useEffect(() => {
        api.getAllSounds().then((data) => {
            setSounds(data);
        });
    }, []);

   

    //Controller

    const addSound = (sound: Omit<iSound, "id">) => {
        //Backend
        api.addSound(sound).then((data) =>
            //estado
            setSounds([...sounds, data])
        );
    };

    const deleteSound = (id: number) => {
        api.deleteSound(id).then((resp) => {
            if (resp.ok) {
                setSounds(sounds.filter((item) => item.id !== id));
            }
        });
    };


    const isPlaying = (sound: iSound) => {

        sound.playing = !sound.playing;
        api.updateSound(sound).then((data) =>
            setSounds(sounds.map((item) => (item.id === sound.id ? data : item)))
            );
    };
 

   const selectSound = (sound: iSound) => {

        sound.selected = !sound.selected;
        api.updateSound(sound).then((data) =>
        setSounds(sounds.map((item) => (item.id === sound.id ? data: item))
        ))
   }






    const context = {
        sounds,
        addSound,
        deleteSound,
        isPlaying,
        selectSound,

    }

    return (
        <SoundListContext.Provider value={context}>
            {children}
        </SoundListContext.Provider>
    );



}
