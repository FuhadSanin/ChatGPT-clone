//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

const { Configuration, OpenAIApi } = require("openai");
const bodyparser = require('body-parser')
const cors = require('cors')
const express = require('express')
const configuration = new Configuration({
    organization: "org-vgSn4MgXnJwtxVxFZcjKFFSR",
    apiKey: "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",
});



const app = express()
app.use(bodyparser.json())
app.use(cors())
const port = 3000

app.post('/',async(req,res)=>{
    const {message}=req.body
    console.log(message,"message")
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${message}`,
    max_tokens: 100,
    temperature: 0.5,
    });
    console.log(response.data.choices[0].text)
    res.json({
        // data:response.data
        message:response.data.choices[0].text

    })
})

app.listen(port,()=>{
    console.log(`Listening on http://localhost:${port}/`)
})