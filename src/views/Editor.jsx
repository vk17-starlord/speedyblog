import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navbar from "../components/common/Navbar"
import TabCard from "../components/common/TabCard"
import DraftEditor from "../components/editor/DraftEditor"
import { useBlogState } from "../context/BlogContext"

function Editor() {

  const params = useParams()
  const {getBlogById , blogs} = useBlogState()
  const [blog, setblog] = useState(null);
 useEffect(()=>{
 if(blogs.length>0){
  const id = params.blogid;
  const res= getBlogById(id)
  setblog(res)
 }

 },[blogs])
  return (
    <div className='w-full'>
        <Navbar />
        { blog && <div className="w-full flex flex-col justify-center items-center mesh-bg h-52">
          <h1 className="font-bold text-white text-3xl">{blog.topic}</h1>
          
        </div>}
        <DraftEditor />
    </div>
  )
}

export default Editor