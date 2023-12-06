import React, { useState } from 'react'
import News from './components/News'
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

const App = (props) => {
  const [progress, setProgress] = useState(0);

  const showProgress = (progress) => {
    setProgress(progress)
  }
  return (

    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          color='#0B5ED7'
          progress={progress}
          height={4.5}
          waitingTime={500}
        />
        <Routes>
          <Route exact path='/' element={<News key='general' showProgress={showProgress} category='general' />} />
          <Route exact path='/business' element={<News key='business' showProgress={showProgress} category='business' />} />
          <Route exact path='/entertainment' element={<News key='entertainment' showProgress={showProgress} category='entertainment' />} />
          <Route exact path='/health' element={<News key='health' showProgress={showProgress} category='health' />} />
          <Route exact path='/science' element={<News key='science' showProgress={showProgress} category='science' />} />
          <Route exact path='/sports' element={<News key='sports' showProgress={showProgress} category='sports' />} />
          <Route exact path='/technology' element={<News key='technology' showProgress={showProgress} category='technology' />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App;