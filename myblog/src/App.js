import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>all blogs</h1>
        {blogs && blogs.map(blog => (
          <div key={blog.id}>{blog.title}</div>
        ))}
      </header>
    </div>
  );
}

export default App;
