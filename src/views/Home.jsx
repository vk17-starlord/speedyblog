import { useEffect, useState } from "react";

import Container from "../components/common/Container";
import TabView from "../components/common/TabView";
import Banner from "../components/home/Banner";

import { useBlogState, useBlogUpdate } from "../context/BlogContext";

function Home() {
  // declare reactive variables

  const [activeIndex, setactiveIndex] = useState(0);

  // console.log(import.meta.env.VITE_OPEN_API_KEY)
  // const configuration = new Configuration({
  //   apiKey: import.meta.env.VITE_OPEN_API_KEY,
  // });
  // const openai = new OpenAIApi(configuration);

  // const getTopic = async () => {
  //   const response = await openai.createCompletion({
  //     model: "text-davinci-003",
  //     prompt: "Say this is a test",
  //     max_tokens: 7,
  //     temperature: 0,
  //   });
  //   console.log(response);
  // };

  // getTopic();

  const {categories , filteredBlogs , blogs} = useBlogState()
  const {filterData} = useBlogUpdate()  
  useEffect(() => {
     console.log('re-rendering',filteredBlogs)
     filterData(categories[activeIndex])
  }, [categories , blogs]);

  // change current active index
  const changeActiveIndex = (idx) => {
    setactiveIndex(idx);
    filterData(categories[idx])
    
  };
  return (
    <div className="w-full">
      <Container>
        <Banner></Banner>
        <h1 className="my-10 mx-2 font-sans font-bold text-2xl">Categories </h1>
        <TabView
          key={blogs.length}
          tabHeaders={categories}
          changeActiveIndex={changeActiveIndex}
          tabdata={filteredBlogs}
          activeIndex={activeIndex}
        ></TabView>
      </Container>
    </div>
  );
}

export default Home;
