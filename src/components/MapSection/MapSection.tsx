import { GoogleMap, useLoadScript, MarkerF, InfoWindow } from '@react-google-maps/api';
import { useMemo, useContext, useRef, useCallback, useState } from 'react';
import { SoundListContext } from '../../context/soundList.context';
import { iSound } from '../../models/sound';

type MapOptions = google.maps.MapOptions;

export const MapSection = () => {
  const { sounds, selectSound } = useContext(SoundListContext);

   const [selected, setSelected] = useState <number|null>(null)

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
  });

  const mapRef = useRef();

  const onMapLoad = useCallback((map: any) => {
    mapRef.current = map;
  }, []);

  const options = useMemo<MapOptions>(
    () => ({ mapId: '35e82e16d051a75c', clickableIcons: false }),
    []
  );



  if (!isLoaded) return <div>Map is Loading...</div>;
  else
    return (
      <div className="MapSection">
        <GoogleMap
          zoom={12}
          center={{ lat: 64.15209, lng: -21.936314 }}
          mapContainerClassName="Map_container"
          options={options}
        >
          {sounds.map((sound) => (
          
              <MarkerF
                key={sound.id}
                position={{
                  lat: Number(sound.latitude),
                  lng: Number(sound.longitude),
                }}
                icon={{
                  url: sound.picture,
                  scaledSize: new window.google.maps.Size(75, 75),
                }}
                onClick={() => setSelected(sound.id)}
                onLoad={onMapLoad}
              />
           
          ))}
        </GoogleMap>
      </div>
    );
};
