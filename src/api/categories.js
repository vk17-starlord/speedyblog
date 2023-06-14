
import { DummyTopics } from "../global/mock/DummyTopics"

// get all categories listed on website 
export const getCategories= ()=>{
    const categories = new Set();
    DummyTopics.forEach(topic => {
        categories.add(topic.category);
    });
    const list = ['ALL'].concat(Array.from(categories))
    return list;
}

export const getDataByCategory = (category)=>{

    if(category=='ALL') return DummyTopics
    

    return DummyTopics.filter((topic)=>
      topic.category === category
    )

}