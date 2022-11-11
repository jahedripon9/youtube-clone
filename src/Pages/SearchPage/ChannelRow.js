import { Verified } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react';
import './ChannelRow.css'

const ChannelRow = ({image, channel, subs, noOfVideos, description, verified}) => {
    return (
        <div>
            <div className='channelRow'>
                <Avatar className='channelRow__logo' alt={channel} src={image} />
                <div className='channelRow__text'>
                    <h4>
                        {channel} {" "}
                        {verified && <Verified className='channelRow__virifiedIcon' />}
                    </h4> 
                    <p>
                        {subs} subscribers • {noOfVideos} videos
                    </p>
                    <p className='channelRow__textDescription'> 
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ChannelRow;