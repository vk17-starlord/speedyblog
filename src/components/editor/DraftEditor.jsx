import  { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import CustomToolbar from "./CustomToolbarOption";
import Button from "../common/Button";
import {useParams} from 'react-router-dom';
import { useBlogState } from "../../context/BlogContext";
import { generateBlog } from "../../api/openAPI";
import ReactHtmlParser from "html-react-parser";
import WaitingMessages from "../common/WaitingMessages";
import Modal from "../common/Modal";

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

  const waitingMessages  = [
    "Generating a blog post on the requested topic. Please wait...",
    "Crafting an informative and engaging blog post just for you. Sit tight!",
    "Our AI writer is hard at work, creating a captivating blog post for you.",
    "Creating content takes time. We appreciate your patience as we generate a high-quality blog post.",
    "The AI is busy brainstorming ideas and writing an engaging article for you. Thank you for your patience!",
    "Creating a well-researched blog post takes a few moments. Thanks for waiting!",
    "In the process of generating an exciting blog post tailored to your topic. Hang in there!",
    "Our AI writer is applying its expertise to deliver a compelling blog post. Thanks for your understanding.",
  ];
  

  const params = useParams()
  const {getBlogById} = useBlogState()

  const onGenerateBlog = async ()=>{
  const blogID = params.blogid;
  const {keywords,topic,category} = getBlogById(blogID)
  setloading(true)
  const res = await generateBlog(topic,category,keywords)
  
  if(!res.error){
    setloading(false)
    const HTML = res.choices[0].message.content;
    setContent(HTML)
  }else{
    setloading(false)
    alert(res.error)
  }
  }
  return (
    <div className="w-10/12 block md:grid grid-cols-2 gap-5 my-10 mx-auto">

  {
    <Modal> 

    </Modal>
  }

  {
    loading &&       <div  className="loading flex-col text-white flex justify-center items-center w-full bg-[#fe5829] h-screen fixed top-0 bottom-0 z-50 left-0">
    <WaitingMessages></WaitingMessages>
    <div className="flex my-10">
        <div className="relative">
          <div
            className="w-24 h-24 rounded-full animate-spin border-2 border-solid border-primary border-t-transparent"
          >
          </div>
        </div>
      </div>
          </div>
  }

      <div className="col">
        <CustomToolbar />
        <ReactQuill
          value={content}
          onChange={handleChange}
          modules={modules}
          formats={formats}
          dangerouslySetInnerHTML={{ __html: content }} // Set initial content
        />
        <Button  onClick={onGenerateBlog} className="w-full my-5">Create AI Generated Blog <i className='bx  bxs-magic-wand'></i></Button>
      </div>
      <div dangerouslySetInnerHTML={{ __html: content }} className="my-2.5 my-preview md:my-0">


      </div>
    </div>
  );
};

export default DraftEditor;
