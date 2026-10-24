// ============================================================
// TASK 5: SHELFSTACK (TYPESCRIPT)
// ============================================================
// 1. Declare all types & interfaces.
// 2. Type all function headers (parameters & return types).
// 3. Implement all functions without mutating original data.
// ============================================================

// --- 1. TYPES & INTERFACES ---

type Category = "architecture" | "programming" | "devops" | "design" | "ai";
type BookFormat = "physical" | "ebook" | "audiobook";
type MemberTier = "free" | "pro" | "vip";
type LoanStatus = "active" | "overdue" | "returned";

interface Book {
    id: number;
    title: string;
    author: string;
    category: Category;
    price: number;
    rating: number;
    tags: string[];
    copiesTotal: number;
    copiesAvailable: number;
    publishedYear: number;
    format: BookFormat;
}

interface Member {
    id: number;
    name: string;
    email: string;
    tier: MemberTier;
    balance: number;
    joinedDate: string;
    active: boolean;
    interests: string[];
}

interface Loan {
    id: number;
    bookId: number;
    memberId: number;
    loanDate: string;
    dueDate: string;
    returnedDate: string | null;
    status: LoanStatus;
    lateFee: number;
}

interface Review {
    id: number;
    bookId: number;
    memberId: number;
    score: number;
    comment: string;
    timestamp: string;
}

// ---- analytical return types ----

interface CatalogValueSummary {
    totalValue: number;
    averagePrice: number;
}

interface MemberBalanceGroups {
    low: Member[];
    mid: Member[];
    high: Member[];
}

interface BookBorrowStat {
    bookId: number;
    borrowCount: number;
}

interface EnrichedLoan extends Loan {
    book: Book;
    member: Member;
}

interface MemberBorrowSummary {
    loanId: number;
    book: Book;
    dueDate: string;
    isOverdue: boolean;
}

interface BookReviewsSummary {
    bookId: number;
    reviewCount: number;
    averageScore: number;
    reviews: Review[];
}

interface InventoryReport {
    totalTitles: number;
    totalStockValue: number;
    outOfStockCount: number;
    lowStockBooks: Book[];
    mostPopularCategory: Category | null;
}

interface PaginatedBooks {
    items: Book[];
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
}

interface FormatCategoryGroup {
    format: BookFormat;
    category: Category;
    count: number;
}

interface TopReviewer {
    memberId: number;
    name: string;
    reviewCount: number;
    averageRating: number;
}

interface CheckoutResult {
    success: boolean;
    message: string;
    newLoan?: Loan;
}

interface CategoryStats {
    category: Category;
    totalTitles: number;
    totalCopies: number;
    inventoryValue: number;
    totalBorrows: number;
    lateFeesTotal: number;
    averageRating: number;
}

interface SearchResult {
    book: Book;
    relevanceScore: number;
}





// ============================================================
// 2. DATA
// ============================================================

export const books = [
    {
        id: 101,
        title: "Clean Architecture Principles",
        author: "Robert Vance",
        category: "architecture",
        price: 45.0,
        rating: 4.8,
        tags: ["solid", "clean code", "patterns"],
        copiesTotal: 5,
        copiesAvailable: 3,
        publishedYear: 2021,
        format: "physical"
    },
    {
        id: 102,
        title: "TypeScript Deep Dive",
        author: "Basarat Ali",
        category: "programming",
        price: 32.5,
        rating: 4.9,
        tags: ["typescript", "javascript", "types"],
        copiesTotal: 8,
        copiesAvailable: 6,
        publishedYear: 2023,
        format: "ebook"
    },
    {
        id: 103,
        title: "Kubernetes in Production",
        author: "Kelsey Hightower",
        category: "devops",
        price: 52.0,
        rating: 4.7,
        tags: ["containers", "docker", "cloud"],
        copiesTotal: 4,
        copiesAvailable: 0,
        publishedYear: 2022,
        format: "physical"
    },
    {
        id: 104,
        title: "Design Systems for Developers",
        author: "Emma Larson",
        category: "design",
        price: 38.0,
        rating: 4.5,
        tags: ["ui", "ux", "figma", "css"],
        copiesTotal: 6,
        copiesAvailable: 4,
        publishedYear: 2022,
        format: "ebook"
    },
    {
        id: 105,
        title: "Mastering Large Language Models",
        author: "Andrew Ng",
        category: "ai",
        price: 60.0,
        rating: 4.9,
        tags: ["ai", "python", "neural networks", "nlp"],
        copiesTotal: 10,
        copiesAvailable: 2,
        publishedYear: 2024,
        format: "audiobook"
    },
    {
        id: 106,
        title: "Refactoring Legacy Codebases",
        author: "Martin Fowler",
        category: "programming",
        price: 48.0,
        rating: 4.6,
        tags: ["clean code", "testing", "patterns"],
        copiesTotal: 3,
        copiesAvailable: 1,
        publishedYear: 2020,
        format: "physical"
    },
    {
        id: 107,
        title: "Docker Microservices Guide",
        author: "Nigel Poulton",
        category: "devops",
        price: 29.0,
        rating: 4.4,
        tags: ["docker", "containers", "ci/cd"],
        copiesTotal: 5,
        copiesAvailable: 0,
        publishedYear: 2023,
        format: "ebook"
    },
    {
        id: 108,
        title: "Practical System Design",
        author: "Alex Xu",
        category: "architecture",
        price: 55.0,
        rating: 4.9,
        tags: ["scalability", "databases", "patterns"],
        copiesTotal: 7,
        copiesAvailable: 5,
        publishedYear: 2022,
        format: "physical"
    },
    {
        id: 109,
        title: "Interaction Design Handbook",
        author: "Don Norman",
        category: "design",
        price: 34.0,
        rating: 4.6,
        tags: ["ux", "psychology", "usability"],
        copiesTotal: 4,
        copiesAvailable: 4,
        publishedYear: 2019,
        format: "ebook"
    },
    {
        id: 110,
        title: "Neural Networks from Scratch",
        author: "Harrison Kinsley",
        category: "ai",
        price: 49.5,
        rating: 4.7,
        tags: ["ai", "python", "math"],
        copiesTotal: 4,
        copiesAvailable: 1,
        publishedYear: 2021,
        format: "audiobook"
    }
];

export const members = [
    {
        id: 201,
        name: "Maya Hassan",
        email: "maya.hassan@dev.io",
        tier: "vip",
        balance: 145.0,
        joinedDate: "2025-03-10",
        active: true,
        interests: ["typescript", "architecture", "clean code"]
    },
    {
        id: 202,
        name: "Omar Kabbani",
        email: "omar.k@campus.edu",
        tier: "pro",
        balance: 42.5,
        joinedDate: "2025-06-15",
        active: true,
        interests: ["devops", "docker", "cloud"]
    },
    {
        id: 203,
        name: "Lina Cherif",
        email: "lina.c@designers.org",
        tier: "free",
        balance: 12.0,
        joinedDate: "2025-09-01",
        active: false,
        interests: ["ui", "ux", "css"]
    },
    {
        id: 204,
        name: "Yousef Ali",
        email: "yousef.ali@tech.net",
        tier: "vip",
        balance: 95.0,
        joinedDate: "2024-11-20",
        active: true,
        interests: ["ai", "python", "scalability"]
    },
    {
        id: 205,
        name: "Sara Nader",
        email: "sara.n@academy.edu",
        tier: "pro",
        balance: 30.0,
        joinedDate: "2025-01-18",
        active: true,
        interests: ["patterns", "typescript", "figma"]
    }
];

export const loans = [
    {
        id: 301,
        bookId: 101,
        memberId: 201,
        loanDate: "2026-09-01",
        dueDate: "2026-09-15",
        returnedDate: "2026-09-14",
        status: "returned",
        lateFee: 0
    },
    {
        id: 302,
        bookId: 103,
        memberId: 202,
        loanDate: "2026-09-10",
        dueDate: "2026-09-24",
        returnedDate: null,
        status: "overdue",
        lateFee: 15.0
    },
    {
        id: 303,
        bookId: 105,
        memberId: 204,
        loanDate: "2026-09-20",
        dueDate: "2026-10-04",
        returnedDate: null,
        status: "active",
        lateFee: 0
    },
    {
        id: 304,
        bookId: 102,
        memberId: 201,
        loanDate: "2026-09-25",
        dueDate: "2026-10-09",
        returnedDate: null,
        status: "active",
        lateFee: 0
    },
    {
        id: 305,
        bookId: 107,
        memberId: 205,
        loanDate: "2026-09-05",
        dueDate: "2026-09-19",
        returnedDate: null,
        status: "overdue",
        lateFee: 8.5
    },
    {
        id: 306,
        bookId: 104,
        memberId: 203,
        loanDate: "2026-08-15",
        dueDate: "2026-08-29",
        returnedDate: "2026-08-28",
        status: "returned",
        lateFee: 0
    }
];

export const reviews = [
    {
        id: 401,
        bookId: 102,
        memberId: 201,
        score: 5,
        comment: "The finest TypeScript guide available!",
        timestamp: "2026-09-18"
    },
    {
        id: 402,
        bookId: 101,
        memberId: 201,
        score: 5,
        comment: "Foundational architectural concepts explained with precision.",
        timestamp: "2026-09-15"
    },
    {
        id: 403,
        bookId: 103,
        memberId: 202,
        score: 4,
        comment: "Excellent production insights, requires solid background.",
        timestamp: "2026-09-22"
    },
    {
        id: 404,
        bookId: 105,
        memberId: 204,
        score: 5,
        comment: "Comprehensive coverage of modern AI transformers.",
        timestamp: "2026-09-28"
    },
    {
        id: 405,
        bookId: 104,
        memberId: 203,
        score: 4,
        comment: "Super practical bridge between UI designers and devs.",
        timestamp: "2026-08-30"
    }
];


// ============================================================
// PART 1: CATALOG INTELLIGENCE (Functions 1 - 6)
// ============================================================

// 1. Return all books in stock (copiesAvailable > 0)
export function getAvailableBooks(allBooks: Book[] = books as Book[]): Book[] {
    return allBooks.filter((e: Book) => e.copiesAvailable > 0);
}

// 2. Return all books belonging to the specified category
export function getBooksByCategory(category: Category, allBooks: Book[] = books as Book[]): Book[] {
    return allBooks.filter((e: Book) => e.category === category);
    
}

// 3. Return top N rated books (rating >= minRating), sorted descending
export function getTopRatedBooks(minRating: number, limit: number, allBooks: Book[] = books as Book[]): Book[] {
    return allBooks
        .filter((e: Book) => e.rating >= minRating)
        .sort((a: Book, b: Book) => b.rating - a.rating)
        .slice(0, limit);
}

// 4. Return all books containing the specified tag (case-insensitive)
export function getBooksByTag(tag: string, allBooks: Book[] = books as Book[]): Book[] {
    return allBooks.filter((e: Book) => e.tags.some((x: string) => x.toLowerCase() === tag.trim().toLowerCase()));
    
}

// 5. Compute total catalog monetary value and average price
export function calculateCatalogValue(allBooks: Book[] = books as Book[]): CatalogValueSummary {
    return {
        totalValue: Math.round(allBooks.reduce((a: number, b: Book) => a + b.copiesTotal * b.price, 0) * 100) / 100,
        averagePrice: allBooks.length === 0
            ? 0
            : Math.round((allBooks.reduce((a: number, b: Book) => a + b.price, 0) / allBooks.length) * 100) / 100
    };
    
}

// 6. Find a book by id (returns Book or undefined)
export function findBookById(id: number, allBooks: Book[] = books as Book[]): Book | undefined {
    return allBooks.find((e: Book) => e.id === id);
    
}


// ============================================================
// PART 2: MEMBER ANALYTICS (Functions 7 - 12)
// ============================================================

// 7. Return active members by tier
export function getActiveMembersByTier(tier: MemberTier, allMembers: Member[] = members as Member[]): Member[] {
    return allMembers.filter((e: Member) => e.active && e.tier === tier);
  
}


// 8. Return total balance of active VIP members
export function getVIPMembersTotalBalance(allMembers: Member[] = members as Member[]): number {
    return getActiveMembersByTier("vip", allMembers).reduce((a: number, b: Member) => a + b.balance, 0);
}

// 9. Find member by email (case-insensitive, trimmed)
export function findMemberByEmail(email: string, allMembers: Member[] = members as Member[]): Member | undefined {
    return allMembers.find((e: Member) => e.email.trim().toLowerCase() === email.trim().toLowerCase());
    
}

// 10. Return members with given interest
export function getMembersWithInterest(interest: string, allMembers: Member[] = members as Member[]): Member[] {
    return allMembers.filter((e: Member) => e.interests.some((x: string) => x.toLowerCase() === interest.trim().toLowerCase()));

}

// 11. Group members by balance: low (<25), mid (25..75), high (>=75)
export function categorizeMembersByBalance(allMembers: Member[] = members as Member[]): MemberBalanceGroups {
    return {
        low: allMembers.filter((e: Member) => e.balance < 25),
        mid: allMembers.filter((e: Member) => e.balance >= 25 && e.balance < 75),
        high: allMembers.filter((e: Member) => e.balance >= 75)
    };
   
}


// 12. Calculate member tenure in days relative to date
export function getMemberTenureDays(memberId: number, relativeToDate: string, allMembers: Member[] = members as Member[]): number {
    const member: Member | undefined = allMembers.find((e: Member) => e.id === memberId);
    if (!member) return 0;

    const days: number = Math.floor((new Date(relativeToDate).getTime() - new Date(member.joinedDate).getTime()) / (1000 * 60 * 60 * 24));
    return isNaN(days) || days < 0 ? 0 : days;
    
}


// ============================================================
// PART 3: LOAN TRACKING (Functions 13 - 18)
// ============================================================

// 13. Return all active loans (status === "active")
export function getActiveLoans(allLoans: Loan[] = loans as Loan[]): Loan[] {
    return allLoans.filter((e: Loan) => e.status === "active");
    
}

// 14. Return overdue loans relative to currentDate
export function getOverdueLoans(currentDate: string, allLoans: Loan[] = loans as Loan[]): Loan[] {
    return allLoans.filter((e: Loan) =>
        e.status === "overdue" ||
        (e.status !== "returned" && e.returnedDate === null && e.dueDate < currentDate)
    );
    
}

// 15. Return total late fees on overdue loans
export function getTotalOutstandingLateFees(allLoans: Loan[] = loans as Loan[]): number {
    return allLoans
        .filter((e: Loan) => e.status === "overdue")
        .reduce((a: number, b: Loan) => a + b.lateFee, 0);
   
}

// 16. Return full loan history for memberId
export function getLoansByMember(memberId: number, allLoans: Loan[] = loans as Loan[]): Loan[] {
    return allLoans.filter((e: Loan) => e.memberId === memberId);
  
}

// 17. Return most borrowed book IDs with count (sliced to limit)
export function getMostBorrowedBookIds(limit: number, allLoans: Loan[] = loans as Loan[]): BookBorrowStat[] {
    return [...new Set(allLoans.map((e: Loan) => e.bookId))]
        .map((id: number): BookBorrowStat => ({ bookId: id, borrowCount: allLoans.filter((e: Loan) => e.bookId === id).length }))
        .sort((a: BookBorrowStat, b: BookBorrowStat) => b.borrowCount - a.borrowCount || a.bookId - b.bookId)
        .slice(0, limit);

}

// 18. Calculate total unpaid late fees for memberId
export function calculateMemberFine(memberId: number, allLoans: Loan[] = loans as Loan[]): number {
    return getLoansByMember(memberId, allLoans)
        .filter((e: Loan) => e.status !== "returned")
        .reduce((a: number, b: Loan) => a + b.lateFee, 0);

}


// ============================================================
// PART 4: RELATIONAL JOINS (Functions 19 - 24)
// ============================================================

// 19. Join loan with its full Book and Member objects
export function enrichLoanDetails(loanId: number, allLoans: Loan[] = loans as Loan[], allBooks: Book[] = books as Book[], allMembers: Member[] = members as Member[]): EnrichedLoan | undefined {
    const loan: Loan | undefined = allLoans.find((e: Loan) => e.id === loanId);
    if (!loan) return undefined;

    const book: Book | undefined = findBookById(loan.bookId, allBooks);
    const member: Member | undefined = allMembers.find((e: Member) => e.id === loan.memberId);
    if (!book || !member) return undefined;

    return { ...loan, book, member };
   
}

// 20. Summary of active borrows for member, flagging overdue vs currentDate
export function getMemberActiveBorrowsSummary(memberId: number, currentDate: string, allLoans: Loan[] = loans as Loan[], allBooks: Book[] = books as Book[]): MemberBorrowSummary[] {
    return getLoansByMember(memberId, allLoans)
        .filter((e: Loan) => e.status !== "returned")
        .reduce((a: MemberBorrowSummary[], b: Loan) => {
            const book: Book | undefined = findBookById(b.bookId, allBooks);
            if (book) {
                a.push({
                    loanId: b.id,
                    book,
                    dueDate: b.dueDate,
                    isOverdue: getOverdueLoans(currentDate, allLoans).some((x: Loan) => x.id === b.id)
                });
            }
            return a;
        }, []);
}

// 21. Aggregate review statistics for a book (count, average, reviews)
export function getBookReviewsSummary(bookId: number, allReviews: Review[] = reviews as Review[]): BookReviewsSummary {
    const bookReviews: Review[] = allReviews.filter((e: Review) => e.bookId === bookId);
    return {
        bookId,
        reviewCount: bookReviews.length,
        averageScore: bookReviews.length === 0
            ? 0
            : Math.round((bookReviews.reduce((a: number, b: Review) => a + b.score, 0) / bookReviews.length) * 10) / 10,
        reviews: bookReviews
    };
   
}

// 22. Recommend unborrowed books matching member interests, sorted by rating
export function getPersonalizedRecommendations(memberId: number, allMembers: Member[] = members as Member[], allBooks: Book[] = books as Book[], allLoans: Loan[] = loans as Loan[]): Book[] {
    const member: Member | undefined = allMembers.find((e: Member) => e.id === memberId);
    if (!member) return [];

    const interests: string[] = member.interests.map((e: string) => e.toLowerCase());
    return allBooks
        .filter((e: Book) => !getLoansByMember(memberId, allLoans).some((x: Loan) => x.bookId === e.id))
        .filter((e: Book) => interests.includes(e.category.toLowerCase()) || e.tags.some((x: string) => interests.includes(x.toLowerCase())))
        .sort((a: Book, b: Book) => b.rating - a.rating);
}

// 23. Generate catalog inventory report
export function generateInventoryReport(allBooks: Book[] = books as Book[]): InventoryReport {
    return {
        totalTitles: allBooks.length,
        totalStockValue: Math.round(allBooks.reduce((a: number, b: Book) => a + b.copiesAvailable * b.price, 0) * 100) / 100,
        outOfStockCount: allBooks.filter((e: Book) => e.copiesAvailable === 0).length,
        lowStockBooks: allBooks.filter((e: Book) => e.copiesAvailable > 0 && e.copiesAvailable <= 2),
        mostPopularCategory: allBooks.length === 0
            ? null
            : [...new Set(allBooks.map((e: Book) => e.category))].reduce((a: Category, b: Category) =>
                getBooksByCategory(b, allBooks).length > getBooksByCategory(a, allBooks).length ? b : a)
    };
}


export function paginateBooks(allBooks: Book[], page: number, pageSize: number): PaginatedBooks {
    const size: number = pageSize > 0 ? Math.floor(pageSize) : 1;
    const current: number = page < 1 ? 1 : page;
    return {
        items: allBooks.slice((current - 1) * size, current * size),
        page: current,
        pageSize: size,
        totalItems: allBooks.length,
        totalPages: Math.ceil(allBooks.length / size)
    };

}


// ============================================================
// PART 5: ADVANCED LOGIC & SEARCH (Functions 25 - 30)
// ============================================================

// 25. Multi-criteria sort: rating desc -> price asc -> title asc
export function sortBooksMultiCriteria(allBooks: Book[] = books as Book[]): Book[] {
    return [...allBooks].sort((a: Book, b: Book) =>
        b.rating - a.rating ||
        a.price - b.price ||
        a.title.localeCompare(b.title)
    );

}

// 26. Count book titles grouped by format and category
export function groupBooksByFormatAndCategory(allBooks: Book[] = books as Book[]): FormatCategoryGroup[] {
    return allBooks.reduce((a: FormatCategoryGroup[], b: Book) => {
        const group: FormatCategoryGroup | undefined = a.find((e: FormatCategoryGroup) => e.format === b.format && e.category === b.category);
        if (group) {
            group.count += 1;
        } else {
            a.push({ format: b.format, category: b.category, count: 1 });
        }
        return a;
    }, []);

}


// 27. Find top reviewers ranked by review count, with avg rating given
export function findTopReviewers(limit: number, allReviews: Review[] = reviews as Review[], allMembers: Member[] = members as Member[]): TopReviewer[] {
    return [...new Set(allReviews.map((e: Review) => e.memberId))]
        .map((id: number): TopReviewer => {
            const memberReviews: Review[] = allReviews.filter((e: Review) => e.memberId === id);
            const member: Member | undefined = allMembers.find((e: Member) => e.id === id);
            return {
                memberId: id,
                name: member ? member.name : "Unknown",
                reviewCount: memberReviews.length,
                averageRating: Math.round((memberReviews.reduce((a: number, b: Review) => a + b.score, 0) / memberReviews.length) * 100) / 100
            };
        })
        .sort((a: TopReviewer, b: TopReviewer) => b.reviewCount - a.reviewCount || b.averageRating - a.averageRating)
        .slice(0, limit);
}

// 28. Validate and process book checkout
export function processBookCheckout(bookId: number, memberId: number, daysToReturn: number, todayDate: string, allBooks: Book[] = books as Book[], allMembers: Member[] = members as Member[]): CheckoutResult {
    if (!Number.isInteger(daysToReturn) || daysToReturn < 1 || daysToReturn > 30) {
        return { success: false, message: "daysToReturn must be a whole number between 1 and 30." };
    }
    if (isNaN(new Date(todayDate).getTime())) {
        return { success: false, message: "Invalid date." };
    }

    const book: Book | undefined = findBookById(bookId, allBooks);
    if (!book) return { success: false, message: `Book ${bookId} not found.` };

    const member: Member | undefined = allMembers.find((e: Member) => e.id === memberId);
    if (!member) return { success: false, message: `Member ${memberId} not found.` };
    if (!member.active) return { success: false, message: `${member.name} is not an active member.` };

    if (book.copiesAvailable <= 0) return { success: false, message: `"${book.title}" has no copies available.` };

    const due: Date = new Date(todayDate);
    due.setUTCDate(due.getUTCDate() + daysToReturn);

    return {
        success: true,
        message: `"${book.title}" checked out to ${member.name}.`,
        newLoan: {
            id: Number(`${bookId}${memberId}`),
            bookId,
            memberId,
            loanDate: todayDate,
            dueDate: due.toISOString().slice(0, 10),
            returnedDate: null,
            status: "active",
            lateFee: 0
        }
    };
}


// 29. Calculate statistics for every category
export function calculateCategoryStats(allBooks: Book[] = books as Book[], allLoans: Loan[] = loans as Loan[]): CategoryStats[] {
    return [...new Set(allBooks.map((e: Book) => e.category))].map((category: Category): CategoryStats => {
        const categoryBooks: Book[] = getBooksByCategory(category, allBooks);
        const categoryLoans: Loan[] = allLoans.filter((e: Loan) => categoryBooks.some((x: Book) => x.id === e.bookId));
        return {
            category,
            totalTitles: categoryBooks.length,
            totalCopies: categoryBooks.reduce((a: number, b: Book) => a + b.copiesTotal, 0),
            inventoryValue: Math.round(categoryBooks.reduce((a: number, b: Book) => a + b.copiesTotal * b.price, 0) * 100) / 100,
            totalBorrows: categoryLoans.length,
            lateFeesTotal: Math.round(categoryLoans.reduce((a: number, b: Loan) => a + b.lateFee, 0) * 100) / 100,
            averageRating: Math.round((categoryBooks.reduce((a: number, b: Book) => a + b.rating, 0) / categoryBooks.length) * 100) / 100
        };
    });
}


// 30. Weighted relevance search (title +3, author +2, tags +1)
export function searchCatalogWeighted(query: string, allBooks: Book[] = books as Book[]): SearchResult[] {
    const words: string[] = query.toLowerCase().split(" ").filter((e: string) => e.trim().length > 0);

    return allBooks
        .map((e: Book): SearchResult => ({
            book: e,
            relevanceScore: words.reduce((a: number, b: string) =>
                a +
                (e.title.toLowerCase().includes(b) ? 3 : 0) +
                (e.author.toLowerCase().includes(b) ? 2 : 0) +
                (e.tags.some((x: string) => x.toLowerCase().includes(b)) ? 1 : 0), 0)
        }))
        .filter((e: SearchResult) => e.relevanceScore > 0)
        .sort((a: SearchResult, b: SearchResult) => b.relevanceScore - a.relevanceScore || a.book.title.localeCompare(b.book.title));
}
