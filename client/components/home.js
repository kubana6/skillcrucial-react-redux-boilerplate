import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Head from './head'
// import wave from '../assets/images/wave.jpg'

const Home = () => {
  const [counter, setCounterNew] = useState(0)

  return (
    <div>
      <Head title="Hello" />
      <img alt="wave" src="images/wave.jpg" />
      <button type="button" onClick={() => setCounterNew(counter + 1)}>
        updateCounter
      </button>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 hover:text-red-500 text-white font-bold rounded-lg border shadow-lg p-10">
          Hello World Dashboard {counter}
          <Link to="/">Go to Dummy</Link>
          <div>
            <a href="/">Go</a>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
