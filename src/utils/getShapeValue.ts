import { IShape } from "../types/Shape"

//In theory we could implement switch-case statement, I haven't had time to think it through carefully

export function getShapeValue (shape:IShape):string {
    // destructure needed properties from the object
    const {height, width, length } = shape;

// If the height is both greater than double the width, and greater than double the length: Tall
    if (height > (width * 2) && height > (length * 2) ) return "Tall";

/** If either of the width or the length is more than twice each of the other two dimensions:
“Long”. (For example, if length is both more than twice height, and more than twice width.)
 */
    if ((width > (length*2) && (height*2)) || (length > (width*2) && length > (height*2) )) return "Long";

// If the height is less than half of each of the other two dimensions: “Flat”.
    if (height < (width/2) && height < (length / 2)) return "Flat";

// If the width or length is less than half of each of the other two dimensions: “Thin”.
    if (width< (length /2) && width < (height / 2)) return "Thin";

// Else “Other”.
    return "Other"
}