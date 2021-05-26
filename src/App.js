import { useState } from 'react'
import { RefComponent } from './6_RefComponent/6_RefComponent'
import { StarRating } from './6_StarRating/StarRating'
import './App.css'

function App () {
  //BLL
  const data = {
    starsAmount: 5,
    activeStars: false
  }

  let [starsAmount, setStarsAmount] = useState(data.starsAmount)
  let [activeStars, setActiveStars] = useState(data.activeStars)

  function changeStarsAmount (value) {
    setStarsAmount(value)
  }

  function changeStarsActivity(value) {
    setActiveStars(value)
  }
  //UI

  return (
    <div>
      <RefComponent />
      <StarRating
        starsAmount={starsAmount}
        activeStars={activeStars}
        changeStarsAmount={changeStarsAmount}
        changeStarsActivity={changeStarsActivity}
        activeStars={activeStars}
      />
    </div>
  )
}

export default App
