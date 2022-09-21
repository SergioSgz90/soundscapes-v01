import {createContext} from "react";
import {iSound} from "../models/sound"

const initialContext: {
    sounds: Array<iSound>;
    addSound(sound: Omit<iSound, "id">): void;
    deleteSound(id: number): void;
    isPlaying(sound: iSound): void;
    selectSound(sound: iSound):void;

} = {
    sounds: [],
    addSound: (sound) => {},
    deleteSound: (id) => {},
    isPlaying: (sound) => {},
    selectSound:(sound) => {},
  
};

export const  SoundListContext = createContext(initialContext)