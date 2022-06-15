import React, { useState, useContext} from 'react'
import styled from "styled-components";
import { BlogContext } from '../context/blogContext';

const Blog = () => {

  const {blogs, setBlogs, active, setActive} = useContext(BlogContext)
   
  return (
    <div>

        {blogs.map((b) => {
            return <div onClick={() => setActive(b)} key={b.id} className=' cursor-pointer flex flex-col border-b-solid border-b-2 bg-red-100 border-b-red-200 py-2 drop-shadow-md mb-2'>
                <Title>{b.title}</Title>
                <Para>{b.content}</Para>
            </div>
        })}

       
    </div>
  )
}

const Title = styled.h3`
font-size: 1.5rem;
line-height: 2rem;
font-weight: 400;
margin: 0;
color: #6b7280;
`

const Para = styled.p`
font-size: 1rem;
line-height: 1.5rem;
margin: 0;
color: #8e8f96;
`


export default Blog