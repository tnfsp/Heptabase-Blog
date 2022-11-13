import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import PostList from './page/PostList';
import Post from './page/Post';
import Empty from './page/404';
import About from './page/About';

import CONFIG from "./config";

// 设置路由
class App extends React.Component {
    render() {
        return (
            <Router >
                    <Routes >
                        <Route exact path="/" element={<About title={CONFIG.title} />} title='123' />
                        <Route path="/post/:slug" element={<Post title={CONFIG.title} />} />
                        <Route path="/notes/" element={<PostList title={CONFIG.title} />} />

                        <Route path="/404/" element={<Empty title={CONFIG.title} />} />
                        <Route element={<Empty title={CONFIG.title} />} />
                    </Routes>
            </Router>
        )
    }
}
export default App;