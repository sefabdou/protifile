import React, { useState, useEffect } from 'react';
import { gall1,gall2,gall3 } from '../pictures/index2'
import './Services.css';

const images = [
    { url: gall1, text: 'web'},
    { url: gall2, text: 'app' },
    { url: gall3, text: 'desktop' },
    
    // Add more images and corresponding text here
  ];
  

const Services = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    

    useEffect(() => {
      const timer = setInterval(() => {
        // Increment the currentIndex to change the image and text
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 20000); // Change every 20 seconds
  
      return () => {
        // Clean up the timer when the component unmounts
        clearInterval(timer);
      };
    }, []);

    // Function to handle image change on hover
     const handleImageChange = (url) => {
    // Find the index of the image with the given URL
    const index = images.findIndex((img) => img.url === url);
    if (index !== -1) {
      setCurrentIndex(index);
    }
  };
  return (
    <div className="servicehead">
     <div className='headcon'>
        <h1>Our services</h1>
         <ul className='servlist'>
 
        {images.map((cake)=>(
         <li key={cake.url} onMouseEnter={() => handleImageChange(cake.url)}>  
            <span data-image={cake.url}>
                {cake.text}
            </span>
        </li>
        ))}
            
        </ul>
        </div>
        <div className='imgspace'>
            
        <img
          src={images[currentIndex].url}
          alt={`Image ${currentIndex + 1}`}
          
        />
        <p>{images[currentIndex].text}</p> 
          
      </div>
      </div>
  )
}

export default Services
