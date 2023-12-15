import { OPENAI_KEY } from "./constants";

const openai = new OpenAI({
    apiKey: OPENAI_KEY,dangerousAllowBrowser:true,
  });

  export default openai;