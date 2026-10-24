// ============================================
// users.js  (in-memory array - mutations alter this array directly)
// ============================================
const users = [
  {
    id: 1,
    username: "karim_tech",
    fullName: "Karim Mansour",
    email: "karim@example.com",
    bio: "Full-stack JavaScript engineer & open-source contributor",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
    role: "author",
    createdAt: "2026-01-15T09:30:00.000Z"
  },
  {
    id: 2,
    username: "nour_designer",
    fullName: "Nour Al-Huda",
    email: "nour@example.com",
    bio: "UI/UX Designer passionate about minimal web interfaces",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    role: "author",
    createdAt: "2026-02-10T14:15:00.000Z"
  },
  {
    id: 3,
    username: "tariq_dev",
    fullName: "Tariq Ziad",
    email: "tariq@example.com",
    bio: "Node.js & Cloud enthusiast building scalable distributed systems",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150",
    role: "member",
    createdAt: "2026-03-01T11:45:00.000Z"
  },
  {
    id: 4,
    username: "sara_ai",
    fullName: "Sara Mahmoud",
    email: "sara@example.com",
    bio: "AI researcher & Pythonista learning modern Node backends",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150",
    role: "member",
    createdAt: "2026-03-20T16:00:00.000Z"
  },
  {
    id: 5,
    username: "omar_backend",
    fullName: "Omar Khalil",
    email: "omar@example.com",
    bio: "Backend developer who loves clean REST APIs and Postman",
    avatar: "https://i.pravatar.cc/150?img=12",
    role: "author",
    createdAt: "2026-03-28T08:20:00.000Z"
  },
  {
    id: 6,
    username: "layla_frontend",
    fullName: "Layla Haddad",
    email: "layla@example.com",
    bio: "Frontend developer exploring React and web accessibility",
    avatar: "https://i.pravatar.cc/150?img=47",
    role: "member",
    createdAt: "2026-04-05T10:10:00.000Z"
  },
  {
    id: 7,
    username: "yazan_data",
    fullName: "Yazan Saleh",
    email: "yazan@example.com",
    bio: "Data enthusiast learning how APIs feed dashboards",
    avatar: "https://i.pravatar.cc/150?img=33",
    role: "member",
    createdAt: "2026-04-18T13:40:00.000Z"
  },
  {
    id: 8,
    username: "huda_devops",
    fullName: "Huda Nasser",
    email: "huda@example.com",
    bio: "DevOps engineer automating deployments with Docker and CI",
    avatar: "https://i.pravatar.cc/150?img=45",
    role: "author",
    createdAt: "2026-05-02T09:05:00.000Z"
  },
  {
    id: 9,
    username: "rami_mobile",
    fullName: "Rami Darwish",
    email: "rami@example.com",
    bio: "Mobile developer building Flutter apps backed by Node.js",
    avatar: "https://i.pravatar.cc/150?img=15",
    role: "member",
    createdAt: "2026-05-21T15:25:00.000Z"
  },
  {
    id: 10,
    username: "dina_qa",
    fullName: "Dina Faris",
    email: "dina@example.com",
    bio: "QA engineer who tests APIs before they reach production",
    avatar: "https://i.pravatar.cc/150?img=49",
    role: "member",
    createdAt: "2026-06-09T12:00:00.000Z"
  }
];

module.exports = users;
