// ReadBlog.js
import React, { useState, useEffect } from 'react';
import './ReadBlog.css';
import Navbar from './Navbar';
import tour_home from "./image/blog_india.png"


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
      <a href="https://www.andreamarchegiani.it/travel-blog/en-india/kathakali-dance-kerala/" target="_blank"><div className="point4"><span className='inner-pointer'>kathakali of<br />Kerala</span></div></a>
      <a href="https://www.indiatravelblog.com/destinations/118-india-gate"  target="_blank"><div className="point5"><span className="inner-pointer">India <br />Gate</span></div></a>
      <a href="https://www.veenaworld.com/blog/gateway-of-india-mumbai-history-and-heritage"  target="_blank"><div className="point6"><span className="inner-pointer">Gateway of <br />India</span></div></a>
      <a href="https://samaaratea.com/blogs/blog/the-chai-files-story-of-assam-tea"  target="_blank"><div className="point7"><span className="inner-pointer">Chai of <br />Assam</span></div></a>
      <a href="https://cultureandheritage.org/2023/06/bhangda-a-joyous-fun-filled-folk-dance-of-punjab.html"  target="_blank"><div className="point8"><span className="inner-pointer">Bhangra of<br />punjab</span></div></a>
      <a href="https://www.nestadventure.com/blog/category/kanchenjunga-trek-blog/"  target="_blank"><div className="point9"><span className="inner-pointer">kanchanjunga</span></div></a>

      <div className="diver">
        Unity <span className="d1">in</span> <span className="d2">Diversity</span>
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

