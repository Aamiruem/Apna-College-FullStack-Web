
// import "./App.css";
// // import Form from "./Form";
// // import CommentsForm from "./CommentsForm";
// import Comment from "./Comment";

// function App() {
//   return (
//     <>
//       <Comment/>
//       {/* <CommentsForm /> */}
//       {/* <Form /> */}
//     </>
//   );
// }

// export default App;










import "./App.css";  // Importing the CSS file for styling
// import Form from "./Form"; // Uncomment when you need to use Form component
// import CommentsForm from "./CommentsForm"; // Uncomment when you need to use CommentsForm component
import Comment from "./Comment";  // The main component displaying and managing comments

function App() {
  return (
    <>
      <Comment />  {/* Rendering the Comment component to manage and display comments */}
      {/* Uncomment these components when you need to use them */}
      {/* <CommentsForm /> */}
      {/* <Form /> */}
    </>
  );
}

export default App;  // Ensure App is exported as default
