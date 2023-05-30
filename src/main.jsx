import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './styles/index.css'
import Footer from './components/footer.jsx'
import UserCard from './components/UserCard.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <UserCard />
    <Footer />
  </React.StrictMode>,
)