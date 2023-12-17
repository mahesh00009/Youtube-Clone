import React from 'react'

import { BrowserRouter , Routes, Route } from "react-router-dom"
import { Box } from '@mui/material'
import {Feed, VideoDetail, ChannelDetail, SearchFeed, Navbar } from './Components/index'

const App = () => (
  <BrowserRouter >

  <Box sx = {{backgroundColor : "#000"}} />

  <Navbar/>

  <Routes>
    <Route path = "/" exact element = {<Feed/>}/>
    <Route path = "/Youtube-Clone" exact element = {<Feed/>}/>
    <Route path = "/video/:id" element = {<VideoDetail/>}/>
    <Route path = "/channel/:id" element = {<ChannelDetail/>}/>
    <Route path = "/search/:searchTerm" element = {<SearchFeed/>}/>
  </Routes>
  
  </BrowserRouter>
  )


export default App