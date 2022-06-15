import "./App.css";
import Blog from "./components/Blog";
import Login from "./components/Login";
import { useState } from "react";
import styled from "styled-components";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import store from "./redux/store";
import AddBlog from "./components/AddBlog";
import createBlog from "./redux/blog/BlogAction";
import BlogContextProvider from "./context/blogContext";


function App() {
  const [login, setLogin] = useState(false);
  
  const loginHandler = () => {
    setLogin(true);
  };
  
  return (
    <Provider store={store}>
      <BlogContextProvider>
        <Root>
          <div>
            <Heading>Welcome to the general Blogs!</Heading>
            <Para>where you can read, write and update blogs</Para>
          </div>
          <div className="flex justify-center items-center bg-red-50 my-2 drop-shadow-md py-2">
            <Login onLogin={loginHandler}  />
          </div>
          <div className=" flex-1 mb-2 overflow-auto">
            <Blog />
          </div>
          {login && (
            <div className="flex justify-center items-center bg-red-50 drop-shadow-md py-2">
              <AddBlog />
            </div>
          )}
          
        </Root>
      </BlogContextProvider>
    </Provider>
  );
}

// const mapStateToProps = (state) => ({ data: state.data })
// const mapDispatchToProps = (dispatch) => {
//   return {
//     createBlog: ()=> dispatch(createBlog)
//   }
// }

const Root = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Heading = styled.h1`
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
  margin: 0;
  color: #6b7280;
`;

const Para = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0;
  color: #8e8f96;
`;

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
