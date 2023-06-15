import  { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import CustomToolbar from "./CustomToolbarOption";
import Button from "../common/Button";
import {useParams} from 'react-router-dom';
import { useBlogState } from "../../context/BlogContext";
import { generateBlog } from "../../api/openAPI";

const DraftEditor = () => {
  const initialContent = ``;
  const [loading, setloading] = useState(false);
  const [content, setContent] = useState(initialContent);

  const handleChange = (value) => {
    setContent(value);
  };

  const modules = {
    toolbar: {
      container: "#toolbar",
    },
  };

  const formats = [
    'font', 'size',
    'bold', 'italic', 'underline', 'strike',
    'color', 'background',
    'script',
    'header', 'blockquote', 'code-block',
    'indent', 'list',
    'direction', 'align',
    'link', 'image', 'video', 'formula',
  ];
  
  const params = useParams()
  const {getBlogById} = useBlogState()
  const onGenerateBlog = async ()=>{
  const blogID = params.blogid;
  console.log(blogID)
  const {keywords,topic,category} = getBlogById(blogID)
  setloading(true)
  const res = await generateBlog(topic,category,keywords)
  console.log(res)
  if(res){
    const HTML = res.choices[0].message.content;
    setContent(HTML)
   setloading(false)
  }
  }
  return (
    <div className="w-10/12 block md:grid grid-cols-2 gap-5 my-10 mx-auto">
      <div className="col">
        <CustomToolbar />
        <ReactQuill
          value={content}
          onChange={handleChange}
          modules={modules}
          formats={formats}
          dangerouslySetInnerHTML={{ __html: content }} // Set initial content
        />
        <Button  loading={loading} onClick={onGenerateBlog} className="w-full my-5">Create AI Generated Blog <i className='bx  bxs-magic-wand'></i></Button>
      </div>
      <div className="my-2.5 md:my-0">

        {/* Additional content */}
      </div>
    </div>
  );
};

export default DraftEditor;
