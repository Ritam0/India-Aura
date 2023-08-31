// ReadBlog.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ReadBlog.css';
import Navbar from './Navbar';
import tour_home from "./image/blog_india.png"
import pointer from "./image/map-pointer.png"
import { FcUpLeft } from "react-icons/fc";

const ReadBlog = () => {
  // const [allblogs, setAllBlogs] = useState([]);

  // useEffect(() => {
  //   axios.get('https://india-aura.onrender.com/read-blog')
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
      <a href="https://medium.com/@seovueindia19/visiting-taj-mahal-the-story-of-love-best-taj-mahal-travel-blog-with-inside-information-ca14ff3cc1b4" target="_blank"><div className="point1"><span className='inner-pointer'>Taj Mahal</span></div></a>
      <a href="https://ich.unesco.org/en/RL/durga-puja-in-kolkata-00703" target='_blank'><div className="point2"><span className='inner-pointer' >Durga Puja</span></div></a>
      <a href="https://sandeepachetan.com/category/kashmir/" target='_blank'><div className="point3"><span className='inner-pointer'>Kashmir</span></div></a>
      <a href="/https://keralablogexpress.com/" target="_blank"><div className="point4"><span className='inner-pointer'>Kerala</span></div></a>
      <a href=""><div className="point5"><span className="inner-pointer">India <br />Gate</span></div></a>

      <div className="diver">
        Diversity <span className="d1">of</span> <span className="d2">India</span>
      </div>
      <div className="hov">
       Hover Map<span className="d1"> to Know</span> <span className="d2">Diversity</span>
      </div>
      <div className="chat">
        Contact Chat Bot<span className="d1"> to Visit</span> <span className="d2">Diversity</span>
      </div>
      <div className="wh"></div>
    </>
    </>
  );
};

export default ReadBlog;

