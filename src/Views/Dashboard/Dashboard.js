import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Auth/AuthContext'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import api from '../../Utils/api'
import '../../Styles/Dashboard.css'

const Dashboard = () => {
  const { user } = useContext(AuthContext)
  const [sessions, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await api(`/extension/${user.id}`)
      const sessions = await res.json()
      sessions.map(session => {
        let convertedTime = convertTime(session.totalTime)
        session.totalTime = convertedTime
      })
      setData(sessions)
    }
    fetchData()
  }, [])

  const convertTime = time => {
    let hours = Math.floor(time / 3600)
    let minutes = Math.floor((time % 3600) / 60)
    let seconds = Math.floor((time % 3600) % 60)
    return {
      hours,
      minutes,
      seconds
    }
  }

  return (
    <div className="signedInContainer">
      <Header username={user.username} />
      <div className="sessionContainer">
        {sessions.map(session => (
          <div key={session.id} className="sessionCard">
            <p>{new Date(session.createdAt).toDateString()}</p>
            <div className="sessionTime">
              <p>{session.totalTime.hours} hours</p>
              <p>{session.totalTime.minutes} minutes</p>
              <p>{session.totalTime.seconds} seconds</p>
            </div>
            <p>Paused times: {session.pausedTimes}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard
