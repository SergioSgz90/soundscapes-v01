import { SyntheticEvent, useContext, useState } from 'react';
import { SoundListContext } from '../../context/soundList.context';
import { iSound } from '../../models/sound';

export const SoundForm = () => {
    const { addSound } = useContext(SoundListContext);
    const initialSate: Partial<iSound> = {
        name: '',
        author: '',
        category: '',
        picture: '',
        soundFile: '',
        location: "",
    };
    const [formState, setFormState] = useState(initialSate);

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        addSound({
            name: formState.name as string,
            author: formState.author as string,
            category: formState.category as string,
            picture: formState.picture as string,
            soundFile: formState.soundFile as string,
            location: formState.location as string,
            latitude: formState.latitude as string,
            longitude: formState.longitude as string,
            selected: false,
            playing: false,
            
        });

       
    };
     const handleChange = (ev: SyntheticEvent) => {
         const element = ev.target as HTMLFormElement;
         setFormState({ ...formState, [element.name]: element.value });
     };

    return (
        <div className="FormSection">
            <h2 className="FormTitle">Add a Sound:</h2>
            <form className="Form" onSubmit={handleSubmit}>
                <input
                    className="InputForm"
                    type="text"
                    name="name"
                    placeholder="Name your sound"
                    maxLength={25}
                    value={formState.name}
                    onChange={handleChange}
                />
                <input
                    className="InputForm"
                    type="text"
                    name="author"
                    placeholder="Author"
                    maxLength={25}
                
                    value={formState.author}
                    onChange={handleChange}
                />
                <input
                    className="InputForm"
                    type="text"
                    name="category"
                    placeholder="Category"
                    maxLength={20}
            
                    value={formState.category}
                    onChange={handleChange}
                />

                <input
                    className="InputForm"
                    name="picture"
                    placeholder="Add a picture"
                    type="text"
                    value={formState.picture}
                    onChange={handleChange}
                />

                <input
                    className="InputForm"
                    name="soundFile"
                    type="text"
                    placeholder="Add a sound file"
                    value={formState.soundFile}
                    onChange={handleChange}
                />
                

                <input
                    className="InputForm"
                    type="text"
                    name='location'
                    placeholder="Location"
                    value={formState.location}
                    onChange={handleChange}
                />
                  
                <input
                    className="InputForm"
                    type="text"
                    name='latitude'
                    placeholder="Latitude"
                    value={(formState.latitude)}
                    onChange={handleChange}
                />
                  
                   <input
                    className="InputForm"
                    type="text"
                    name='longitude'
                    placeholder="Longitude"
                    value={(formState.longitude)}
                    onChange={handleChange}
                />
                <button className="buttonForm" type="submit">Upload Sound</button>
            </form>
        </div>
    );
};
