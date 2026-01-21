'use client'

import { CldVideoPlayer } from "next-cloudinary"
import 'next-cloudinary/dist/cld-video-player.css';

export const CldPlayer = ({media, type = 'card'}: { media: string, type: 'card' | 'page' }) => {
    return <CldVideoPlayer
        width="1920"
        height="1080"
        src={media}
        autoplay={true}     // Start immediately
        loop={true}         // Repeat forever
        muted={true}        // REQUIRED for autoplay to work
        controls={false}    // Hide the play/pause buttons
        logo={false}        // Hide Cloudinary logo
        className={`w-full h-full object-cover ${type === 'card' ? 'rounded-t-lg' : 'rounded-lg shadow-2xl'}`}
    />
}