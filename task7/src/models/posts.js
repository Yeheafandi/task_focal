// ============================================
// posts.js  (in-memory array - mutations alter this array directly)
// ============================================
const posts = [
  {
    id: 1,
    userId: 1,
    title: "Mastering Express.js & MVC Architecture",
    content: "Separating routes, controllers, and models creates a clean codebase that scales effortlessly as your project grows.",
    tags: ["nodejs", "express", "backend", "architecture"],
    likes: 24,
    createdAt: "2026-10-18T10:00:00.000Z",
    updatedAt: "2026-10-18T10:00:00.000Z"
  },
  {
    id: 2,
    userId: 2,
    title: "Designing Intuitive Developer APIs",
    content: "Consistent naming conventions, standard HTTP status codes, and clear JSON payloads make life easier for frontend teams.",
    tags: ["design", "api", "rest", "dx"],
    likes: 42,
    createdAt: "2026-10-19T13:20:00.000Z",
    updatedAt: "2026-10-19T13:20:00.000Z"
  },
  {
    id: 3,
    userId: 3,
    title: "Why In-Memory Mocking Accelerates Bootcamp Learning",
    content: "Before introducing database complexity and migrations, mastering array manipulations with filter, find, and map builds solid fundamentals.",
    tags: ["javascript", "arrays", "bootcamp"],
    likes: 18,
    createdAt: "2026-10-20T08:45:00.000Z",
    updatedAt: "2026-10-20T08:45:00.000Z"
  },
  {
    id: 4,
    userId: 5,
    title: "Status Codes Every Beginner Should Know",
    content: "200 means success, 201 means created, 400 means bad request, and 404 means not found. Using them correctly makes an API self-explaining.",
    tags: ["http", "rest", "backend"],
    likes: 31,
    createdAt: "2026-10-20T11:30:00.000Z",
    updatedAt: "2026-10-20T11:30:00.000Z"
  },
  {
    id: 5,
    userId: 6,
    title: "Consuming a REST API from the Frontend",
    content: "Calling fetch with the right method and headers is easy once you know what the backend expects in the request body.",
    tags: ["frontend", "fetch", "api"],
    likes: 15,
    createdAt: "2026-10-20T15:10:00.000Z",
    updatedAt: "2026-10-20T15:10:00.000Z"
  },
  {
    id: 6,
    userId: 8,
    title: "Keeping Secrets Out of Git with dotenv",
    content: "Store configuration like PORT in a .env file, ignore it in .gitignore, and commit a .env.example so teammates know what to set.",
    tags: ["dotenv", "git", "security"],
    likes: 27,
    createdAt: "2026-10-21T09:00:00.000Z",
    updatedAt: "2026-10-21T09:00:00.000Z"
  },
  {
    id: 7,
    userId: 1,
    title: "Middleware: The Pipeline Behind Every Request",
    content: "Each middleware can log, validate, or stop the request. Calling next() passes control to the next step in the chain.",
    tags: ["nodejs", "express", "middleware"],
    likes: 36,
    createdAt: "2026-10-21T14:45:00.000Z",
    updatedAt: "2026-10-21T14:45:00.000Z"
  },
  {
    id: 8,
    userId: 10,
    title: "Testing Your Endpoints with Postman",
    content: "Try the happy path first, then send missing fields and wrong ids to make sure your API answers with clear errors.",
    tags: ["testing", "postman", "qa"],
    likes: 22,
    createdAt: "2026-10-22T10:20:00.000Z",
    updatedAt: "2026-10-22T10:20:00.000Z"
  },
  {
    id: 9,
    userId: 4,
    title: "From Arrays to Databases: What Changes?",
    content: "In-memory arrays reset on every restart. A database keeps your data, adds indexes for fast search, and handles many users at once.",
    tags: ["database", "arrays", "backend"],
    likes: 19,
    createdAt: "2026-10-22T16:05:00.000Z",
    updatedAt: "2026-10-22T16:05:00.000Z"
  },
  {
    id: 10,
    userId: 9,
    title: "Why Mobile Apps Love JSON APIs",
    content: "A single REST API can serve a website and a mobile app at the same time, as long as both agree on the JSON shape.",
    tags: ["mobile", "json", "rest"],
    likes: 12,
    createdAt: "2026-10-23T08:30:00.000Z",
    updatedAt: "2026-10-23T08:30:00.000Z"
  }
];

module.exports = posts;
