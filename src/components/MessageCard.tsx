import Link from "next/link";

export default function MessageCard({ id, user, lastMessage }: { id: string; user: string; lastMessage: string }) {
  return (
    <Link href={`/messages/${id}`}>
      <div className="p-4 bg-white shadow rounded hover:bg-gray-100 cursor-pointer" >
        <h2 className="text-blue-400 font-semibold">{user}</h2>
        <p className="text-sm text-gray-600 truncate">{lastMessage}</p>
      </div>
    </Link>
  );
}
