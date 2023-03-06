/**
 * we assume there are no errors like incorred URL or bad response
 * so no "comprehensive error handluing logic here" 
 * we expect 200 status code 99% of the time.
 * On other hand we can check if response contain any bad status code and return "Incorrect request"
 * This can be refactored and implemented by Redux Thunk which handles it better
  */

import { APIDataResponse } from "../types/Shape";

export async function fetchData (): Promise<APIDataResponse| null>   {
    try {
        let response = await fetch('https://codingtest.univerus.co.nz:4430/shapes.json ')
    let objects = await response.json();return objects;
    } catch (error) {
        console.log(error);
    }
    return null

}