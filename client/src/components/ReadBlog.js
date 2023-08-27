// ReadBlog.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ReadBlog.css';
import Navbar from './Navbar';

const ReadBlog = () => {
  const [allblogs, setAllBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/read-blog')
      .then(response => {
        const data = response.data;
        setAllBlogs(data.blogs);
        
        console.log(allblogs.name);
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
      });
  }, []);

  return (
    <>
    <Navbar/>
    <div className="blog-container">
      <h2>Read Blogs Know Places</h2>
      <div className="blogs">
        {allblogs.map(blog => (
          <div className="blog-card" key={blog._id}>
            <img src={blog.thumbnail.secure_url} alt={blog.name} />
            <h3>Title: {blog.title}</h3>
            <h3>Place: {blog.place}</h3>
            <p>{blog.content}</p>
            <h3>Author: {blog.name}</h3>
            <div className="interaction">
              <button className="like-button">Like</button>
              <button className="comment-button">Comment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ReadBlog;

