//Shape object
export interface IShape {
    height: number;
    length: number;
    mass: number;
    name:string;
    width:number;
}

// API response (faking DTO object here as we don't have clear contract with the backend)

export interface APIDataResponse {
    objects: IShape[];
    ignoreShapes: string[];
    liquidDensity: number;
}

//we need separate type for chosen Object just to prevent empty Description te be rendered at first load
export type ShapeDetails = IShape | null;