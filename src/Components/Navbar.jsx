import React from 'react'
import {Link} from "react-router-dom"
import  { Stack, Typography } from "@mui/material"
import Person2Icon from '@mui/icons-material/Person2';

import Logo from "../Utils/Logo.svg"
import {Searchbar} from "../Components/index"

const Navbar = () => {
  return (
    <Stack
     direction = "row"
     alignItems="center" 
     p ={2} 
     sx = {{ position: "sticky", background: "#000", top: "0px", justifyContent: "space-between"}} >

    <Link  to = "/" style = {{ display : 'flex', alignItems : 'center'}} >

     <img src={Logo} alt=""  height={30}/>

     </Link>


    <Searchbar />


    <button style={{ borderRadius:"20px", display:"flex", gap:"5px", padding: "5px 20px", background:"transparent", color: "#3771ac", border:"1px solid gray"}} >
      <Person2Icon/>
          <Typography variant='h6' sx={{ fontSize:"1rem"}}>
            Sign in
          </Typography>
        </button>
      
    </Stack>
  )
}

export default Navbar