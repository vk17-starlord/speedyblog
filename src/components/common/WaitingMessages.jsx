import { useState, useEffect } from "react";

const WaitingMessages = () => {
  const waitingMessages = [
    "Generating a blog post on the requested topic. Please wait...",
    "Crafting an informative and engaging blog post just for you. Sit tight!",
    "Our AI writer is hard at work, creating a captivating blog post for you.",
    "Creating content takes time. We appreciate your patience as we generate a high-quality blog post.",
    "The AI is busy brainstorming ideas and writing an engaging article for you. Thank you for your patience!",
    "Creating a well-researched blog post takes a few moments. Thanks for waiting!",
    "In the process of generating an exciting blog post tailored to your topic. Hang in there!",
    "Our AI writer is applying its expertise to deliver a compelling blog post. Thanks for your understanding.",
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(waitingMessages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % waitingMessages.length);
    }, 3000); // Interval in milliseconds (e.g., 3000ms = 3 seconds)

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setCurrentMessage(waitingMessages[currentMessageIndex]);
  }, [currentMessageIndex]);

  return (

      <p className="w-full font-semibold text-center text-2xl">{currentMessage}</p>
  
  );
};

export default WaitingMessages;
