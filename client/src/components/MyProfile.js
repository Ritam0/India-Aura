import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './MyProfile.css';
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom';
 
const MyProfile = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});
  const [uri, setUri] = useState('https://mgcfeni.edu.bd/midea/featuredimage/featuredimage2019-03-04-13-47-19_5c7d1e5732a77.jpg');


  const callProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const mail = localStorage.getItem('mail');
      if (!token) {
        navigate('/login');
      }
      const response = await axios.get('http://localhost:3001/profile', {
        params: {
          mail: mail
        }
      });

      const data = response.data.user;
      console.log(data);
      setUserDetails(data);
      setUri(data.avatar.secure_url);

    } catch (error) {
      console.error(error);
      navigate('/login'); // Navigate to login page
    }
  };

  useEffect(() => {
    callProfile();
  }, []);

  const logoutProfile = async (e) => {
    e.preventDefault();
    try {
      // await axios.get("http://localhost:3001/logout", {
      //   headers: {
      //     Cookie: "token"
      //   },
      //   withCredentials: true // Include credentials, if needed (for cookies)
      // });
      localStorage.clear();

      window.alert("Logged out");
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  }
  const ListService = () => {
    navigate("/list-service");
  }
  const Feedback = () => {
    navigate("/Feedback");
  }

  return (
    <>
      <Navbar />
      <div className='myproflie_main_body'>
        <h1>Wellcome to India Aura</h1>
        <div className="myprofile_main_card">
          <div className="myprofile_pic_card">
            <img src={uri} alt="user_pic" className="image" />
            <p>Hey {userDetails.name}</p>
          </div>

          <div className="myprofile_right_sec">

            <h1>Your Details</h1>
            <div className="myprofile_details">
              <ul>
                <li>Name: {userDetails.name}</li>
                <li>UserId: {userDetails._id}</li>
                <li>Email: {userDetails.email}</li>
                <li></li>
              </ul>
            </div>
            {/* <button id='my_prof_logout_btn' onClick={logoutProfile}>logout</button> */}
            {/* <button id='my_prof_serv_btn' onClick={ListService}>List Your Service</button> */}

            <div className="myproflie_btns">

              <button className="myproflie_button" onClick={logoutProfile}>
                <p className="text">logout</p>
              </button>
              <NavLink className="doctors_navlink" to="/uploadblog">
              <button className="myproflie_button" >
                <p className="text">Write Blog</p>
              </button>
              </NavLink>
              <button className="myproflie_button" onClick={Feedback}>
                <p className="text">Give Feedback</p>
              </button>
              {/* <NavLink className='mypfeedback_btn' to="/Feedback">
              <button className='myproflie_button'>Give Feedback</button></NavLink> */}
            </div>
          </div>
        </div>
      </div>


      <div className="booking-card-container">
      <div className="booking-card">
        <img src="https://i.pinimg.com/564x/60/44/71/604471ed304322decb60d7c52b4632a3.jpg" alt="Write Blog" />
        <h2>Write Blog</h2>
        <button>Start Writing</button>
      </div>
      <div className="booking-card">
        <img src="https://i.pinimg.com/564x/54/57/24/545724f929914db48a3d1964f983f755.jpg" alt="Tour Package" />
        <h2>Book Tour Package</h2>
        <button>Book Now</button>
      </div>
      <div className="booking-card">
        <img src="https://i.pinimg.com/564x/17/ea/f1/17eaf15d7a73220fbcaf6f669296b499.jpg" alt="Book Flight" />
        <h2>Book Flight</h2>
        <button>Book Now</button>
      </div>
      <div className="booking-card">
        <img src="https://i.pinimg.com/564x/fb/5e/d4/fb5ed42def009168081b2776b7708228.jpg" alt="Book Hotels" />
        <h2>Book Hotels</h2>
        <button>Book Now</button>
      </div>
    </div>
      
    </>
  );
};

export default MyProfile;
