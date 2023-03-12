import './App.css';
import React,{useState} from 'react';

function App() {
  const [input,setInput] = useState("");
  const [chatlog,setChatlog] = useState([{
    user:"gpt",
    message:"How can I help you ?"
  },{
      user:"me",
      message:"I need to know about whether ?"
  }])

  async function handleSubmit(e) {
    e.preventDefault()
    setInput("")
    setChatlog([...chatlog,{user:"me" , message:`${input}`}])
    console.log("submit")
    console.log(`${input}`)
  }
  return (
    <div className="App">
      <div className="left-menu">
        <div className='new-chat'><span>+</span>New Chat</div>
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
          {` ${message.user === "gpt" && <img src={require('./image/openai-avatar.png')} alt="" />}`}

        </div>
        <div className='message'>
          {message.message}
        </div>
      </div>
    </div>
  )
}

export default App;
