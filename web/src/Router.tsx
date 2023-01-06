import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { hostServer } from './App'
import { Event } from './pages/Event'
import { Index } from './pages/Index'
import { Subscribe } from './pages/Subscribe'

export function Router() {
  const navigate = useNavigate()
  const [authVerification, setAuthVerification] = useState(false)
  
  useEffect(() => {
    ;(async () => {
      const session = localStorage.getItem('session')
      if (session) {
        const res = await fetch(`${hostServer}/authSession`, {
          method: 'POST',
          headers: {
            Authorization: session,
          },
        }).then((res) => res.json())
        if (res.status === true) {
          navigate('/event')
        } else {
          navigate('/')
        }
      } else {
        navigate('/')
      }
    })()
    setAuthVerification(true)
  }, [authVerification])

  return (
    <Routes>
      {authVerification && (
        <>
          <Route path="/" element={<Index />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/event" element={<Event />} />
          <Route path="/event/lesson/:slug" element={<Event />} />
        </>
      )}
    </Routes>
  )
}
