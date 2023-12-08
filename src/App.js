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


  const [documentBg, setDocumentBg] = useState('white')
  const [navBg, setNavBg] = useState('#f3f3f3')
  const [navText, setNavText] = useState('black')
  const [cardBg, setCardBg] = useState('#fbfbfb')
  const [cardTextTitle, setCardTextTitle] = useState('black')
  const [cardText , setCardText] = useState('black')

  const handlerDarkMode = () => {
    if(documentBg==='white'){
      setDocumentBg('#111827')
      setNavBg('#1F2937') //done
      setNavText('white')
      setCardBg('#1E293B') //done
      setCardTextTitle('white') //done
      setCardText('#8CA3AF')
    }
    else{
      setDocumentBg('white')
      setNavBg('#f3f3f3') // done
      setNavText('black')
      setCardBg('#fbfbfb') // done
      setCardTextTitle('black') //done
      setCardText('black')

    }
  }

  // Pending Tasks:
  // Include Dark Mode and get icon with font Awsome


  return (
    <div>
      <BrowserRouter>
        <Navbar navBg={navBg} navText={navText} documentBg={documentBg} handlerDarkMode={handlerDarkMode} />
        <LoadingBar
          color='#0B5ED7'
          progress={progress}
          height={4.5}
          waitingTime={500}
        />
        <Routes>
          <Route exact path='/' element={<News cardText={cardText} cardTextTitle={cardTextTitle} cardBg={cardBg} documentBg={documentBg}  key='general' showProgress={showProgress} category='general' />} />
          <Route exact path='/business' element={<News cardText={cardText} cardTextTitle={cardTextTitle} cardBg={cardBg} documentBg={documentBg}  key='business' showProgress={showProgress} category='business' />} />
          <Route exact path='/entertainment' element={<News cardText={cardText} cardTextTitle={cardTextTitle} cardBg={cardBg} documentBg={documentBg}  key='entertainment' showProgress={showProgress} category='entertainment' />} />
          <Route exact path='/health' element={<News cardText={cardText} cardTextTitle={cardTextTitle} cardBg={cardBg} documentBg={documentBg}  key='health' showProgress={showProgress} category='health' />} />
          <Route exact path='/science' element={<News cardText={cardText} cardTextTitle={cardTextTitle} cardBg={cardBg} documentBg={documentBg}  key='science' showProgress={showProgress} category='science' />} />
          <Route exact path='/sports' element={<News cardText={cardText} cardTextTitle={cardTextTitle} cardBg={cardBg} documentBg={documentBg}  key='sports' showProgress={showProgress} category='sports' />} />
          <Route exact path='/technology' element={<News cardText={cardText} cardTextTitle={cardTextTitle} cardBg={cardBg} documentBg={documentBg}  key='technology' showProgress={showProgress} category='technology' />} />
        </Routes>
       
      </BrowserRouter>
    </div>
  )
}

export default App;