import { cn } from "@/lib/utils";

export default function ChatBubble({
  sender,
  text,
  timestamp, 
}: {
  sender: string;
  text: string;
  timestamp?: string; 
}) {
  // ✅ Helper to format timestamp to readable form
  const formatTimestamp = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };
 const timestampColor =
    sender === "admin" ? "text-blue-100" : "text-blue-700";
  return (
    <div className={cn("flex", sender === "admin" ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "p-3 my-2 max-w-xs rounded-lg text-sm",
          sender === "admin" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
        )}
      >
        <p>{text}</p>
        {/* ✅ Formatted timestamp shown below */}
        {timestamp && (
          <small className={cn("block mt-1 text-gray-300 text-[10px] text-right",timestampColor)}>
            {formatTimestamp(timestamp)}
          </small>
        )}
      </div>
    </div>
  );
}
