import { messages } from "./messages";
import { users } from "./users"; // Assuming this exists

// 1. Total Messages (count of all messages from all user)
// const totalMessages = messages.reduce((sum, msg) => sum + msg.thread.length, 0);

// 2. Support Tickets (assuming each message thread = 1 ticket)
const supportTickets = messages.length;

// 3. Active Users
const activeUsers = users.filter((user) => user.active).length;

// 4. Avg. Response Time (fake timestamps for simulation logic)
function calculateAverageResponseTime() {
  let totalReplies = 0;
  let totalTimeInSeconds = 0;

  messages.forEach((msg) => {
    const baseTime = Date.now(); // simulate time
    const interval = 90; // assume 90s delay between messages

    for (let i = 1; i < msg.thread.length; i++) {
      const prevSender = msg.thread[i - 1].sender;
      const currentSender = msg.thread[i].sender;

      if (prevSender === "user" && currentSender === "admin") {
        totalReplies++;
        totalTimeInSeconds += interval; // Simulate fixed delay
      }
    }
  });

  if (totalReplies === 0) return "N/A";

  const avgSeconds = totalTimeInSeconds / totalReplies;
  const minutes = Math.floor(avgSeconds / 60);
  const seconds = Math.floor(avgSeconds % 60);
  return `${minutes}m ${seconds}s`;
}

export const dashboardStats = {
  totalMessages:messages.length,
  //  totalMessages // for calculate all message
  activeUsers,
  supportTickets,
  avgResponseTime: calculateAverageResponseTime(),
};
