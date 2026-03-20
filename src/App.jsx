import React from "react";
import Header from "./components/Header.jsx";
import Article from "./components/Article.jsx";
import Footer from "./components/Footer.jsx";
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Article 
          title="Fashion Trends 2026"
          image="https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-1.jpg"
          content="LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.orem ipsum dolor sit amet..."
        />

        <Article 
          title="How to Style Your Outfits"
          image="https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-2.jpg"
          content="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;


// function App() {
//   return <h1>It works</h1>;
// }

// export default App;




// import React from "react";
// import Header from "./components/Header.js";
// import Article from "./components/Article.js";
// import Footer from "./components/Footer.js";
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Header />

//       <main>
//         <Article 
//           title="Fashion Trends 2026"
//           image="/images/fashion1.jpg"
//           content="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
//         />

//         <Article 
//           title="How to Style Your Outfits"
//           image="/images/fashion2.jpg"
//           content="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
//         />
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default App;




// // import { useState } from 'react'
// import React from "react";
// import Header from "./components/Header.jsx";
// import BlogPost from "./components/Article.js";
// import Footer from "./components/Footer.jsx";
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   // const [count, setCount] = useState(0)
//   return (
//     <div className="App">
//       <Header />
//       <div className="content">
//         <BlogPost 
//           title="Fashion Trends 2026"
//           content="Here are the top fashion trends for the year 2026. Stay stylish!"
//         />
//         <BlogPost 
//           title="How to Style Your Outfits"
//           content="Learn how to mix and match clothes to create the perfect outfit."
//         />
//       </div>
//       <Footer />
//     </div>
//   );
// }


// export default App


//     // <>
//     //   <div>
//     //     <a href="https://vite.dev" target="_blank">
//     //       <img src={viteLogo} className="logo" alt="Vite logo" />
//     //     </a>
//     //     <a href="https://react.dev" target="_blank">
//     //       <img src={reactLogo} className="logo react" alt="React logo" />
//     //     </a>
//     //   </div>
//     //   <h1>Vite + React</h1>
//     //   <div className="card">
//     //     <button onClick={() => setCount((count) => count + 1)}>
//     //       count is {count}
//     //     </button>
//     //     <p>
//     //       Edit <code>src/App.jsx</code> and save to test HMR
//     //     </p>
//     //   </div>
//     //   <p className="read-the-docs">
//     //     Click on the Vite and React logos to learn more
//     //   </p>
//     // </>
//   )
// }