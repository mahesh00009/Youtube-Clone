import React, { useEffect, useState } from 'react'
import { Box  , Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { BorderRight } from '@mui/icons-material'
import {Videos} from './index'
import { fetchFromApi } from '../Utils/FetchFromApi'

const SearchFeed = () => {

  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams();

  useEffect(() =>{

    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
    .then((data) =>setVideos(data.items))

  }, [searchTerm])

  console.log(videos)
  return (
   
    <Box p = {2} sx = {{ overflowY : "auto", height:"90vh", flex : "2"  }}>

      <Typography variant='h4' 
      fontWeight="bold"

      ml = {2}
      sx = {{color : 'white', textDecoration:"underline"}}
      
      >
      Search Results : <span style =  {{ color : "#e85f5f"}}>{ searchTerm }</span>
      </Typography>

      <Videos videos = {videos}/>
      </Box>

  )
 
}

export default SearchFeed