import React from 'react'
import {Stack } from '@mui/material'
import {categories} from "../Utils/Contants"

const Sidebar = ({selectedCategory, setSelectedCategory}) => {

  return (
   <Stack direction = "row"
    
   sx = {{ overflow : "auto", height : {sx : "auto" , md : "95%"}, flexDirection : { md : "column"}}}
   >

    {
        categories.map((category, i) =>(
            <button  key  = {i}
             className='category-btn' 
             onClick={() => setSelectedCategory(category.name)}
            style={{ background : category.name === selectedCategory && "#e85f5f",  color : "white" }} 
            >
                <span style = {{ color : category.name === selectedCategory ? "#f6ebe4" : ""}}>{category.icon}</span>

                <span>{category.name}</span>
            </button>
        ))
    }

   </Stack>
  )
}

export default Sidebar