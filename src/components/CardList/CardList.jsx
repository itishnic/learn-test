import users from '../../data.json'
import Card from '../Card/Card'
import css from './CardList.module.css'

const CardList = () => {
  return (
    <div>
      <div className={css.container}>
      {users.map((el) => {
        return <Card key={el.id}
          name={el.name} email={el.email} phone={el.phone} website={el.website} address={el.address} />
      })}
      </div>
    </div>
  )
}

export default CardList
