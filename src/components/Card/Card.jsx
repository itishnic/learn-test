import clsx from 'clsx'
import css from'./Card.module.css'
import Button from '../Button/Button'

const isOnline = false

const Card = ({ name, email, phone, website, address }) => {

const classNames = clsx(css.container, isOnline ? css.onLine : css.ofLine) 

  return (
      <>
          <div className={classNames}>
              <h2>Name:{name}</h2>
      <hr />
      <div>
        <p>Email:{email}</p>
        <p>Phone:{phone}</p>
        <p>Website:{website}</p>
        <p>street:{address.street} </p>
              </div>
          </div>
      <Button text='start'/>
          <hr />
    </>
  )
}

export default Card

