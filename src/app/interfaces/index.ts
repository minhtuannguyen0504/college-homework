export interface ICity {
    id: number;
    name: string;
    state?: string;
    country: string;
    coord: {
        [key: string]: number;
    }
}