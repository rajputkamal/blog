import React, { useState, createContext } from "react";

export const BlogContext = createContext()

const BlogContextProvider = (props) => {

    const [blogs, setBlogs] = useState([
        { id: "b01", title: "React", content: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies." },
        { id: "b02", title: "HTML", content: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript." },
        { id: "b03", title: "CSS", content: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript" },
        { id: "b04", title: "Styled Components", content: "Styled-components is a popular library that is used to style React applications. It allows you to build custom components by writing actual CSS in your JavaScript." },
      ])

      const [active, setActive] = useState({})
    

      return (
          <>
            <BlogContext.Provider value={{blogs, setBlogs, active, setActive}}>
                {props.children}
            </BlogContext.Provider>
          </>
      )
}

export default BlogContextProvider;