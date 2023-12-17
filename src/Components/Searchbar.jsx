import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { IconButton, Paper, Typography} from "@mui/material"
import { Search } from "@mui/icons-material"


const Searchbar = () => {
 const [searchTerm, setSearchTerm] = useState("");
 const navigate = useNavigate()


 const handleSubmit = (e) =>{
  e.preventDefault();
  if(searchTerm){
    navigate(`/search/${searchTerm}`)
    setSearchTerm("");
  }
 } 
  return (
    <Paper
    component="form"
    onSubmit = {handleSubmit}
    sx  = {{background: "transparent", height: "40px"  ,borderRadius : 30, border : "1px solid #383838", boxShadow : "none" , pl : "2", mr : {sm: 5}}}
    >
        <input className='search-bar' placeholder='Search'  value = {searchTerm} onChange={ ({target : {value}}) => {setSearchTerm(value)}}/>

        <IconButton type='submit' sx = {{ color : "#545454", marginBottom: "3px", backgroundColor: "#55ff9e", borderLeft: "1px solid #383838", padding : "10px 20px 6px 20px", borderRadius: "0", background: "black", zIndex: "-1"}}>

            <Search /> 


        </IconButton>


    </Paper>
  )
}

export default Searchbar