import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useSettings = create(
  persist(
    (set, get) => ({
      language: 'en_US',
      seed: Math.floor(Math.random() * 10000),
      likesPerBook: 5.0,
      reviewsPerBook: 2.0,
      expandedRows: [], // Initialize as empty array

      setLanguage: (language) => set({ language }),
      setSeed: (value) => {
        const seedValue = parseInt(value) || 0;
        set({ seed: seedValue });
      },
      setLikesPerBook: (value) => set({ likesPerBook: parseFloat(value) || 0 }),
      setReviewsPerBook: (value) =>
        set({ reviewsPerBook: parseFloat(value) || 0 }),
      generateRandomSeed: () => {
        set({ seed: Math.floor(Math.random() * 10000) });
      },

      toggleExpandedRow: (bookId) =>
        set((state) => {
          const expanded = Array.isArray(state.expandedRows)
            ? state.expandedRows
            : [];
          const index = expanded.indexOf(bookId);

          if (index !== -1) {
            return {
              expandedRows: expanded.filter((id) => id !== bookId),
            };
          }
          return {
            expandedRows: [...expanded, bookId],
          };
        }),

      isRowExpanded: (bookId) => {
        const state = get();
        const expanded = Array.isArray(state.expandedRows)
          ? state.expandedRows
          : [];
        return expanded.includes(bookId);
      },
    }),
    {
      name: 'book-generator-settings',
    }
  )
);
