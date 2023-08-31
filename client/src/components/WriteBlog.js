import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './Registration.css';
import { useNavigate } from 'react-router-dom';

const WriteBlog = ({type}) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [thumbnail, setThumbnail] = useState('https://i.pinimg.com/564x/0b/59/22/0b5922b901383400d62cb2fc33a658f1.jpg');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('title', title);
    formData.append('place', place); // Use 'email' instead of 'contact'
    formData.append('content',content);
    formData.append('thumbnail',thumbnail);
    const FormToServer={
      name:name,
      title:title,
      place:place,
      content:content,
      thuubmnail:thumbnail
    };


    try {
      const response = await axios.post('http://localhost:3001/upload-blog', FormToServer);

      setName('');
      setPlace('');
      setTitle('');
      setContent('');
      setThumbnail('');
      window.alert('Registration Succesful !!');
      navigate('/login');
    } catch (error) {
      window.alert('registration failed!! try again')
      console.error('Registration error:', error);
    }
  };

  const [imageUploaded, setImageUploaded] = useState(false);

  const handleImageUpload = (e) => {
    setThumbnail(e.target.files[0])

    // console.log(e.target.files[0].name)
    setImageUploaded(true);
  };

  return (
    <>
      <Navbar />
      <main id='reg_main'>
        {/* <section id='reg_left_sec'>
          <img src={log_reg_page_pic} alt="pic" />
        </section> */}
        <section id='reg_right_sec'>
          <div className="registration-form-container">
            <h1>Write Blog {type}</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <input className="reg_input reg_input-alt" placeholder="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                <span className="reg_input-border reg_input-border-alt"></span>
              </div>
              <div className="form-control">
                <input className="reg_input reg_input-alt" placeholder="Place" type='place' value={place} onChange={(e) => setPlace(e.target.value)} required />
                <span className="reg_input-border reg_input-border-alt"></span>
              </div>
              <div className="form-control">
                <input className="reg_input reg_input-alt" placeholder="Title" type='title' value={title} onChange={(e) => setTitle(e.target.value)} required />
                <span className="reg_input-border reg_input-border-alt"></span>
              </div>
              <div className="form-control">
                <textarea className="reg_input reg_input-alt" placeholder="content" type='content' value={content} onChange={(e) => setContent(e.target.value)} required />
                <span className="reg_input-border reg_input-border-alt"></span>
              </div>
              {/* {imageUploaded ? (
                <div id='img_success'>
                  <p>Thumbnail Upload Successful</p>
                </div>
              ) : (

                <div className="file_upload_sec">
                  <label htmlFor="input_file" id='input_file_label'>
                    <div className="input-div">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" strokeLinejoin="round" strokeLinecap="round" viewBox="0 0 24 24" strokeWidth="2" fill="none" stroke="currentColor" className="icon"><polyline points="16 16 12 12 8 16"></polyline><line y2="21" x2="12" y1="12" x1="12"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>
                    </div>
                    <span>Upload Thumbnail</span>
                  </label>
                  <input
                    className="input-file"
                    id="input_file"
                    name="avatar" // Change 'file' to 'avatar'
                    type="file"
                    onChange={handleImageUpload}
                  />
                </div>

              )} */}

              <button className="button" type="submit" >
                <span className="button-content">Upload Blog</span>
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default WriteBlog

