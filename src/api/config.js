import { Configuration , OpenAIApi} from "openai";

export const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPEN_API_KEY,
});

export const setFreeTrial = (val=5)=>{
    localStorage.setItem('trials',val);
}
export const getFreeTrial = ()=>{
   return localStorage.getItem('trials')
}
export const openai = new OpenAIApi(configuration);
