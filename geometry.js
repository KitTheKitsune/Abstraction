function Distance(x1, y1, x2, y2) 
     // Assumes: (x1, y1) and (x2, y2) are two point coordinates
     // Returns: the distance between those points
     {
        return Math.sqrt(Math.pow(x1-x2, 2)+Math.pow(y1-y2, 2));
     };

function TriangleArea(side1, side2, side3) 
     // Assumes: side1, side2, and side3 are the lengths of triangle sides
     // Returns: the area of the triangle
     {
       s = (side1 + side2 + side3)/2;
       return Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
     };