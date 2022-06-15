import React, { useState, useContext, useEffect } from "react";
import { BlogContext } from "../context/blogContext";
import styled from "styled-components";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const {blogs, setBlogs, active, setActive} = useContext(BlogContext);


  useEffect(() => {
    if(active?.id){
        setTitle(active.title)
        setContent(active.content)
    }
  }, [active])

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentChangeHandler = (e) => {
    setContent(e.target.value);
  };

  const submitHandler = () => {
    setBlogs((prevBlog) => [...prevBlog, {id: Date.now(), title: title, content: content }]);
    setTitle("");
    setContent("");
  };

  const updateHandler = () => {
    setBlogs(s=>{
       return s.map(i=>{
            if(i.id===active.id){
                return{
                    ...i,
                    title,
                    content
                }
            }else{
                return i
            }
        })
    })
    setTitle('')
    setContent('')
  }


  return (
    <>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <Label>Blog Title: </Label> <br />
          <Input
            type="text"
            placeholder="blog title"
            value={title}
            onChange={titleChangeHandler}
          />
          <br />
          <Label>Blog Content: </Label>
          <br />
          <textarea
            className="border-b-2 border-b-solid border-b-gray-500 rounded-lg indent-2 p-1 outline-none"
            placeholder="type your blog here..."
            rows="4"
            cols="50"
            value={content}
            onChange={contentChangeHandler}
          ></textarea>
          <br />
          <div className="flex justify-around">
            <Button type='buttton' onClick={submitHandler}>Submit</Button>
            <Button type='buttton' onClick={updateHandler}>Update</Button>
          </div>
        </form>
      </div>
    </>
  );
};

const Label = styled.label`
  color: #8e8f96;
  font-size: 1rem;
  line-height: 1.5rem;
`;
const Input = styled.input`
  outline: 2px solid transparent;
  outline-offset: 2px;
  text-indent: 0.5rem;
  padding: 0.25rem;
  border-bottom: 2px solid #6b7280;
`;

const Button = styled.button`
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 0 1rem;
  margin-top: 0.5rem;
  border: 2px solid #fca5a5;
  background-color: #fef2f2;
  color: #8e8f96;
  text-transform: none;
  border-radius: 2rem;

  &:hover {
    background-color: #fee2e2;
  }
`;

export default AddBlog;
