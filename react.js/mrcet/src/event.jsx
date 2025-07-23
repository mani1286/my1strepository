// import React from "react";
// function Events() {
//     const handleClick = () => alert('Button Clicked!');
//     return (
//         <div>
//             <button onClick={handleClick}>Click Me</button>
//         </div>
//     );
// }






// import React from "react";


// function Events() {
//     const handleDoubleClick = () => alert('Button DoubleClicked!');
//     return (
//         <div>
//             <button onDoubleClick={handleDoubleClick}>DoubleClick Me</button>
//         </div>
//     );
// }

// export default Events;






// import React from "react";
// function Event() {
//     const handleMouseEnter = () => alert("mouse entered")
//     return(
//         <div>
//             <button onMouseEnter={handleMouseEnter} style={{ color:"blue" }}>Hover over Me</button>
//         </div>
//     );
// }
// export default MouseInEvent;





//  import React from "react";
// function Event() {
//     const handleMouseOut = () => alert("mouse out")
//     return(
//         <div>
//             <button onMouseOut={handleMouseOut} style={{ color:"blue" }}>Hover out Me</button>
//         </div>
//     );
// }
// export default MouseOutEvent;




// import React, { useState } from "react";

// function Event() {
//   const [bgColor, setBgColor] = useState("white");

//   const changeColor = () => {
//     const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
//     setBgColor(randomColor);
//   };

//   return (
//     <div style={{ backgroundColor: bgColor, height: "100vh", textAlign: "center", paddingTop: "50px" }}>
//       <h1>Click to Change the Background Color</h1>
//       <button onClick={changeColor} style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
//         Change Color
//       </button>
//     </div>
//   );
// }




// export function keyboardEvent() {
//     const handlekeyPress = (event) => {
//         if(event.key === 'Enter') {
//             alert('Enter key pressed!');
//         }
//     };
//     return <input type="text" onKeyPress={handlekeyPress} placeholder="Press Enter" />
// }

import React from "react";

export function keyDownEvent() {
    const handlekeyDown = (event) => {
        alert('key down: ${event.key}');
    };
    return <input type="text" onKeyDown={handlekeyDown} placeholder="Press any key" /> 
}