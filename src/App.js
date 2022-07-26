import {Routes, Route, Link, NavLink} from "react-router-dom";
// import TodoList from "./components/TodoList";
import {RecoilRoot} from "recoil";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NoMatch from "./components/Nomatch";
import './App.css';
// import {Menu} from "./components/Menu";

function App() {
  return (
      <RecoilRoot>
          <div style={{ margin: '2em' }}>
              <h1>Hello React Router</h1>

              <ul>
                  <li>
                      <NavLink
                          style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)}
                          to="/"
                      >Home</NavLink>
                  </li>
                  <li>
                      <NavLink
                          className={({ isActive }) => (isActive ? 'active' : undefined)}
                          to="/about"
                      >About</NavLink>
                  </li>
                  <li>
                      <Link to="/contact">Contact</Link>
                  </li>
              </ul>


              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact message="Hello Contact"/>} />
                  <Route path="*" element={<NoMatch />} />
              </Routes>
                      {/*<TodoList />*/}
          </div>
      </RecoilRoot>
  );
}

export default App;
