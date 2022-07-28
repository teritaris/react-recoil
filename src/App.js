import {Routes, Route, Link, NavLink, useResolvedPath, useMatch, Outlet} from "react-router-dom";
// import TodoList from "./components/TodoList";
import {RecoilRoot} from "recoil";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Posts from "./components/Posts";
import Post from "./components/Post"
import PostIndex from "./components/PostIndex";

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
                      <CustomLink to="/contact">Contact</CustomLink>
                  </li>

                  <li>
                      <NavLink
                          className={({ isActive }) => (isActive ? 'active' : undefined)}
                          to={"/posts"}
                      >
                          Posts
                      </NavLink>
                  </li>
              </ul>

              {/*中央寄せするLayoutコンポーネントで囲ったパターン*/}
              {/*<Routes>*/}
              {/*    <Route path="/" element={<Layout><Home /></Layout>} />*/}
              {/*    <Route path="/about" element={<About />} />*/}
              {/*    <Route path="/contact" element={<Contact message="Hello Contact"/>} />*/}
              {/*    <Route path="/posts" element={<Posts />}>*/}
              {/*        <Route index element={<PostIndex />} />*/}
              {/*        <Route path=":postId" element={<Post />} />*/}
              {/*    </Route>*/}
              {/*    <Route path="*" element={<NoMatch />} />*/}
              {/*</Routes>*/}

              <Routes>
                  <Route element={<Layout />}>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/contact" element={<Contact message="Hello Contact"/>} />
                      <Route path="/posts" element={<Posts />}>
                          <Route index element={<PostIndex />} />
                          <Route path=":postId" element={<Post />} />
                      </Route>
                  </Route>
                  {/*エラーページにはLayoutコンポーネントのレイアウトを適用しない*/}
                  <Route path="*" element={<NoMatch />} />
              </Routes>

                      {/*<TodoList />*/}
          </div>
      </RecoilRoot>
  );
}

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({
        path: resolved.pathname,
        end: true,
    });
    return (
        <div>
            <Link style={{ color: match ? 'blue' : 'none' }} to={to} {...props}>
                {children}
            </Link>
        </div>
    )
}

// 中央寄せするLayoutコンポーネントで囲ったパターン
// const Layout = ({children}) => {
//     return (
//         <div style={{ display: 'flex', justifyContent: 'center'}} >
//             {children}
//         </div>
//     );
// };

// Layoutコンポーネントでネストするパターン
const Layout = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center'}} >
            <Outlet />
        </div>
    );
};


export default App;
