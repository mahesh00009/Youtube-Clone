import React from 'react'
import { Stack , Box} from '@mui/material'

import ChannelCard from './ChannelCard'
import VideoCard from './VideoCard'

const Videos = ({videos, direction}) =>  (

    <Stack direction = {direction ||"row"}  flexWrap="wrap" justifyContent="flex-start" gap = {2} >
 
        {
            videos.map((item, id) =>(
                
                <Box key={id}>
                    {console.log(item)}
                    {item.id.videoId && <VideoCard item = {item} />}
                    {item.id.channelId && <ChannelCard channelDetail = {item} />}

                    {    console.log("snippet", item)
}
                </Box>
            )
            )
        }

    </Stack>
    
  )


export default Videos