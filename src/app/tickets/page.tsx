'use client';

import { messages } from "@/data/messages";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TicketsPage() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Support Tickets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {messages.map((msg) => {
          const isResolved = msg.thread[msg.thread.length - 1]?.sender === "admin";

          return (
            <Card key={msg.id}>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{msg.user}</span>
                  <Badge variant={isResolved ? "success" : "destructive"}>
                    {isResolved ? "Resolved" : "Unresolved"}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-2">Last message:</p>
                <p className="text-gray-800 font-medium">{msg.lastMessage}</p>
                <p className="text-gray-400 text-xs mt-2">
                  Thread Length: {msg.thread.length} messages
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Layout>
  );
}
