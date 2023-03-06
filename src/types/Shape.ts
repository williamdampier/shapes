export interface IShape {
    height: number;
    length: number;
    mass: number;
    name:string;
    width:number;
}

export interface APIDataResponse {
    objects: IShape[];
    ignoreShapes: string[];
    liquidDensity: number;
}