// import React, { useState, useEffect, useRef } from "react";
// import ReactMarkdown from "react-markdown";
// import Prism from "prismjs";
// import "prismjs/themes/prism.css";
// import CodeResponse from "../../CodeResponse.js";
// import "./ChatBotPage.css";

// const ChatBotPage = () => {
//   const [value, setValue] = useState("");
//   const [error, setError] = useState("");
//   const [chatHistory, setChatHistory] = useState([]);
//   const textareaRef = useRef(null);

//   const surpriseOptions = [
//     "Who do you make BLT sandwich?",
//     "What is the capital of France?",
//     "What is the best programming language?",
//     "When is National Cat",
//   ];

//   const surprise = () => {
//     const randomValue = Math.floor(Math.random() * surpriseOptions.length);
//     setValue(surpriseOptions[randomValue]);
//   };

//   function autoResizeInput() {
//     textareaRef.current.style.height = "auto";
//     textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
//   }

//   const getResponse = async () => {
//     if (!value) {
//       setError("Please enter a question");
//       return;
//     }
//     try {
//       const options = {
//         method: "POST",
//         body: JSON.stringify({
//           history: chatHistory,
//           message: value,
//         }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       const response = await fetch("http://localhost:8000/gemini", options);
//       const data = await response.text();

//       let formattedResponse = "";

//       if (data.startsWith("**")) {
//         formattedResponse = data;
//       } else {
//         formattedResponse = `**Bot:** ${data}`;
//       }

//       const formattedUserMessage = `**You:** ${value}`;

//       setChatHistory((oldChatHistory) => [
//         ...oldChatHistory,
//         {
//           role: "user",
//           parts: formattedUserMessage,
//         },
//         {
//           role: "model",
//           parts: formattedResponse,
//         },
//       ]);

//       setValue("");
//       setError("");
//       textareaRef.current.style.height = "auto";
//     } catch (error) {
//       console.error(error);
//       setError("Something went wrong. Please try again later.");
//     }
//   };

//   const clear = () => {
//     setChatHistory([]);
//     setValue("");
//     setError("");
//     textareaRef.current.style.height = "auto";
//   };

//   useEffect(() => {
//     Prism.highlightAll();
//   }, [chatHistory]);

//   return (
//     <div className="app">
//       <h3 style={{ margin: "auto" }}>Merlin ChatBot</h3>
//       <p>Ask Merlin.</p>
//       <div className="input-container">
//         <textarea
//           ref={textareaRef}
//           id="chat-input"
//           value={value}
//           placeholder="Hi There!"
//           onChange={(e) => {
//             setValue(e.target.value);
//             autoResizeInput();
//           }}
//         />
//         {!error && (
//           <button
//             style={{ backgroundColor: "gray", color: "white" }}
//             onClick={getResponse}
//           >
//             Ask me
//           </button>
//         )}
//         {error && (
//           <button
//             style={{ backgroundColor: "gray", color: "white" }}
//             onClick={clear}
//           >
//             Clear
//           </button>
//         )}
//       </div>
//       {error && <p className="error">{error}</p>}
//       <div className="search-result">
//         {chatHistory.map((chatItem, index) => (
//           <div key={index}>
//             <div className="message">
//               {chatItem.role === "user" ? (
//                 <div className="user-message">
//                   <ReactMarkdown>{chatItem.parts}</ReactMarkdown>
//                 </div>
//               ) : chatItem.parts.startsWith("```") ? (
//                 <CodeResponse code={chatItem.parts} />
//               ) : (
//                 <div className="bot-message">
//                   <ReactMarkdown>{chatItem.parts}</ReactMarkdown>
//                 </div>
//               )}
//             </div>
//             {index !== chatHistory.length - 1 && (
//               <div className="message-gap" />
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ChatBotPage;

import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import CodeResponse from "../../CodeResponse.js";
import "./ChatBotPage.css";

const ChatBotPage = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const textareaRef = useRef(null);

  const surpriseOptions = [
    "How do you make a BLT sandwich?",
    "What is the capital of France?",
    "What is the best programming language?",
    "When is National Cat Day?",
  ];

  const surprise = () => {
    const randomValue = Math.floor(Math.random() * surpriseOptions.length);
    setValue(surpriseOptions[randomValue]);
  };

  function autoResizeInput() {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
  }

  const getResponse = async () => {
    if (!value) {
      setError("Please enter a question");
      return;
    }
    setLoading(true);
    try {
      const options = {
        method: "POST",
        body: JSON.stringify({
          history: chatHistory,
          message: value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch("http://localhost:8000/gemini", options);
      const data = await response.text();

      let formattedResponse = "";

      if (data.startsWith("**")) {
        formattedResponse = data;
      } else {
        formattedResponse = `**Bot:** ${data}`;
      }

      const formattedUserMessage = `**You:** ${value}`;

      setChatHistory((oldChatHistory) => [
        ...oldChatHistory,
        {
          role: "user",
          parts: formattedUserMessage,
        },
        {
          role: "model",
          parts: formattedResponse,
        },
      ]);

      setValue("");
      setError("");
      textareaRef.current.style.height = "auto";
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again later.");
    }
    setLoading(false);
  };

  const clear = () => {
    setChatHistory([]);
    setValue("");
    setError("");
    textareaRef.current.style.height = "auto";
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [chatHistory]);

  return (
    <div className="app">
      <h3 className="title">Merlin ChatBot</h3>
      <p>Ask Merlin.</p>
      <div className="input-container">
        <textarea
          ref={textareaRef}
          id="chat-input"
          value={value}
          placeholder="Hi There!"
          onChange={(e) => {
            setValue(e.target.value);
            autoResizeInput();
          }}
          rows="1"
          aria-label="Chat input"
        />
        <div className="button-container">
          {!loading && !error && (
            <button className="ask-button" onClick={getResponse}>
              Ask me
            </button>
          )}
          {!loading && error && (
            <button className="clear-button" onClick={clear}>
              Clear
            </button>
          )}
          {loading && <div className="loader"></div>}
          <button className="surprise-button" onClick={surprise}>
            Surprise me
          </button>
        </div>
      </div>
      {error && <p className="error">{error}</p>}
      <div className="search-result">
        {chatHistory.map((chatItem, index) => (
          <div key={index} className="chat-item">
            <div className="message">
              {chatItem.role === "user" ? (
                <div className="user-message">
                  <ReactMarkdown>{chatItem.parts}</ReactMarkdown>
                </div>
              ) : chatItem.parts.startsWith("```") ? (
                <CodeResponse code={chatItem.parts} />
              ) : (
                <div className="bot-message">
                  <ReactMarkdown>{chatItem.parts}</ReactMarkdown>
                </div>
              )}
            </div>
            {index !== chatHistory.length - 1 && (
              <div className="message-gap" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatBotPage;
