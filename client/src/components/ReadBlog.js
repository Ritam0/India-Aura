// ReadBlog.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ReadBlog.css'; // Import your CSS file for styling

function ReadBlog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/read-blog')
      .then(response => {
        const data = response.data;
        if (data.success) {
          setBlogs(data.blogs);
        }
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
      });
  }, []);

  return (
    <div className="blog-container">
      <h2>Read Blogs</h2>
      <div className="blogs">
        {blogs.map(blog => (
          <div className="blog-card" key={blog._id}>
            <img src={blog.thumbnail.secure_url} alt={blog.name} />
            <h3>{blog.name}</h3>
            <p>{blog.content}</p>
            <div className="interaction">
              <button className="like-button">Like</button>
              <button className="comment-button">Comment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReadBlog;
