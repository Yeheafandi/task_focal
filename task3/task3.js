// ============================================================
// JAVASCRIPT ARRAYS & OBJECTS — PAGEFLIP BOOKSTORE
// ============================================================
//
// You are a junior analyst at PageFlip, a small online bookstore.
//
// The application contains:
// - books   (catalog)
// - orders  (customer purchases)
//
// Complete all 24 functions.
//
// RULES:
// - Do not modify the original arrays.
// - Each function must return the requested result.
// - Use array methods where appropriate.
// - Do not use external libraries.
// - Pay attention to the relationships between the arrays.
// - IDs are used to connect orders to books (orders.bookId → books.id).
// ============================================================


// ============================================================
// DATA
// ============================================================


// Books (catalog)
const books = [
    {
        id: 1,
        title: "Clean Code",
        author: "Robert Martin",
        genre: "Programming",
        price: 28,
        stock: 12,
        rating: 4.7
    },
    {
        id: 2,
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "Fiction",
        price: 15,
        stock: 5,
        rating: 4.5
    },
    {
        id: 3,
        title: "Atomic Habits",
        author: "James Clear",
        genre: "Self-Help",
        price: 22,
        stock: 0,
        rating: 4.8
    },
    {
        id: 4,
        title: "Eloquent JavaScript",
        author: "Marijn Haverbeke",
        genre: "Programming",
        price: 32,
        stock: 8,
        rating: 4.6
    },
    {
        id: 5,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        genre: "History",
        price: 25,
        stock: 3,
        rating: 4.4
    },
    {
        id: 6,
        title: "Deep Work",
        author: "Cal Newport",
        genre: "Self-Help",
        price: 20,
        stock: 7,
        rating: 4.3
    },
    {
        id: 7,
        title: "Node.js Design Patterns",
        author: "Mario Casciaro",
        genre: "Programming",
        price: 40,
        stock: 2,
        rating: 4.5
    },
    {
        id: 8,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Fiction",
        price: 12,
        stock: 15,
        rating: 4.6
    }
];


// Orders
// bookId refers to books.id
const orders = [
    {
        id: 1001,
        bookId: 1,
        customer: "Maya",
        quantity: 2,
        status: "delivered",
        date: "2026-09-10"
    },
    {
        id: 1002,
        bookId: 4,
        customer: "Omar",
        quantity: 1,
        status: "delivered",
        date: "2026-09-11"
    },
    {
        id: 1003,
        bookId: 2,
        customer: "Lina",
        quantity: 3,
        status: "pending",
        date: "2026-09-12"
    },
    {
        id: 1004,
        bookId: 1,
        customer: "Sara",
        quantity: 1,
        status: "delivered",
        date: "2026-09-12"
    },
    {
        id: 1005,
        bookId: 7,
        customer: "Maya",
        quantity: 1,
        status: "shipped",
        date: "2026-09-13"
    },
    {
        id: 1006,
        bookId: 5,
        customer: "Yousef",
        quantity: 2,
        status: "delivered",
        date: "2026-09-14"
    },
    {
        id: 1007,
        bookId: 8,
        customer: "Nour",
        quantity: 4,
        status: "delivered",
        date: "2026-09-15"
    },
    {
        id: 1008,
        bookId: 4,
        customer: "Ali",
        quantity: 2,
        status: "cancelled",
        date: "2026-09-16"
    },
    {
        id: 1009,
        bookId: 6,
        customer: "Sara",
        quantity: 1,
        status: "pending",
        date: "2026-09-17"
    },
    {
        id: 1010,
        bookId: 1,
        customer: "Omar",
        quantity: 1,
        status: "delivered",
        date: "2026-09-18"
    }
];


// ============================================================
// TASKS
// ============================================================


// 1. Return all books that are currently in stock (stock > 0).
//
// Expected:
// An array of book objects.
function getInStockBooks() {
    return books.filter(b=> b.stock>0);
    //طريق اخرى 
    /*
    const result = [];
    for (const b of books) {
        if (b.stock > 0) result.push(b);
    }
    return result;
    */
}
/*
output:
1)[                                                                                                          
  {                                         
    id: 1,
    title: 'Clean Code',
    author: 'Robert Martin',
    genre: 'Programming',
    price: 28,
    stock: 12,
    rating: 4.7
  },
  {
    id: 2,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    price: 15,
    stock: 5,
    rating: 4.5
  },
  {
    id: 4,
    title: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke',
    genre: 'Programming',
    price: 32,
    stock: 8,
    rating: 4.6
  },
  {
    id: 5,
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    genre: 'History',
    price: 25,
    stock: 3,
    rating: 4.4
  },
  {
    id: 6,
    title: 'Deep Work',
    author: 'Cal Newport',
    genre: 'Self-Help',
    price: 20,
    stock: 7,
    rating: 4.3
  },
  {
    id: 7,
    title: 'Node.js Design Patterns',
    author: 'Mario Casciaro',
    genre: 'Programming',
    price: 40,
    stock: 2,
    rating: 4.5
  },
  {
    id: 8,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Fiction',
    price: 12,
    stock: 15,
    rating: 4.6
  }
]
*/


// 2. Return all books in a given genre.
//
// Example:
// getBooksByGenre("Programming")
//
// Expected:
// An array of book objects.
function getBooksByGenre(genre) {
     return books.filter(b=> b.genre===genre);
    //طريق اخرى 
    /*
    const result = [];
    for (let i = 0; i < books.length; i++) {
        if (books[i].genre === genre) result.push(books[i]);
    }
    return result;
    */
}
/*
output:
2)[
  {
    id: 1,
    title: 'Clean Code',
    author: 'Robert Martin',
    genre: 'Programming',
    price: 28,
    stock: 12,
    rating: 4.7
  },
  {
    id: 4,
    title: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke',
    genre: 'Programming',
    price: 32,
    stock: 8,
    rating: 4.6
  },
  {
    id: 7,
    title: 'Node.js Design Patterns',
    author: 'Mario Casciaro',
    genre: 'Programming',
    price: 40,
    stock: 2,
    rating: 4.5
  }
]
 */


// 3. Return the book with the given id.
//
// Example:
// getBookById(4)
//
// Expected:
// The complete book object (or undefined if not found).
function getBookById(id) {
    return books.find(b=> b.id===id);
    // طريقة اخرى
    // return books.filter(b => b.id === id)[0];
    //طريقة اخرى
    /*
    for (const book of books) {
        if (book.id === id) return book;
    }
    return undefined;
    */
}
/*
output:
3) {
  id: 4,
  title: 'Eloquent JavaScript',
  author: 'Marijn Haverbeke',
  genre: 'Programming',
  price: 32,
  stock: 8,
  rating: 4.6
}
*/

// 4. Return the book with the highest rating.
//
// Expected:
// The complete book object.
function getHighestRatedBook() {
    return books.reduce((h,c) => c.rating > h.rating ? c : h);
    //طريقة اخرى
    //return getBooksSortedByRating()[0];
}
/*
output :
4) {
  id: 3,
  title: 'Atomic Habits',
  author: 'James Clear',
  genre: 'Self-Help',
  price: 22,
  stock: 0,
  rating: 4.8
}
*/


// 5. Return the book with the lowest price.
//
// Expected:
// The complete book object.
function getCheapestBook() {
    return books.reduce((l,c) => c.price < l.price ? c : l);
}
/*
output :
5) {
  id: 8,
  title: 'Pride and Prejudice',
  author: 'Jane Austen',
  genre: 'Fiction',
  price: 12,
  stock: 15,
  rating: 4.6
}
*/

// 6. Return the average price of all books.
//
// Expected:
// A single number.
function getAverageBookPrice() {
    const totalPrice = books.reduce((sum,b)=>sum + b.price, 0);
    return totalPrice/books.length;
    //طريقة اخرى
    /*
    let total = 0;
    books.forEach(book => {
        total += book.price;
    });
    return total / books.length;
    */
}
/*
output:
6) 24.25
*/

// 7. Return all books priced strictly under a given amount.
//
// Example:
// getBooksPricedUnder(25)
//
// Expected:
// An array of book objects.
function getBooksPricedUnder(maxPrice) {
    return books.filter(b=>b.price<maxPrice);
}
/*
output:
7) [
  {
    id: 2,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    price: 15,
    stock: 5,
    rating: 4.5
  },
  {
    id: 3,
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Self-Help',
    price: 22,
    stock: 0,
    rating: 4.8
  },
  {
    id: 6,
    title: 'Deep Work',
    author: 'Cal Newport',
    genre: 'Self-Help',
    price: 20,
    stock: 7,
    rating: 4.3
  },
  {
    id: 8,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Fiction',
    price: 12,
    stock: 15,
    rating: 4.6
  }
]
*/


// 8. Return all orders with status "delivered".
//
// Expected:
// An array of order objects.
function getDeliveredOrders() {
    return orders.filter(o => o.status === "delivered");
}
/*
output:
8) [
  {
    id: 1001,
    bookId: 1,
    customer: 'Maya',
    quantity: 2,
    status: 'delivered',
    date: '2026-09-10'
  },
  {
    id: 1002,
    bookId: 4,
    customer: 'Omar',
    quantity: 1,
    status: 'delivered',
    date: '2026-09-11'
  },
  {
    id: 1004,
    bookId: 1,
    customer: 'Sara',
    quantity: 1,
    status: 'delivered',
    date: '2026-09-12'
  },
  {
    id: 1006,
    bookId: 5,
    customer: 'Yousef',
    quantity: 2,
    status: 'delivered',
    date: '2026-09-14'
  },
  {
    id: 1007,
    bookId: 8,
    customer: 'Nour',
    quantity: 4,
    status: 'delivered',
    date: '2026-09-15'
  },
  {
    id: 1010,
    bookId: 1,
    customer: 'Omar',
    quantity: 1,
    status: 'delivered',
    date: '2026-09-18'
  }
]
*/


// 9. Return all orders placed by a given customer.
//
// Example:
// getOrdersByCustomer("Maya")
//
// Expected:
// An array of order objects.
function getOrdersByCustomer(customer) {
    return orders.filter(o => o.customer === customer);
}
/*
output:
9) [
  {
    id: 1001,
    bookId: 1,
    customer: 'Maya',
    quantity: 2,
    status: 'delivered',
    date: '2026-09-10'
  },
  {
    id: 1005,
    bookId: 7,
    customer: 'Maya',
    quantity: 1,
    status: 'shipped',
    date: '2026-09-13'
  }
]
*/

// 10. Return all orders that are still pending.
//
// Expected:
// An array of order objects.
function getPendingOrders() {
    return orders.filter(o=>o.status==="pending");
}
/*
output:
10) [
  {
    id: 1003,
    bookId: 2,
    customer: 'Lina',
    quantity: 3,
    status: 'pending',
    date: '2026-09-12'
  },
  {
    id: 1009,
    bookId: 6,
    customer: 'Sara',
    quantity: 1,
    status: 'pending',
    date: '2026-09-17'
  }
]
*/

// 11. Return the total quantity of books sold across ALL orders
// (sum of quantity on every order, any status).
//
// Expected:
// A single number.
function getTotalQuantityOrdered() {
    return orders.reduce((sum, o) => sum + o.quantity, 0);
}
/*
output:
11) 18
*/

// 12. Return how many orders have a given status.
//
// Example:
// getOrderCountByStatus("delivered")
//
// Expected:
// A single number.
function getOrderCountByStatus(status) {
    return orders.filter(o => o.status === status).length;
}
/*
output:
12) 6
*/

// 13. Return all orders for a specific book.
//
// You must connect:
// books → orders via bookId
//
// Example:
// getOrdersForBook(1)
//
// Expected:
// An array of order objects.
function getOrdersForBook(bookId) {
     return orders.filter(o => o.bookId === bookId);
}
/*
output:
13) [
  {
    id: 1001,
    bookId: 1,
    customer: 'Maya',
    quantity: 2,
    status: 'delivered',
    date: '2026-09-10'
  },
  {
    id: 1004,
    bookId: 1,
    customer: 'Sara',
    quantity: 1,
    status: 'delivered',
    date: '2026-09-12'
  },
  {
    id: 1010,
    bookId: 1,
    customer: 'Omar',
    quantity: 1,
    status: 'delivered',
    date: '2026-09-18'
  }
]
*/

// 14. Return the total revenue from DELIVERED orders only.
//
// Revenue for one order = book.price * order.quantity
// You must join orders to books using bookId.
// Ignore non-delivered orders.
//
// Expected:
// A single number.
function getDeliveredRevenue() {
   return orders
      .filter(o => o.status === "delivered")
      .reduce((sum, o) => sum + books.find(b => b.id === o.bookId).price * o.quantity, 0);
    
    //طريقة اخرى
    /*
    return getDeliveredOrders().reduce((sum, o) => {
        const book = getBookById(o.bookId);
        return sum + book.price * o.quantity;
    }, 0);
    */
}
/*
output:
14) 242
*/

// 15. Return the names of customers who ordered a specific book.
//
// Each customer should appear at most once.
//
// Example:
// getCustomersWhoOrdered(1)
//
// Expected:
// An array of customer name strings.
function getCustomersWhoOrdered(bookId) {
    return orders.reduce((names, o) => {
        if (o.bookId === bookId && !names.includes(o.customer)) {
            names.push(o.customer);
        }
        return names;
    }, []); 
}
/*
output:
15) ['Maya', 'Sara', 'Omar']
*/

// 16. Return the titles of books that were never ordered.
//
// Expected:
// An array of book title strings.
function getBooksNeverOrdered() {
    return books.filter(b => !orders.some(o => o.bookId === b.id)).map(b => b.title);
    //طرق اخرى
    //return books.filter(b => getOrdersForBook(b.id).length === 0).map(b => b.title);
    //return books.filter(b => !orders.find(o => o.bookId === b.id)).map(b => b.title);
    //return books.filter(b => orders.every(o => o.bookId !== b.id)).map(b => b.title);
}
/*
output:
16) [ 'Atomic Habits' ]
*/

// 17. Return the book that was ordered the most times
// (highest total quantity across all of its orders).
//
// Expected:
// The complete book object.
function getMostOrderedBook() {
        return books.reduce((best, b) => {
        const bQty = getOrdersForBook(b.id).reduce((s, o) => s + o.quantity, 0);
        const bestQty = getOrdersForBook(best.id).reduce((s, o) => s + o.quantity, 0);
        return bQty > bestQty ? b : best;
    }, books[0]);
    //طريقة اخرى
    /*
    const top = getBestsellers(1)[0];
         return books.find(b => b.title === top.title)
    */

}
/*
output:
17) {
  id: 1,
  title: 'Clean Code',
  author: 'Robert Martin',
  genre: 'Programming',
  price: 28,
  stock: 12,
  rating: 4.7
}
*/

// 18. Return the genre that generated the highest DELIVERED revenue.
//
// You must:
// 1. Use delivered orders only.
// 2. Join each order to its book.
// 3. Sum price * quantity per genre.
//                   
// Expected:
// A single genre name string.
function getTopRevenueGenre() {
    const revenueByGenre = getDeliveredOrders().reduce((acc, o) => {
        const book = getBookById(o.bookId);
        acc[book.genre] = (acc[book.genre] || 0) + book.price * o.quantity;
        return acc;
    }, {});
    console.log("revenueByGenre =", revenueByGenre);
 
    return Object.keys(revenueByGenre).reduce((topGenre, genre) =>
        revenueByGenre[genre] > (revenueByGenre[topGenre] || 0) ? genre : topGenre
    , Object.keys(revenueByGenre)[0]);

}
/*
output:
18) Programming
*/

// 19. Return how much a given customer spent on DELIVERED orders.
//
// Spending = sum of (book.price * order.quantity) for that customer.
//
// Example:
// getCustomerSpending("Maya")
//
// Expected:
// A single number.
function getCustomerSpending(customer) {
    return getDeliveredOrders()
        .filter(o => o.customer === customer)
        .reduce((sum, o) => sum + getBookById(o.bookId).price * o.quantity, 0);

}
/*
output:
19) 56
*/

// 20. Return all books whose stock is less than or equal to a threshold.
//
// Example:
// getLowStockBooks(3)
//
// Expected:
// An array of book objects.
function getLowStockBooks(threshold) {
     return books.filter(b => b.stock <= threshold);
}
/*
output:
20) [
  {
    id: 3,
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Self-Help',
    price: 22,
    stock: 0,
    rating: 4.8
  },
  {
    id: 5,
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    genre: 'History',
    price: 25,
    stock: 3,
    rating: 4.4
  },
  {
    id: 7,
    title: 'Node.js Design Patterns',
    author: 'Mario Casciaro',
    genre: 'Programming',
    price: 40,
    stock: 2,
    rating: 4.5
  }
]
*/

// 21. Return an array of order summaries with this structure:
//
// [
//     {
//         orderId: 1001,
//         customer: "Maya",
//         bookTitle: "Clean Code",
//         quantity: 2,
//         total: 56,
//         status: "delivered"
//     }
// ]
//
// Include EVERY order.
// total = book.price * order.quantity
//
// Expected:
// A new array of summary objects.
function getOrderSummaries() {
        return orders.map(o => {
        const book = getBookById(o.bookId);
        return {
            orderId: o.id,
            customer: o.customer,
            bookTitle: book.title,
            quantity: o.quantity,
            total: book.price * o.quantity,
            status: o.status
        };
    });

}
/*
output:
21) [
  {
    orderId: 1001,
    customer: 'Maya',
    bookTitle: 'Clean Code',
    quantity: 2,
    total: 56,
    status: 'delivered'
  },
  {
    orderId: 1002,
    customer: 'Omar',
    bookTitle: 'Eloquent JavaScript',
    quantity: 1,
    total: 32,
    status: 'delivered'
  },
  {
    orderId: 1003,
    customer: 'Lina',
    bookTitle: 'The Alchemist',
    quantity: 3,
    total: 45,
    status: 'pending'
  },
  {
    orderId: 1004,
    customer: 'Sara',
    bookTitle: 'Clean Code',
    quantity: 1,
    total: 28,
    status: 'delivered'
  },
  {
    orderId: 1005,
    customer: 'Maya',
    bookTitle: 'Node.js Design Patterns',
    quantity: 1,
    total: 40,
    status: 'shipped'
  },
  {
    orderId: 1006,
    customer: 'Yousef',
    bookTitle: 'Sapiens',
    quantity: 2,
    total: 50,
    status: 'delivered'
  },
  {
    orderId: 1007,
    customer: 'Nour',
    bookTitle: 'Pride and Prejudice',
    quantity: 4,
    total: 48,
    status: 'delivered'
  },
  {
    orderId: 1008,
    customer: 'Ali',
    bookTitle: 'Eloquent JavaScript',
    quantity: 2,
    total: 64,
    status: 'cancelled'
  },
  {
    orderId: 1009,
    customer: 'Sara',
    bookTitle: 'Deep Work',
    quantity: 1,
    total: 20,
    status: 'pending'
  },
  {
    orderId: 1010,
    customer: 'Omar',
    bookTitle: 'Clean Code',
    quantity: 1,
    total: 28,
    status: 'delivered'
  }
]
*/

// 22. Return the books sorted by rating from highest to lowest.
//
// IMPORTANT:
// Do not modify the original books array.
//
// Expected:
// A new sorted array of book objects.
function getBooksSortedByRating() {
    return books.slice().sort((a, b) => b.rating - a.rating);
}
/*
output:
22) [
  {
    id: 3,
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Self-Help',
    price: 22,
    stock: 0,
    rating: 4.8
  },
  {
    id: 1,
    title: 'Clean Code',
    author: 'Robert Martin',
    genre: 'Programming',
    price: 28,
    stock: 12,
    rating: 4.7
  },
  {
    id: 4,
    title: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke',
    genre: 'Programming',
    price: 32,
    stock: 8,
    rating: 4.6
  },
  {
    id: 8,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Fiction',
    price: 12,
    stock: 15,
    rating: 4.6
  },
  {
    id: 2,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    price: 15,
    stock: 5,
    rating: 4.5
  },
  {
    id: 7,
    title: 'Node.js Design Patterns',
    author: 'Mario Casciaro',
    genre: 'Programming',
    price: 40,
    stock: 2,
    rating: 4.5
  },
  {
    id: 5,
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    genre: 'History',
    price: 25,
    stock: 3,
    rating: 4.4
  },
  {
    id: 6,
    title: 'Deep Work',
    author: 'Cal Newport',
    genre: 'Self-Help',
    price: 20,
    stock: 7,
    rating: 4.3
  }
]
*/

// 23. Return the top N bestsellers by total ordered quantity
// (across all statuses).
//
// Each item in the result should look like:
// { title: "...", totalQuantity: 5 }
//
// Sorted from highest quantity to lowest.
// If two books tie, either order is fine.
//
// Example:
// getBestsellers(3)
//
// Expected:
// An array of up to N summary objects.
function getBestsellers(limit) {
        return books
        .map(b => ({
            title: b.title,
            totalQuantity: getOrdersForBook(b.id).reduce((sum, o) => sum + o.quantity, 0)
        }))
        .sort((a, b) => b.totalQuantity - a.totalQuantity)
        .slice(0, limit);

}
/*
output:
23) [
  { title: 'Clean Code', totalQuantity: 4 },
  { title: 'Pride and Prejudice', totalQuantity: 4 },
  { title: 'The Alchemist', totalQuantity: 3 }
]
*/

// 24. Generate a complete bookstore report.
//
// Return an object with this structure:
//
// {
//     totalBooks: ...,
//     inStockBooks: ...,
//     totalOrders: ...,
//     deliveredOrders: ...,
//     pendingOrders: ...,
//     averageBookPrice: ...,
//     deliveredRevenue: ...,
//     highestRatedBook: ...,
//     mostOrderedBook: ...,
//     topRevenueGenre: ...,
//     lowStockCount: ...   // books with stock <= 3
// }
//
// You must calculate all values from the provided arrays.
//
// Expected:
// One complete report object.
function generateBookstoreReport() {
    return {
        totalBooks: books.length,
        inStockBooks: getInStockBooks().length,
        totalOrders: orders.length,
        deliveredOrders: getDeliveredOrders().length,
        pendingOrders: getPendingOrders().length,
        averageBookPrice: getAverageBookPrice(),
        deliveredRevenue: getDeliveredRevenue(),
        highestRatedBook: getHighestRatedBook(),
        mostOrderedBook: getMostOrderedBook(),
        topRevenueGenre: getTopRevenueGenre(),
        lowStockCount: getLowStockBooks(3).length
    };

}
/*
output:
24) {
  totalBooks: 8,
  inStockBooks: 7,
  totalOrders: 10,
  deliveredOrders: 6,
  pendingOrders: 2,
  averageBookPrice: 24.25,
  deliveredRevenue: 242,
  highestRatedBook: {
    id: 3,
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Self-Help',
    price: 22,
    stock: 0,
    rating: 4.8
  },
  mostOrderedBook: {
    id: 1,
    title: 'Clean Code',
    author: 'Robert Martin',
    genre: 'Programming',
    price: 28,
    stock: 12,
    rating: 4.7
  },
  topRevenueGenre: 'Programming',
  lowStockCount: 3
}
*/

// ============================================================
// OPTIONAL TESTING
// Uncomment lines below after you implement the functions.
// ============================================================

// console.log("1)", getInStockBooks());
//console.log("2)", getBooksByGenre("Programming"));
//console.log("3)", getBookById(4));
//console.log("4)", getHighestRatedBook());
//console.log("5)", getCheapestBook());
//console.log("6)", getAverageBookPrice());
//console.log("7)", getBooksPricedUnder(25));
//console.log("8)", getDeliveredOrders());
// console.log("9)", getOrdersByCustomer("Maya"));
// console.log("10)", getPendingOrders());
//console.log("11)", getTotalQuantityOrdered());
//console.log("13)", getOrdersForBook(1));
//console.log("14)", getDeliveredRevenue());
// console.log("15)", getCustomersWhoOrdered(1));
//console.log("16)", getBooksNeverOrdered());
//console.log("17)", getMostOrderedBook());
console.log("18)", getTopRevenueGenre());
//console.log("19)", getCustomerSpending("Maya"));
// console.log("20)", getLowStockBooks(3));
// console.log("21)", getOrderSummaries());
// console.log("22)", getBooksSortedByRating());
// console.log("23)", getBestsellers(3));
// console.log("24)", generateBookstoreReport());
