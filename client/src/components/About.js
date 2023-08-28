import React, { useState } from 'react';
import Navbar from "./Navbar";
import "./About.css";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import Footer from './Footer'

const AboutUsPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className='About_bg'>
        <Navbar />

        <main id='about_main'>

          <section id='about_heading'>
            ABOUT <span>US</span>
          </section>
          <section id='about_middle'>

            <section id='about_left_sec'>
              <img src="https://i.pinimg.com/564x/53/f5/05/53f5055ac9a70e225d0e348475a86596.jpg" alt="pic" />
            </section>

            <section id='about_right_sec'>
            Welcome to India Aura – a realm where the rich tapestry of India's cultural heritage, ancient traditions, and awe-inspiring landscapes comes to life. With an unwavering commitment to showcasing the essence of India, we invite you on an extraordinary journey of exploration and discovery.
            <br></br>
            At India Aura, our mission is to be your guiding light through the myriad facets of India's diverse and captivating heritage. From the iconic landmarks that whisper tales of centuries gone by to the vibrant festivals that paint the towns in vivid hues, we are here to provide you with an immersive experience that captures the heart and soul of India.
            <br></br>
            Our dedicated team of enthusiasts and experts is driven by a shared passion for India's remarkable legacy. With each piece of content meticulously curated, we aim to deliver an authentic and meaningful encounter with India's cultural treasures. We understand that navigating India's vastness can be overwhelming, and that's why we've crafted a platform that offers a seamless flow of information, making it easy for you to embark on this enriching journey.
            <br></br>
            As you embark on your India Aura experience, you'll find a treasure trove of articles, videos, and resources that delve into every corner of India. From the bustling bazaars of Rajasthan to the serene backwaters of Kerala, from the intricacies of classical dance forms to the flavors of regional cuisines, our platform is designed to take you on a virtual exploration that leaves no stone unturned.
            <br></br>
            India's cultural mosaic is a reflection of its diverse populace, and at India Aura, we celebrate this diversity. Whether you're an art enthusiast looking to unravel the secrets of ancient sculptures, a history buff seeking to decode the stories etched in monuments, or a traveler yearning to immerse yourself in the landscapes that have inspired poets for centuries, you'll find a space where your curiosity is met with comprehensive and insightful content.
            <br></br>
            In a world that's constantly evolving, India Aura remains steadfast in its dedication to preserving the past while embracing the present. We provide you with the tools to not only explore but also engage with India's heritage. Join discussions with experts, participate in virtual tours of historical sites, and become a part of a community that shares your passion for all things India.
            <br></br>
            Every visit to India Aura is an opportunity to embark on a new adventure. Uncover the hidden gems of lesser-known destinations, witness the vivacity of regional festivals, and immerse yourself in the stories that have shaped India's identity. With content that spans a wide spectrum of topics – from architecture and literature to spirituality and natural wonders – we're your companion in unraveling the layers of India's uniqueness.
            <br></br>
            We believe that the magic of India should be accessible to all, regardless of geographic boundaries. Whether you're planning a future trip to India, seeking inspiration for your creative pursuits, or simply nurturing a love for global cultures, India Aura welcomes you with open arms. Each click, each scroll, and each interaction on our platform is an invitation to dive deeper into the captivating world of India.
            <br></br>
            As you explore India Aura, envision yourself strolling through ancient marketplaces, savoring the aroma of spices, feeling the rhythmic beats of traditional music, and witnessing the harmonious coexistence of tradition and modernity. This is the essence of India, encapsulated in a digital space that's as vast and vibrant as the nation itself.
            <br></br>
            </section>
          </section>


        </main>
        <Footer />
      </div>
    </>
  );
};

export default AboutUsPage;
