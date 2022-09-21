import { iSound } from '../models/sound';

const url = 'http://localhost:3500/sounds/';

export function getAllSounds(): Promise<Array<iSound>> {
    return fetch(url).then((resp) => resp.json());
}
export function addSound(sound: Omit<iSound, "id">): Promise<iSound> {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(sound),
        headers: { 'Content-Type': 'application/json' },
    }).then((resp) => resp.json());
}
export function updateSound(sound: iSound): Promise<iSound> {
    return fetch(url + sound.id, {
        method: 'PATCH',
        body: JSON.stringify(sound),
        headers: { 'Content-Type': 'application/json' },
    }).then((resp) => resp.json());
}
export function deleteSound(id: iSound['id']) {
    return fetch(url + id, {
        method: 'DELETE',
    });
}
