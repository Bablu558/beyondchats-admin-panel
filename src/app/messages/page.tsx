"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import MessageCard from "@/components/MessageCard";
import { messages as allMessages } from "@/data/messages";

export default function MessagesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter messages by user name
  const filteredMessages = allMessages.filter((msg) =>
    msg.user.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout onSearchChange={(value) => setSearchQuery(value)}>
      <h1 className="text-blue-400 text-2xl font-bold mb-4">Messages</h1>
      <div className="space-y-4">
        {filteredMessages.length > 0 ? (
          filteredMessages.map((msg) => (
            <MessageCard key={msg.id} {...msg} />
          ))
        ) : (
          <div className="text-gray-500">No messages found.</div>
        )}
      </div>
    </Layout>
  );
}
