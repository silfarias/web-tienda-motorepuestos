import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { PublicUser, User } from '../types/auth'
import { readStorage, removeStorage, writeStorage } from '../lib/storage'

const USERS_KEY = 'mia-users'
const SESSION_KEY = 'mia-session'

type AuthContextValue = {
  user: PublicUser | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

function toPublicUser(user: User): PublicUser {
  const { password: _, ...publicUser } = user
  return publicUser
}

function getUsers(): User[] {
  return readStorage<User[]>(USERS_KEY, [])
}

function saveUsers(users: User[]) {
  writeStorage(USERS_KEY, users)
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<PublicUser | null>(null)

  useEffect(() => {
    const session = readStorage<PublicUser | null>(SESSION_KEY, null)
    if (session) setUser(session)
  }, [])

  const login = useCallback(async (email: string, password: string) => {
    const normalized = email.trim().toLowerCase()
    const found = getUsers().find(
      (u) => u.email === normalized && u.password === password,
    )
    if (!found) {
      throw new Error('Email o contraseña incorrectos.')
    }
    const publicUser = toPublicUser(found)
    writeStorage(SESSION_KEY, publicUser)
    setUser(publicUser)
  }, [])

  const register = useCallback(
    async (name: string, email: string, password: string) => {
      const normalized = email.trim().toLowerCase()
      const users = getUsers()
      if (users.some((u) => u.email === normalized)) {
        throw new Error('Ya existe una cuenta con ese email.')
      }
      if (password.length < 6) {
        throw new Error('La contraseña debe tener al menos 6 caracteres.')
      }
      const newUser: User = {
        id: crypto.randomUUID(),
        name: name.trim(),
        email: normalized,
        password,
        createdAt: new Date().toISOString(),
      }
      saveUsers([...users, newUser])
      const publicUser = toPublicUser(newUser)
      writeStorage(SESSION_KEY, publicUser)
      setUser(publicUser)
    },
    [],
  )

  const logout = useCallback(() => {
    removeStorage(SESSION_KEY)
    setUser(null)
  }, [])

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      login,
      register,
      logout,
    }),
    [user, login, register, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth debe usarse dentro de AuthProvider')
  return ctx
}
