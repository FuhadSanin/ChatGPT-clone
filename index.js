//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

const { Configuration, OpenAIApi } = require("openai");
const express = require('express')
const configuration = new Configuration({
    organization: "org-vgSn4MgXnJwtxVxFZcjKFFSR",
    apiKey: "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",
});



const app = express()
const port = 3001

async function callapi(){
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "What is your name",
    max_tokens: 7,
    temperature: 0,
    });
    console.log(response.data.choices[0].text)
}
callapi()

app.post('/',async(req,res)=>{
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "What is your name",
    max_tokens: 7,
    temperature: 0,
    });
    console.log(response.data.choices[0].text)
})

app.listen(port,()=>{
    console.log(`Example ${port}`)
})