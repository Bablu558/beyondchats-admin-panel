'use client';

import { messages } from '@/data/messages';
import Layout from '@/components/Layout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

function getAverageResponseTime() {
  let totalResponseTime = 0;
  let responseCount = 0;

  messages.forEach((message) => {
    const thread = message.thread;
    for (let i = 0; i < thread.length - 1; i++) {
      const current = thread[i];
      const next = thread[i + 1];

      if (current.sender !== 'admin' && next.sender === 'admin') {
        const timeDiff = new Date(next.timestamp).getTime() - new Date(current.timestamp).getTime();
        totalResponseTime += timeDiff;
        responseCount++;
      }
    }
  });

  if (responseCount === 0) return 'No responses yet';

  const avgMilliseconds = totalResponseTime / responseCount;
  const avgSeconds = Math.floor(avgMilliseconds / 1000);
  const minutes = Math.floor(avgSeconds / 60);
  const seconds = avgSeconds % 60;

  return `${minutes}m ${seconds}s`;
}

export default function ReportsPage() {
  const avgResponseTime = getAverageResponseTime();

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8 text-blue-700">Reports & Insights</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Average Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold text-orange-600">
              {avgResponseTime}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Based on admin replies to user messages.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
