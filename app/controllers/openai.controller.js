const ai = require("openai")
//  { Configuration, OpenAIApi } from "openai";
const chatGptApiConfig = require("../config/chat.gpt.api.config")

const configuration = new ai.Configuration({
    organization: chatGptApiConfig.org_id,
    apiKey: chatGptApiConfig.api_key,
});

const openai = new ai.OpenAIApi(configuration);

const ask_natural_language = async (question)=>{
   return await openai.createCompletion({
        model: "text-davinci-003",
        prompt: question,
        temperature: 0.6,
        max_tokens: 1000,
        top_p: 1,
        n:1
      });
}

exports.ask = async(req,res) =>{
    // TODO: authrity check
    if(!req.body||!req.body.question||req.body.question.trim().length === 0){
        res.status(400).send({
            message:"ask some thing,pls"
        })
    }
    let question = req.body.question
    try {
        
        const response = await ask_natural_language(question)
        //   console.log(response)

          if(response.status!==200){
            res.status(response.status).send({
                message:`ask openai error: ${response.statusText}`
            })
            return
          }

         const data = response.data
         const answer = data.choices[0].text

         res.status(200).send(answer)
    } catch (error) {
       res.status(500).send({
        message:`ask openai error: ${error.message}`
       })
    }
}

exports.askWithContext = async (req,res) =>{
    
}