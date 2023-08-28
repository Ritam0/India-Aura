// ReadBlog.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ReadBlog.css';
import Navbar from './Navbar';
import tour_home from "./image/home_tour.png"
import pointer from "./image/map-pointer.png"
import { FcUpLeft } from "react-icons/fc";

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
      <a href="/blog/tajmahal"><div className="point1"><span className='inner-pointer'>Taj Maha</span>l</div></a>
      <a href="/blog/durgapuja"><div className="point2"><span className='inner-pointer' >Durga Puja</span></div></a>
      <a href="/blog/kashmir"><div className="point3"><span className='inner-pointer'>Kashmir</span></div></a>
      <a href="/blog/kerala"><div className="point4"><span className='inner-pointer'>Kerala</span></div></a>

      <div className="diver">
        Divercity <span className="d1">of</span> <span className="d2">India</span>
      </div>
      <div className="hov">
       Hover Map<span className="d1"> to Know</span> <span className="d2">Divercity</span>
      </div>
      <div className="chat">
        Contact Chat Bot<span className="d1"> to Visit</span> <span className="d2">Divercity</span>
      </div>
      <div className="wh"></div>
    </>
    </>
  );
};

export default ReadBlog;

