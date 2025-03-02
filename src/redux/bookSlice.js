import { createSlice, createSelector } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "books",
  initialState: {
    items: [
      // 🔹 Fiction Books
      { id: "1", title: "To Kill a Mockingbird", author: "Harper Lee", category: "fiction", description: "A gripping story of race and injustice in the American South.", rating: 5 },
      { id: "2", title: "Pride and Prejudice", author: "Jane Austen", category: "fiction", description: "A timeless romance novel about love and social standing.", rating: 4.5 },
      { id: "3", title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "fiction", description: "A classic novel set in the Roaring Twenties.", rating: 4.7 },
      { id: "4", title: "1984", author: "George Orwell", category: "fiction", description: "A dystopian novel about totalitarianism and surveillance.", rating: 4.8 },
      { id: "5", title: "The Catcher in the Rye", author: "J.D. Salinger", category: "fiction", description: "A novel about teenage rebellion and identity.", rating: 4.3 },
      { id: "6", title: "The Alchemist", author: "Paulo Coelho", category: "fiction", description: "A philosophical book about following your dreams.", rating: 4.6 },
      { id: "7", title: "Little Women", author: "Louisa May Alcott", category: "fiction", description: "A story of four sisters growing up in post-Civil War America.", rating: 4.7 },

      // 🔹 Non-Fiction Books
      { id: "8", title: "Sapiens", author: "Yuval Noah Harari", category: "non-fiction", description: "A brief history of humankind, exploring our evolution and culture.", rating: 4.8 },
      { id: "9", title: "Atomic Habits", author: "James Clear", category: "non-fiction", description: "A practical guide on how small habits lead to big success.", rating: 4.9 },
      { id: "10", title: "The Power of Now", author: "Eckhart Tolle", category: "non-fiction", description: "A spiritual book on the importance of living in the present moment.", rating: 4.5 },
      { id: "11", title: "Educated", author: "Tara Westover", category: "non-fiction", description: "A memoir of a woman who escapes an abusive survivalist family.", rating: 4.8 },
      { id: "12", title: "Becoming", author: "Michelle Obama", category: "non-fiction", description: "A memoir by the former First Lady of the United States.", rating: 4.9 },
      { id: "13", title: "The 5 AM Club", author: "Robin Sharma", category: "non-fiction", description: "A self-improvement book on morning routines and success.", rating: 4.6 },
      { id: "14", title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", category: "non-fiction", description: "A counterintuitive approach to living a good life.", rating: 4.3 },

      // 🔹 Sci-Fi Books
      { id: "15", title: "Dune", author: "Frank Herbert", category: "sci-fi", description: "A science fiction masterpiece set in a desert world.", rating: 4.9 },
      { id: "16", title: "The Martian", author: "Andy Weir", category: "sci-fi", description: "A gripping survival story of an astronaut stranded on Mars.", rating: 4.8 },
      { id: "17", title: "Neuromancer", author: "William Gibson", category: "sci-fi", description: "A cyberpunk classic that explores AI, hacking, and virtual reality.", rating: 4.6 },
      { id: "18", title: "Foundation", author: "Isaac Asimov", category: "sci-fi", description: "A series about the rise and fall of a futuristic empire.", rating: 4.7 },
      { id: "19", title: "Snow Crash", author: "Neal Stephenson", category: "sci-fi", description: "A futuristic story about hackers and virtual worlds.", rating: 4.5 },
      { id: "20", title: "Ender's Game", author: "Orson Scott Card", category: "sci-fi", description: "A military science fiction novel about child soldiers in space.", rating: 4.7 },
      { id: "21", title: "Hyperion", author: "Dan Simmons", category: "sci-fi", description: "A multi-layered story with time travel and interstellar wars.", rating: 4.8 },
    ],
  },
  reducers: {
    addBook: (state, action) => {
      console.log("New book added:", action.payload);
      state.items.push(action.payload);
    },
    removeBook: (state, action) => {
      console.log("Removing book with ID:", action.payload);
      state.items = state.items.filter(book => book.id !== action.payload);
    },
  },
});

// ✅ Memoized selector to prevent unnecessary re-renders
export const selectBooksByCategory = createSelector(
  [(state) => state.books.items, (_, category) => category],
  (items, category) => items.filter((book) => book.category === category)
);

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
