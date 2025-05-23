

"use client";
import { use } from "react";
import { useState } from "react";
import { messages } from "@/data/messages";
import ChatBubble from "@/components/ChatBubble";
import Layout from "@/components/Layout";

type MessagePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default function MessageDetail({ params }: MessagePageProps) {
  const { id } = use(params); 
  const messageData = messages.find((msg) => msg.id === id);
  const [input, setInput] = useState("");
  const [thread, setThread] = useState(messageData?.thread || []);

  if (!messageData) {
    return (
      <Layout>
        <div className="text-red-500">Message not found.</div>
      </Layout>
    );
  }

  const handleSend = () => {
    if (input.trim() === "") return;
    const newMessage = {
      sender: "admin",
      text: input,
      timestamp: new Date().toLocaleTimeString(),
    };
    setThread([...thread, newMessage]);
    setInput("");
  };

  return (
    <Layout>
      <h1 className="text-blue-400 text-xl font-semibold mb-4">
        Chat with {messageData.user}
      </h1>

      <div className="space-y-2 mb-28">
        {thread.length > 0 ? (
          thread.map((msg, index) => (
            <ChatBubble key={index} {...msg} />
          ))
        ) : (
          <p className="text-gray-500">No messages yet. Start the conversation!</p>
        )}
      </div>

      {/* Input bar */}
      <div className="text-cyan-950 fixed bottom-0 left-0 w-full border-b-blue-500">
        <div className="max-w-3xl mx-auto flex items-center px-4 py-3 gap-2 sm:px-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 border rounded px-4 py-2 focus:outline-none text-sm sm:text-base"
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm sm:text-base"
          >
            Send
          </button>
        </div>
      </div>
    </Layout>
  );
}
