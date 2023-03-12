import './App.css';
import React,{useState} from 'react';

function App() {
  const [input,setInput] = useState("");
  const [chatlog,setChatlog] = useState([])

  function clear(){
    setChatlog([])
  }

  async function handleSubmit(e) {
    e.preventDefault()
    await setInput("")
    let chatlogNew = [...chatlog,{user:"me" , message:`${input}`}]
    setChatlog(chatlogNew)
    console.log("submit")
    console.log(`${input}`)

    //sending the chtlog message to api
    const messges = chatlogNew.map((message)=>message.message).join("\n")
    const response = await fetch("http://localhost:3000/",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      message:messges
    })
    })
    const data = await response.json()
    await setChatlog([...chatlogNew,{user:"gpt",message:`${data.message}`}])
    console.log(data.message)

  }
  return (
    <div className="App">
      <div className="left-menu">
        <div onClick={clear} className='new-chat'><span>+</span>New Chat</div>
      </div>

      <div className='right-menu'>
        <div className='chatbox'>
          <form onSubmit={handleSubmit}>
            <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Type your message here' className='chat-input-feild' />
          </form>
        </div>

        {chatlog.map((message,index)=><ChatMessage key={index} message={message}/>)}

      </div>
    </div>
  );
}

const ChatMessage=({message})=>{
  return(
   <div className={`chat-log ${message.user === "gpt" && "chatgpt"}`}>
      <div className="chat-message">
        <div className={`avatar ${message.user === "gpt" && "chatgpt"}`}>

        </div>
        <div className='message'>
          {message.message}
        </div>
      </div>
    </div>
  )
}

export default App;
