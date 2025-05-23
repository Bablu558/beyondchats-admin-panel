export const messages = [
  {
    id: "1",
    user: "Alice",
    lastMessage: "Can I get help with my order?",
    timestamp: "2025-05-01T10:00:00Z",
    thread: [
      { sender: "user", text: "Can I get help with my order?", timestamp: "2025-05-01T10:00:00Z" },
      { sender: "admin", text: "Sure! What seems to be the issue?", timestamp: "2025-05-01T10:02:00Z" },
    ],
  },
  {
    id: "2",
    user: "Bob",
    lastMessage: "Thanks for the quick support!",
    timestamp: "2025-05-01T11:00:00Z",
    thread: [
      { sender: "user", text: "My login isn't working.", timestamp: "2025-05-01T11:00:00Z" },
      { sender: "admin", text: "Try resetting your password.", timestamp: "2025-05-01T11:01:30Z" },
      { sender: "user", text: "Thanks for the quick support!", timestamp: "2025-05-01T11:02:00Z" },
    ],
  },
  {
    id: "3",
    user: "Charlie",
    lastMessage: "Is there a way to change my email?",
    timestamp: "2025-05-01T12:00:00Z",
    thread: [
      { sender: "user", text: "Is there a way to change my email?", timestamp: "2025-05-01T12:00:00Z" },
      { sender: "admin", text: "Yes, you can update it from your account settings.", timestamp: "2025-05-01T12:02:00Z" },
      { sender: "user", text: "Found it, thanks!", timestamp: "2025-05-01T12:02:30Z" },
      { sender: "admin", text: "Welcome, Feel free to ask anything.", timestamp: "2025-05-01T12:03:00Z" },
    ],
  },
  {
    id: "4",
    user: "Diana",
    lastMessage: "The app keeps crashing!",
    timestamp: "2025-05-01T13:00:00Z",
    thread: [
      { sender: "user", text: "The app keeps crashing!", timestamp: "2025-05-01T13:00:00Z" },
      { sender: "admin", text: "Can you share which device and OS you're using?", timestamp: "2025-05-01T13:01:30Z" },
      { sender: "user", text: "iPhone 13, iOS 17", timestamp: "2025-05-01T13:02:00Z" },
      { sender: "admin", text: "Thanks! We're looking into it now.", timestamp: "2025-05-01T13:03:00Z" },
    ],
  },
  {
    id: "5",
    user: "Ethan",
    lastMessage: "When will my refund be processed?",
    timestamp: "2025-05-01T14:00:00Z",
    thread: [
      { sender: "user", text: "When will my refund be processed?", timestamp: "2025-05-01T14:00:00Z" },
      { sender: "admin", text: "Refunds typically take 3-5 business days.", timestamp: "2025-05-01T14:02:00Z" },
      { sender: "user", text: "Got it, thank you!", timestamp: "2025-05-01T14:02:30Z" },
    ],
  },
  {
    id: "6",
    user: "Fiona",
    lastMessage: "How do I cancel my subscription?",
    timestamp: "2025-05-01T15:00:00Z",
    thread: [
      { sender: "user", text: "How do I cancel my subscription?", timestamp: "2025-05-01T15:00:00Z" },
      { sender: "admin", text: "You can cancel from your billing settings.", timestamp: "2025-05-01T15:01:30Z" },
      { sender: "user", text: "Done. Thanks for the help.", timestamp: "2025-05-01T15:02:00Z" },
    ],
  },
];
