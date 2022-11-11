import { Tune } from '@mui/icons-material';
import React from 'react';
import ChannelRow from './ChannelRow';
import './SearchPage.css'
import VideoRow from './VideoRow';

const SearchPage = () => {
    return (
        <div>
            <div className='searchPage__filter'>
                <Tune />
                <h2>Filter </h2>
            </div>
            <hr />
            <ChannelRow
            image="https://i.ibb.co/BzZXtKJ/Jahad.jpg"
            channel="Jahed Ahmed Ripon"
            verified
            subs="1,13M"
            noOfVideos={382}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint placeat reiciendis blanditiis delectus similique atque numquam. Rem quia ipsum amet quasi libero veritatis!"
            ></ChannelRow>
            <hr />
            <VideoRow 
            views="2.5M"
            subs="1.14M"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            timestamp="3years ago"
            channel="Jahed Ahmed Ripon"
            title="Working Time💻🖥 #office #time #working"
            image="https://i.ibb.co/3c53DFS/image.png"
            />
            <VideoRow 
            views="2.5M"
            subs="1.14M"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            timestamp="3years ago"
            channel="Jahed Ahmed Ripon"
            title="Working Time💻🖥 #office #time #working"
            image="https://i.ibb.co/3c53DFS/image.png"
            />
            <VideoRow 
            views="2.5M"
            subs="1.14M"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            timestamp="3years ago"
            channel="Jahed Ahmed Ripon"
            title="Working Time💻🖥 #office #time #working"
            image="https://i.ibb.co/3c53DFS/image.png"
            />
            <VideoRow 
            views="2.5M"
            subs="1.14M"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            timestamp="3years ago"
            channel="Jahed Ahmed Ripon"
            title="Working Time💻🖥 #office #time #working"
            image="https://i.ibb.co/3c53DFS/image.png"
            />
            <VideoRow 
            views="2.5M"
            subs="1.14M"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            timestamp="3years ago"
            channel="Jahed Ahmed Ripon"
            title="Working Time💻🖥 #office #time #working"
            image="https://i.ibb.co/3c53DFS/image.png"
            />
            <VideoRow 
            views="2.5M"
            subs="1.14M"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            timestamp="3years ago"
            channel="Jahed Ahmed Ripon"
            title="Working Time💻🖥 #office #time #working"
            image="https://i.ibb.co/3c53DFS/image.png"
            />
            <VideoRow 
            views="2.5M"
            subs="1.14M"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            timestamp="3years ago"
            channel="Jahed Ahmed Ripon"
            title="Working Time💻🖥 #office #time #working"
            image="https://i.ibb.co/3c53DFS/image.png"
            />
            <VideoRow 
            views="2.5M"
            subs="1.14M"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            timestamp="3years ago"
            channel="Jahed Ahmed Ripon"
            title="Working Time💻🖥 #office #time #working"
            image="https://i.ibb.co/3c53DFS/image.png"
            />
        </div>
    );
};

export default SearchPage;