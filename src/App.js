import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Pokemon from "./project1/Pokemon";
import Home1 from "./project2/Home1";
import Books from "./project2/Books";
import BookList from "./project2/BookList";

function App() {
  return (
    <>
    <nav>
    <ul>
    <li><Link to= "/">Home</Link> </li>
    <li><Link to= "/project1">Project1</Link> </li>
    <li><Link to= "/project2">Project2</Link> </li>
    </ul>

    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project1" element={<Pokemon />} />
      <Route path="/project2" element={<Home1 />} />
      <Route path="/project2" element={<BookList />} />
      <Route path="/project2/books/:id" element={<Books />} />
      <Route path="/project2/books/:id" element={<Books />} />
    </Routes>

    </>
  );
}

export default App;
