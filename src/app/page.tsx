import Layout from "@/components/Layout";
import { dashboardStats } from "@/data/dashboardStats";
import { MessageSquare, Users, Timer, LifeBuoy } from "lucide-react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
export default function Home() {
  const cards = [
    {
      title: "Total Messages",
      value: dashboardStats.totalMessages,
      icon: <MessageSquare className="text-blue-600 w-8 h-8" />,
      color: "text-blue-600",
      href: "/messages",
    },
    {
      title: "Active Users",
      value: dashboardStats.activeUsers,
      icon: <Users className="text-green-600 w-8 h-8" />,
      color: "text-green-600",
      href: "/users?filter=active",
    },
    {
      title: "Avg. Response Time",
      value: dashboardStats.avgResponseTime,
      icon: <Timer className="text-yellow-600 w-8 h-8" />,
      color: "text-yellow-600",
      href: "/reports", 
    },
    {
      title: "Support Tickets",
      value: dashboardStats.supportTickets,
      icon: <LifeBuoy className="text-purple-600 w-8 h-8" />,
      color: "text-purple-600",
      href: "/tickets",
    },
  ];

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Dashboard</h1>
      <p className="text-gray-700 mb-6">This is your admin panel dashboard.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {cards.map((card) => (
          <TooltipProvider key={card.title}>
  <Tooltip>
    <TooltipTrigger asChild>
      <Link href={card.href}>
        <div className="bg-white rounded-2xl shadow-md p-6 hover:bg-blue-50 cursor-pointer transition-all duration-300">
          <div className="flex items-center gap-4">
            {card.icon}
            <div>
              <p className="text-gray-500 text-sm">{card.title}</p>
              <p className={`text-2xl font-bold mt-2 ${card.color}`}>{card.value}</p>
            </div>
          </div>
        </div>
      </Link>
    </TooltipTrigger>
    <TooltipContent>
      <p>View {card.title} details</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
        ))}
      </div>
    </Layout>
  );
}
