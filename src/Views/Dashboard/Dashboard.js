import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Auth/AuthContext'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import api from '../../Utils/api'
import '../../Styles/Dashboard.css'
import Chart from '../../Components/Chart'
import TotalChart from '../../Components/TotalChart'

/**
 * View when user is signed in.
 */
const Dashboard = () => {
  const { user } = useContext(AuthContext)
  const [sessions, setData] = useState([])
  const [totalData, setTotalData] = useState([])

  /**
   * Fetch data from the signed in user
   * From each session save the data to create a chart.
   */
  useEffect(() => {
    const fetchData = async () => {
      const res = await api(`/extension/${user.id}`)
      const sessions = await res.json()
      sessions.map(session => {
        let convertedTotalTime = convertTime(session.totalTime)
        let convertedMusicTime = convertTime(session.musicTime)
        let chartData = [
          {
            name: 'Played',
            value: session.musicTime
          },
          {
            name: 'Not Played',
            value: session.totalTime - session.musicTime
          }
        ]
        session.chartData = chartData
        session.totalTime = convertedTotalTime
        session.musicTime = convertedMusicTime
        return null
      })
      setData(sessions)
    }

    //
    const fetchTotalData = async () => {
      let res = await api(`/extension/total/${user.id}`)
      let data = await res.json()

      const totalChartData = [
        {
          name: 'Played',
          value: +data.musicTimeSum
        },
        {
          name: 'Not Played',
          value: data.totalTimeSum - data.musicTimeSum
        }
      ]

      setTotalData(totalChartData)
      return null
    }

    fetchData()
    fetchTotalData()
  }, [])

  /**
   * Converts the time to hours, minutes and seconds.
   * The time that is stored in the database is just seconds.
   */
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
        <TotalChart data={totalData} />
        {sessions.map(session => (
          <div key={session.id} className="sessionCard">
            <p>{new Date(session.createdAt).toDateString()}</p>
            <Chart data={session.chartData} />
            <div className="sessionTime">
              <p>Total time:</p>
              <p>{session.totalTime.hours} hours</p>
              <p>{session.totalTime.minutes} minutes</p>
              <p>{session.totalTime.seconds} seconds</p>
            </div>
            <div className="sessionTime">
              <p>Time music played:</p>
              <p>{session.musicTime.hours} hours</p>
              <p>{session.musicTime.minutes} minutes</p>
              <p>{session.musicTime.seconds} seconds</p>
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
