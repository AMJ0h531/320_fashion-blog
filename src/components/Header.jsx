import React from "react";
import Nav from "./Nav.jsx";

function Header() {
  return (
    <header>
      <h1>Fashion Blog</h1>
      <h2>Your daily style inspiration</h2>

      <Nav />
    </header>
  );
}

export default Header;




// import React from 'react';
// // import styles from '../styles/Header.module.css'; // Import styles

// function Header() {
//   return (
//     <header className="navbar">
//       <nav>
//         <ul>
//           <li><a href="#home">Home</a></li>
//           <li><a href="#about">About</a></li>
//           <li><a href="#blog">Blog</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// }