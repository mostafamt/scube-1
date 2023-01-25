import create from "zustand"
import { devtools, persist } from "zustand/middleware"

const store = (set) => ({
  pageTitle: "",
  pageLang: "en",
  selectedIndex: 0,
  isLoggedIn: false,
  error: "",
  users: [],
  groups: [],
  courses: [],
  tenants: [],
  setPageTitle: (title) => {
    set((state) => ({
      pageTitle: title,
    }))
  },
  setPageLang: (lang) => {
    set((state) => ({
      pageLang: lang,
    }))
  },
  setSelectedIndex: (index) => {
    set((state) => ({
      selectedIndex: index,
    }))
  },
  login: () => {
    set((state) => ({
      isLoggedIn: true,
      error: "",
    }))
  },
  logout: () => {
    set((state) => ({
      isLoggedIn: false,
      users: [],
      groups: [],
      tenants: [],
      error: "",
    }))
  },
  setError: (err) => {
    set((state) => ({
      error: err,
    }))
  },
  addGroup: (group) => {
    set((state) => ({
      groups: [group, ...state.groups],
    }))
  },
  removeGroup: (name) => {
    set((state) => ({
      groups: state.groups.filter((g) => g.GroupName !== name),
    }))
  },
  setGroups: (groups) => {
    set((state) => ({ groups: groups }))
  },
})

const useStore = create(devtools(persist(store, { name: "store" })))
export default useStore
