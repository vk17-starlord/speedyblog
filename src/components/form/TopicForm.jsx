import { useState } from "react"
import Button from "../common/Button";
import Input from "../common/Input"
import InstantInput from "../common/InstantInput";
import Pills from "../common/Pills";
function TopicForm() {

  const [topic, settopic] = useState("");
  const [category, setcategory] = useState("");
  const [keywords, setkeywords] = useState([]);

  const addKeyword= (newKeyword)=>{
    setkeywords((prevKeywords) => [...prevKeywords, newKeyword]);
  }

  const submitForm= ()=>{
    const object = {
        topic : topic , 
        category : category , 
        keywords : keywords
    }
  }

  return (
    <div className="w-full">
         <h1 className="text-lg mb-5 text-center md:text-2xl font-semibold">Generative AI Blog Entry</h1>
         <Input label="Enter Blog Topic" onChange={settopic}  icon='bx bx-pen' />
         <Input label="Enter Topic Category" onChange={settopic}  icon='bx bx-grid-alt' />
         <InstantInput addElement={addKeyword}></InstantInput>
         <div className="w-full flex flex-wrap">
            { keywords.map((keyword , idx)=>{
                return <Pills key={`key-${idx}`}> {keyword} </Pills>
            })}
         </div>
         <Button className="w-full my-5"> Create Topic  </Button>
    </div>
  )
}

export default TopicForm