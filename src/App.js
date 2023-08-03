import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import NewPost from './components/NewPost';
import PostView from './components/PostView';
import PostEdit from './components/PostEdit';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <button className="button-home">
                <Link to="/">
                  Home
                </Link>
              </button>
            </li>
            <li>
              <button className="button-new-post">
                <Link to="/posts/new"
                  >Создать пост
                </Link>
              </button>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/new" element={<NewPost />} />
          <Route path="/posts/:postId" element={<PostView />} />
          <Route path="/posts/:postId/edit" element={<PostEdit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;