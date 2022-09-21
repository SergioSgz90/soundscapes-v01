export interface iSound {
    id: number;
    name: string;
    author: string;
    picture: string;
    soundFile: string;
    category: string;
    location: string;
    latitude: string;
    longitude: string;
    selected: boolean;
    playing: boolean;
}

export class Sound implements iSound {
    selected: boolean;
    playing: boolean;
    constructor(
        public name: string,
        public id: number,
        public author: string,
        public picture: string,
        public soundFile: string,
        public category: string,
        public location: string,
        public latitude: string,
        public longitude: string,
    ) {
        this.selected = false;
        this.playing = false;
    }
}
