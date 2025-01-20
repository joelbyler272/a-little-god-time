import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useStore = create(
  persist(
    (set, get) => ({
      // User preferences
      theme: 'light',
      fontSize: 'medium',
      setTheme: (theme) => set({ theme }),
      setFontSize: (fontSize) => set({ fontSize }),

      // Devotional reading state
      readDevotionals: [],
      savedDevotionals: [],
      markAsRead: (devotionalId) => 
        set((state) => ({
          readDevotionals: [...new Set([...state.readDevotionals, devotionalId])]
        })),
      toggleSaved: (devotionalId) =>
        set((state) => {
          const saved = state.savedDevotionals
          const isCurrentlySaved = saved.includes(devotionalId)
          return {
            savedDevotionals: isCurrentlySaved
              ? saved.filter(id => id !== devotionalId)
              : [...saved, devotionalId]
          }
        }),
      isSaved: (devotionalId) => get().savedDevotionals.includes(devotionalId),
      isRead: (devotionalId) => get().readDevotionals.includes(devotionalId),

      // Reading progress
      readingStreak: 0,
      lastReadDate: null,
      updateReadingStreak: () => {
        const today = new Date().toISOString().split('T')[0]
        const lastRead = get().lastReadDate
        
        if (lastRead === today) return

        const yesterday = new Date(Date.now() - 86400000)
          .toISOString()
          .split('T')[0]

        set((state) => ({
          readingStreak: lastRead === yesterday ? state.readingStreak + 1 : 1,
          lastReadDate: today
        }))
      },

      // Search and filter state
      searchQuery: '',
      selectedTheme: '',
      setSearchQuery: (query) => set({ searchQuery: query }),
      setSelectedTheme: (theme) => set({ selectedTheme: theme }),

      // UI State
      sidebarOpen: false,
      notifications: [],
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      addNotification: (notification) =>
        set((state) => ({
          notifications: [...state.notifications, { id: Date.now(), ...notification }]
        })),
      removeNotification: (id) =>
        set((state) => ({
          notifications: state.notifications.filter((n) => n.id !== id)
        })),

      // Clear all state
      clearAll: () => {
        set({
          readDevotionals: [],
          savedDevotionals: [],
          readingStreak: 0,
          lastReadDate: null,
          searchQuery: '',
          selectedTheme: '',
          notifications: []
        })
      }
    }),
    {
      name: 'a-little-god-time-storage',
      partialize: (state) => ({
        theme: state.theme,
        fontSize: state.fontSize,
        readDevotionals: state.readDevotionals,
        savedDevotionals: state.savedDevotionals,
        readingStreak: state.readingStreak,
        lastReadDate: state.lastReadDate
      })
    }
  )
)

export default useStore