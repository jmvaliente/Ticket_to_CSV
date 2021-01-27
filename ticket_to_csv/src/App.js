import React, { useEffect, useState } from 'react'
import axiosConfig from '../src/services/axios'
import Ticket from '../src/components/Ticket'
import extract from '../src/services/extract'
import './App.css';

export default function App() {

  const [file, setFile] = useState()
  const [data, setData] = useState([])

  const sendTicket = (e) => {
    e.preventDefault()

    if (file.name.length > 0) {
      axiosConfig.sendTicket(file)
        .then(result => setData([...data, result]))
    }
  }

  useEffect(() => {
  }, [data])

  function onChange(e) {
    setFile(e.target.files[0])
  }

  return (
    <div className="App">
      <section className="App-body">
        <p>
          Tickets
        </p>
        <form onSubmit={sendTicket}>
          <input type="file" name="image" onChange={onChange} />
          <button type="submit">Upload</button>
        </form>
        <button onClick={() => extract(data)}>Extraer Datos</button>
        <div>
          {data.map((ticket, index) => <Ticket ticket={ticket} index={index} key={index} />)}
        </div>
      </section>
    </div >
  );
}
