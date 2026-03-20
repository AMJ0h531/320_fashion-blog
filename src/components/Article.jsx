function Article({ title, image, content }) {
  return (
    <article>
      <h2>{title}</h2>

      {/* ✅ THIS is the correct image code */}
      <img src={image} alt={title} />

      <p>{content}</p>

      <a href="#">Continues...</a>
    </article>
  );
}

export default Article;







// import React from "react";

// function Article({ title, image, content }) {
//   return (
//     <article>
//       <h2>{title}</h2>

//       {/* 👇 ADD IMAGE HERE */}
//       {/* <img src={image} alt={title} /> */}
//       image="/images/fashion1.jpg"
//       image="/images/fashion2.jpg"

//       <p>{content}</p>

//       <a href="#">Continues...</a>
//     </article>
//   );
// }

// function Article({ title, image, content }) {
//   return (
//     <article>
//       <h2>{title}</h2>

//       <img src={image} alt={title} />

//       <p>{content}</p>

//       <a href="#">Continues...</a>
//     </article>
//   );
// }

// export default Article;




// // src/components/Article.js
// import React from 'react';

// function Article({ title, content }) {
//   return (
//     <div className="Article">
//       <h2>{title}</h2>
//       <p>{content}</p>
//     </div>
//   );
// }

// export default Article;