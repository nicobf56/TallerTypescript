export class Serie {
    numS: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    link: string;
    image: string;

    constructor(numS: number, name: string, channel: string, seasons: number, description: string, link: string, image:string){
        this.numS = numS;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.image = image;
    }
}