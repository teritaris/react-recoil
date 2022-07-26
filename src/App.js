import { BrowserRouter, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import {RecoilRoot} from "recoil";


function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Contact() {
    return <h2>Contact</h2>;
}

function App() {
  return (
      <BrowserRouter>
          <RecoilRoot>
              <div style={{ margin: '2em' }}>
                  <h1>Hello React Router</h1>
                  <Route exact path="/">
                      <Home />
                  </Route>
                  <Route path="/about">
                      <About />
                  </Route>
                  <Route path="/contact">
                      <Contact />
                  </Route>
                  <Route path="/todo">
                      <TodoList />
                  </Route>
              </div>
          </RecoilRoot>
      </BrowserRouter>
  );
}

export default App;
