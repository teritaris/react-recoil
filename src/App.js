import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import TodoList from "./components/TodoList";
import {RecoilRoot} from "recoil";
// import {Menu} from "./components/Menu";


function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Contact() {
    return <h2>Contact</h2>;
}

function NotFound() {
    return <h2>Not Found Page</h2>;
}

function App() {
  return (
      <BrowserRouter>
          <RecoilRoot>
              <div style={{ margin: '2em' }}>
                  <h1>Hello React Router</h1>
                  <ul>
                      <li>
                          <Link to="/">Home</Link>
                      </li>
                      <li>
                          <Link to="/about">About</Link>
                      </li>
                      <li>
                          <Link to="/contact">Contact</Link>
                      </li>
                  </ul>

                  <Switch>
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
                      <Route>
                          <NotFound />
                      </Route>
                  </Switch>
              </div>
          </RecoilRoot>
      </BrowserRouter>
  );
}

export default App;
