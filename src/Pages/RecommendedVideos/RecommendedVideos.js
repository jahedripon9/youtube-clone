import React from 'react';
import './RecommendedVideos.css'
import VideoCard from './VideoCard';
const RecommendedVideos = () => {
    return (
        <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="ভাঙা হৃদয় 💔 #motivation #islamic #alone #time"
          views="2,3M views"
          timestamp="1 year ago"
          channelImage="https://i.ibb.co/BzZXtKJ/Jahad.jpg"
          channel="Jahed Ahmed Ripon"
          image="https://i.ibb.co/k4h6rhV/image.png"
        />
        <VideoCard
          title="After 3 years, I have create Wordpress website"
          views="193,5K views"
          timestamp="8 months ago"
          channelImage="https://i.ibb.co/BzZXtKJ/Jahad.jpg"
          channel="Jahed Ahmed Ripon"
          image="https://i.ibb.co/tKwX28s/image.png"
        />
        <VideoCard
          title="সেই সংগ্রামী মানুষের সারিতে"
          views="489K views"
          timestamp="1 year ago"
          channelImage="https://i.ibb.co/BzZXtKJ/Jahad.jpg"
          channel="Jahed Ahmed Ripon"
          image="https://i.ibb.co/K7hxvnC/image.png"
        />
        <VideoCard
          title="তাইফ পর্ব ১ যেদিন ওরা নবীজির সঃ রক্ত ঝরালো"
          views="46,6K views"
          timestamp="2 years ago"
          channelImage="https://i.ibb.co/BzZXtKJ/Jahad.jpg"
          channel="Jahed Ahmed Ripon"
          image="https://i.ibb.co/bWw0KrW/image.png"
        />
        <VideoCard
          title="#travelling #sylhet #weather 🥵"
          views="17,8M views"
          timestamp="4 years ago"
          channelImage="https://i.ibb.co/BzZXtKJ/Jahad.jpg"
          channel="Jahed Ahmed"
          image="https://i.ibb.co/C50dg3v/image.png"
        />
        <VideoCard
          title="সুরাহ ফাতিহাকে নতুন করে জানা পর্ব ২ কথোপকথন"
          views="77,5K views"
          timestamp="4 months ago"
          channelImage="https://i.ibb.co/BzZXtKJ/Jahad.jpg"
          channel="Jahed Ahmed Ripon"
          image="https://i.ibb.co/qCqY8tJ/image.png"
        />
        <VideoCard
          title="বাবা মায়ের প্রতি ভালবাসা"
          views="62,4M views"
          timestamp="8 yeras ago"
          channelImage="https://i.ibb.co/BzZXtKJ/Jahad.jpg"
          channel="Jahed Ahmed Ripon"
          image="https://i.ibb.co/RQpLBL3/image.png"
        />
        <VideoCard
          title="একজন নেকার স্ত্রী গল্প"
          views="15,2M views"
          timestamp="6 years ago"
          channelImage="https://i.ibb.co/BzZXtKJ/Jahad.jpg"
          channel="Jahed Ahmed Ripon"
          image="https://i.ibb.co/JBNYpZg/image.png"
        />
      </div>
    </div>
    );
};

export default RecommendedVideos;