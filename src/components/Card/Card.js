import React from "react"
import styles from './Card.module.scss'


function Card({ imgUrl, title, price, onPlus, onFavorite, favoritePlus=false }) {

    const  [isAdded, setIsAdded] = React.useState(false)

    const onClickPlus = () => {
        onPlus({imgUrl, title, price})
        setIsAdded(!isAdded)
    }

    const [isFavorite, setIsFavorite] = React.useState(favoritePlus)

    const onCliclFavorite = () => {
      onFavorite({imgUrl, title, price})
      setIsFavorite(!isFavorite)
    }

    return (
    <div className={styles.card }>
    <div className="favorite" >
      <img onClick={ onCliclFavorite } src={isFavorite ? "/img/heard_like.svg" : "/img/like.svg"} alt="Favorite"/>
    </div>
    <img width={170} height={160} src={imgUrl}  alt="Kross"/>
    <h5>{title}</h5>
    <div className="d-flex justify-between">
      <div className="d-flex flex-column">
      <span>Цена:</span>
      <b>{price}</b>
      </div>
          <img className={styles.plus} onClick={ onClickPlus }  src={ isAdded ? "/img/btn-plus.svg":"/img/plus.svg"} alt="Plus"/>
    </div>
  </div>)
}

export default Card