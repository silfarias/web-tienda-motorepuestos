import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { type FormEvent, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthCard } from '../components/auth/AuthCard'
import { AppIcon } from '../components/ui/AppIcon'
import { Button } from '../components/ui/Button'
import { PATHS } from '../config/paths'
import { useAuth } from '../contexts/AuthContext'

export function LoginPage() {
  const { login, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (isAuthenticated) navigate(PATHS.home, { replace: true })
  }, [isAuthenticated, navigate])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(email, password)
      navigate(PATHS.catalog)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se pudo iniciar sesión.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthCard
      title="Iniciar sesión"
      subtitle="Accedé a tu cuenta para ver tu carrito y tus pedidos."
      footer={
        <p>
          ¿No tenés cuenta? <Link to={PATHS.register}>Registrate</Link>
        </p>
      }
    >
      <form className="auth-form" onSubmit={handleSubmit}>
        {error && <p className="auth-form__error">{error}</p>}
        <label className="auth-field">
          <span>Email</span>
          <span className="auth-field__input">
            <AppIcon icon={EmailOutlinedIcon} size="sm" />
            <input
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
            />
          </span>
        </label>
        <label className="auth-field">
          <span>Contraseña</span>
          <span className="auth-field__input">
            <AppIcon icon={LockOutlinedIcon} size="sm" />
            <input
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </span>
        </label>
        <Button type="submit" variant="primary" block disabled={loading}>
          {loading ? 'Ingresando...' : 'Ingresar'}
        </Button>
      </form>
    </AuthCard>
  )
}
