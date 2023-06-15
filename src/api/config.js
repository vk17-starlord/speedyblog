import { Configuration , OpenAIApi} from "openai";

export const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPEN_API_KEY,
});

export const openai = new OpenAIApi(configuration);
