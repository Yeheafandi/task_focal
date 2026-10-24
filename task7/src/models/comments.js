// ============================================
// comments.js  (in-memory array - mutations alter this array directly)
// ============================================
const comments = [
  {
    id: 1,
    postId: 1,
    userId: 2,
    text: "Great summary Karim! MVC pattern really keeps things organized.",
    createdAt: "2026-10-18T11:15:00.000Z"
  },
  {
    id: 2,
    postId: 1,
    userId: 3,
    text: "Especially love the separation between routes and business controllers.",
    createdAt: "2026-10-18T12:00:00.000Z"
  },
  {
    id: 3,
    postId: 2,
    userId: 1,
    text: "Agree 100%! REST predictability is gold for any client app.",
    createdAt: "2026-10-19T14:30:00.000Z"
  },
  {
    id: 4,
    postId: 3,
    userId: 4,
    text: "Practicing with arrays first gave me a much clearer mental model for CRUD.",
    createdAt: "2026-10-20T09:10:00.000Z"
  },
  {
    id: 5,
    postId: 4,
    userId: 3,
    text: "Finally a simple explanation of 201 vs 200, thanks Omar!",
    createdAt: "2026-10-20T12:40:00.000Z"
  },
  {
    id: 6,
    postId: 5,
    userId: 10,
    text: "Handling error responses on the frontend is half of the job.",
    createdAt: "2026-10-20T16:45:00.000Z"
  },
  {
    id: 7,
    postId: 6,
    userId: 5,
    text: "The .env.example tip saved my team so much confusion.",
    createdAt: "2026-10-21T10:15:00.000Z"
  },
  {
    id: 8,
    postId: 7,
    userId: 2,
    text: "next() is the part beginners forget most, great reminder.",
    createdAt: "2026-10-21T15:30:00.000Z"
  },
  {
    id: 9,
    postId: 8,
    userId: 7,
    text: "Testing wrong ids is something I always skipped, I will start doing it.",
    createdAt: "2026-10-22T11:00:00.000Z"
  },
  {
    id: 10,
    postId: 9,
    userId: 1,
    text: "Great point about indexes, this is exactly why we move to a database next.",
    createdAt: "2026-10-22T17:20:00.000Z"
  }
];

module.exports = comments;
