import { openai } from "./config";

export const generateBlog = async (topic, category, keyword) => {

    const prompt = `
    You are a blog writer specializing in ${category}.
     You have been asked to write a blog post on the topic of ${topic}. 
     The blog should include the following keywords: ${keyword.join(',')}. 
     Please generate a blog post that is informative and engaging way in HTML Format don't write any other thing except HTML in response.

    `
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{"role": "system", "content": "You are a helpful blog writing assistant."}, {role: "user", content: prompt}],
  });
  console.log(response);
  return response.data
};
