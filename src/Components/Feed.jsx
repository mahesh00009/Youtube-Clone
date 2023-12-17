import React, { useEffect, useState } from 'react'
import { Box , Stack , Typography } from '@mui/material'
import { BorderRight } from '@mui/icons-material'
import {Sidebar, Videos} from './index'
import { fetchFromApi } from '../Utils/FetchFromApi'


const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState("New")
  const [videos, setVideos] = useState([])

  useEffect(() =>{

    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then((data) =>setVideos(data.items))

  }, [selectedCategory])

  console.log(videos)
  return (
    <Stack sx = {{ flexDirection : { sx : "column" , md : "row"} , backgroundColor : "#000"}} >

      <Box sx = {{ height : { sx : "auto" , md : "92vh"}, borderRight : "1px solid #3d3d3d", px : {sx : 0 , md : 2}}} >


      <Typography sx = {{color:"white"}}>

        <Sidebar selectedCategory = {selectedCategory}  setSelectedCategory = {setSelectedCategory}/>
     

      </Typography>
      </Box>

    <Box p = {2} sx = {{ overflowY : "auto", height:"90vh", flex : "2"  }}>

      <Typography variant='h4' 
      fontWeight="bold"

      ml = {2}
      sx = {{color : 'white', textDecoration:"underline"}}
      
      >
      {selectedCategory}  <span style =  {{ color : "#e85f5f"}}>videos</span>
      </Typography>

      <Videos videos = {videos}/>
        </Box>

    </Stack>
  )
 
}

export default Feed