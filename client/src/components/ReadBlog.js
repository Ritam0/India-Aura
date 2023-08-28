// ReadBlog.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ReadBlog.css';
import Navbar from './Navbar';
import tour_home from "./image/home_tour.png"
import pointer from "./image/map-pointer.png"

const ReadBlog = () => {
  // const [allblogs, setAllBlogs] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:3001/read-blog')
  //     .then(response => {
  //       const data = response.data;
  //       setAllBlogs(data.blogs);
        
  //       console.log(allblogs.name);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching blogs:', error);
  //     });
  // }, []);

  return (
    <>
    <Navbar/>
    <>
      {/* <div className="blogs">
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
      </div> */}
      <div className="blog_india"><img src={tour_home} alt="img" /></div>
      <a href="/Beach.js"><div className="point1"><img src={pointer} alt="" /></div></a>
      <a href="/Beach.js"><div className="point2"><img src={pointer} alt="" /></div></a>
      <a href="/Beach.js"><div className="point3"><img src={pointer} alt="" /></div></a>
      <a href="/Beach.js"><div className="point4"><img src={pointer} alt="" /></div></a>
    </>
    </>
  );
};

export default ReadBlog;

