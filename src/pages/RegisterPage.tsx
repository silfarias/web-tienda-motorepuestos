import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import { type FormEvent, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthCard } from '../components/auth/AuthCard'
import { AppIcon } from '../components/ui/AppIcon'
import { Button } from '../components/ui/Button'
import { PATHS } from '../config/paths'
import { useAuth } from '../contexts/AuthContext'

export function RegisterPage() {
  const { register, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const [name, setName] = useState('')
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
      await register(name, email, password)
      navigate(PATHS.catalog)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se pudo crear la cuenta.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthCard
      title="Crear cuenta"
      subtitle="Registrate para guardar tu carrito y hacer pedidos."
      footer={
        <p>
          ¿Ya tenés cuenta? <Link to={PATHS.login}>Iniciar sesión</Link>
        </p>
      }
    >
      <form className="auth-form" onSubmit={handleSubmit}>
        {error && <p className="auth-form__error">{error}</p>}
        <label className="auth-field">
          <span>Nombre</span>
          <span className="auth-field__input">
            <AppIcon icon={PersonOutlineOutlinedIcon} size="sm" />
            <input
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tu nombre"
            />
          </span>
        </label>
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
              autoComplete="new-password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mínimo 6 caracteres"
            />
          </span>
        </label>
        <Button type="submit" variant="primary" block disabled={loading}>
          {loading ? 'Creando cuenta...' : 'Registrarme'}
        </Button>
      </form>
    </AuthCard>
  )
}
