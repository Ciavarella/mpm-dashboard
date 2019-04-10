import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Auth/AuthContext'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import '../../Styles/Settings.css'

const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080'
    : 'https://mpm-node-backend.herokuapp.com'

const Settings = () => {
  const { user } = useContext(AuthContext)
  const [keyValue, setKeyValue] = useState()
  const [hardModeValue, setHardMode] = useState(false)

  const setPressValue = e => {
    let data = e.target.value
    setKeyValue(data)
  }

  const setHardModeValue = e => {
    const value = JSON.parse(e.target.value)
    let data = value === false ? true : false
    setHardMode(data)
  }

  const saveSettings = async () => {
    const values = {
      keypress: keyValue,
      hardcore: hardModeValue
    }
    fetch(`${baseUrl}/dashboard/settings/${user.id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    })
      .then(res => res.json())
      .then(data => {
        const { keypress, hardcore } = data[1][0].settings
        setKeyValue(keypress)
        setHardMode(hardcore)
      })
  }

  return (
    <div className="settingsContainer">
      <Header username={user.username} />
      <div className="settingsCard">
        <div className="form">
          <div className="keyPress">
            <p>Seconds / Keypress</p>
            <input
              type="number"
              name="keypress"
              className="keypress"
              placeholder="Set Value"
              onChange={setPressValue}
            />
          </div>
          <div className="hardMode">
            <p>Hard mode</p>
            <input
              type="checkbox"
              name="hardcore"
              value={hardModeValue}
              onClick={setHardModeValue}
            />
          </div>
        </div>
        <button onClick={saveSettings} className="settingsBtn">
          Save
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default Settings
