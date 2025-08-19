import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginStart, loginSuccess, loginFailure } from './userSlice'

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    tz: '',
    name: '',
    password: '',
    telephone: '',
    email: ''
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(loginStart())

    try {
      const response = await axios.post('http://localhost:4000/user', formData)
      dispatch(loginSuccess(response.data))
      alert('המשתמש נרשם בהצלחה!')
      navigate('/')
    } catch (err) {
      if (err.response && err.response.status === 400) {
        alert('אימייל או תעודת זהות כבר קיימים במערכת')
        dispatch(loginFailure('אימייל או תעודת זהות כבר קיימים במערכת'))
      } else {
        alert('אירעה שגיאה בהרשמה')
        dispatch(loginFailure('אירעה שגיאה בהרשמה'))
      }
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundImage: "url('/picLogin.png')", // ודא שהתמונה קיימת בתקיה public
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '80px',
          borderRadius: '12px',
          boxShadow: '0 0 15px rgba(0,0,0,0.2)',
          width: '100%',
          maxWidth: '800px',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          direction: 'rtl',
          color: 'white',
        }}
      >
        <h2 style={{ textAlign: 'center', color: 'white' }}>הרשמה</h2>

        <input name="tz" placeholder="תעודת זהות" value={formData.tz} onChange={handleChange} required style={inputStyle} />
        <input name="name" placeholder="שם" value={formData.name} onChange={handleChange} required style={inputStyle} />
        <input name="password" placeholder="סיסמה" value={formData.password} onChange={handleChange} type="password" required style={inputStyle} />
        <input name="telephone" placeholder="טלפון" value={formData.telephone} onChange={handleChange} required style={inputStyle} />
        <input name="email" placeholder="אימייל" value={formData.email} onChange={handleChange} required style={inputStyle} />

        <button type="submit" style={buttonStyle}>הירשם</button>
      </form>
    </div>
  )
}

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  outline: 'none'
}

const buttonStyle = {
  padding: '10px',
  fontSize: '16px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
}
