import React, {lazy, Suspense} from 'react'
import './homePage.css'
import loader from '../assets/images/loader.gif'

const Images = lazy(() => import('./components/Images') )

class HomePage extends React.Component {
  render () {
    return (
      <div className='home-page'>
        <h1> Wall papers</h1>
        <Suspense fallback={<div> Loading .......</div>}> 
          <Images />
        </Suspense>
      </div>
    )
  }
}

export default HomePage