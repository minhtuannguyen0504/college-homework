export interface ICity {
    id: number;
    name: string;
    state?: string;
    country: string;
    coord: {
        [key: string]: number;
    }
}
export interface IProduct {
    id: number;
    name: string;
    img: string;
}

export interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}