// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App








import "./App.css";
import { Title } from "./Title.jsx";
import ProductTab from './ProductTab.jsx';
import { Product } from './Product.jsx';



function Description() {
  return <h3>I am the Description!</h3>;
}

function App() {
  return (
    <div className="App">
      <Title />
      <Description />
      <ProductTab />
      <Product />
      <Title />
    </div>


  //   <div className="mainbox">
  //     <Title />
  //     <Description />
  //     <Title />
  //     <ProductTab />
  //     <Title />
  //     <Title />
  //     <Product />
  //     <Title />
  //   <p>This is a paragraph.</p>
  //   <button>Click Me</button>
  // </div>
  );
}
export default App;
