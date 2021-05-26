import { useState } from 'react'
import styles from './StarRating.module.css'
//
//STAR COMPONENT
//

export function Star (props) {
  return (
    <div
      className={
        props.isActive ? styles.star + ' ' + styles.active : styles.star
      }
    ></div>
  )
}
//
//StarRatin COMPONENT
//
export function StarRating (props) {
  //BLL

  let [inputData, setInputData] = useState('')

  function onChangeStarsAmount (e) {
    setInputData(e.currentTarget.value)
  }

  function onSubmitButtonClick () {
    const numData = Number(inputData)
    if (numData <= 5 && numData > 0) {
      props.changeStarsAmount(numData)
      setInputData('')
    } else {
      setInputData('')
    }
  }

  function onChangeStarsActivityButtonClick () {
    props.changeStarsActivity(!props.activeStars)
  }

  //UI
  return (
    <div>
      <input
        placeholder='input stars amount'
        value={inputData}
        onChange={onChangeStarsAmount}
      />
      <button onClick={onSubmitButtonClick}>Apply</button>

      <div>
        {Array(props.starsAmount)
          .fill()
          .map((item, i) => {
            return <Star key={i} isActive={props.activeStars} />
          })}
      </div>
      <button onClick={onChangeStarsActivityButtonClick}>
        Switch activity
      </button>
    </div>
  )
}
