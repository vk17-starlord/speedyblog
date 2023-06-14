import { useEffect, useState } from "react";
import { getCategories, getDataByCategory } from "../api/categories";
import Container from "../components/common/Container";
import TabView from "../components/common/TabView";
import Banner from "../components/home/Banner";
import { Configuration, OpenAIApi } from "openai";

function Home() {
  // declare reactive variables

  const [Headings, setHeadings] = useState([]);
  const [activeIndex, setactiveIndex] = useState(null);
  const [currentTopicList, setcurrentTopicList] = useState([]);

  console.log(import.meta.env.VITE_OPEN_API_KEY)
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPEN_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const getTopic = async () => {
    // const response = await openai.createCompletion({
    //   model: "text-davinci-003",
    //   prompt: "Say this is a test",
    //   max_tokens: 7,
    //   temperature: 0,
    // });
    // console.log(response);
  };

  useEffect(() => {
    const data = getCategories();
    setHeadings(data);
    setactiveIndex(0);
    const list = getDataByCategory(data[0]);
    setcurrentTopicList(list);
    getTopic();
  }, []);

  // change current active index
  const changeActiveIndex = (idx) => {
    setactiveIndex(idx);
    const list = getDataByCategory(Headings[idx]);
    setcurrentTopicList(list);
  };
  return (
    <div className="w-full">
      <Container>
        <Banner></Banner>
        <h1 className="my-10 mx-2 font-sans font-bold text-2xl">Categories </h1>
        <TabView
          tabHeaders={Headings}
          changeActiveIndex={changeActiveIndex}
          tabdata={currentTopicList}
          activeIndex={activeIndex}
        ></TabView>
      </Container>
    </div>
  );
}

export default Home;
