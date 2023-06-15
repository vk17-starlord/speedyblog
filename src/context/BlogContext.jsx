import React, { useEffect, useState } from 'react';
import {getAllTopics} from '../api/operations';

const BlogState = React.createContext();
const BlogUpdate = React.createContext();

export function useBlogState() {
  const context = React.useContext(BlogState);
  if (context === undefined) {
    throw new Error("useBlogState must be used within a BlogProvider");
  }
  return context;
}

export function useBlogUpdate() {
  const context = React.useContext(BlogUpdate);
  if (context === undefined) {
    throw new Error("useBlogUpdate must be used within a BlogProvider");
  }
  return context;
}

function BlogContext({ children }) {
  const [blogs, setBlogs] = useState([]);
  const [categories, setcategories] = useState([]);
  const [filteredBlogs, setfilteredBlogs] = useState([]);
 
  useEffect(()=>{
    const data = getAllTopics()
    const res = [ 'ALL' ,...new Set(data.map((ele) => ele.category))]
    setcategories(res)
    filterData(res[0])
    setBlogs(data)
  },[])



  const filterData = (category)=>{
    if(category==='ALL'){
      setfilteredBlogs(blogs);
      return;
    }
    const data = blogs.filter((ele)=>ele.category===category);
    setfilteredBlogs(data)
    return
  }

  const getBlogById = (id)=>{
    return  blogs.filter((ele)=>ele.id==id)[0]
  }

  const addBlog = (newBlog) => {
    setBlogs([ newBlog , ...blogs]);
  };


  const deleteBlog = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
  };
  

 
  const updateBlog = (id, updatedBlog) => {
    const updatedBlogs = blogs.map((blog) => {
      if (blog.id === id) {
        return updatedBlog;
      }
      return blog;
    });
    setBlogs(updatedBlogs);
  };
  
    
  return (
    <BlogState.Provider value={{blogs,categories,filteredBlogs , getBlogById}}>
      <BlogUpdate.Provider value={{ addBlog, deleteBlog, updateBlog  , filterData }}>
        {children}
      </BlogUpdate.Provider>
    </BlogState.Provider>
  );
}

export default BlogContext;
