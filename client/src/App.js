import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import DoctorsList from './components/doctors';
import RegistrationForm from './components/Registration';
import LoginForm from './components/Login';
import MyProfile from './components/MyProfile';
import FeedbackForm from './components/Feedback';
import WriteBlog from './components/WriteBlog.js';
import ReadBlog from './components/ReadBlog.js';
import Cultural_page from './components/Cultural';
import Vacation_page from './components/Vacations';

const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} className="home-page" />
          <Route path="/About" element={<About />} className="about-page" />
          <Route path="/doctors" element={<DoctorsList />} className="Doctorlist" />
          <Route path="/Registration" element={<RegistrationForm />} className="RegistrationForm" />
          <Route path="/login" element={<LoginForm />} className="LoginForm" />
          <Route path="/profile" element={<MyProfile />} className="MyProfile" />
          <Route path="/Feedback" element={<FeedbackForm />} className="FeedbackForm" />
          <Route path="/blog" element={<ReadBlog/>} className="ReadBlog" /> 
          <Route path="/uploadblog" element={<WriteBlog/>} className="WriteBlog" /> 
          <Route path="/Cultural.js" element={<Cultural_page/>} className="Cultural" /> 
          <Route path="/Vacations.js" element={<Vacation_page/>} className="Vacation" /> 
        </Routes>
    </>
  );
};

export default App;
