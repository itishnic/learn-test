

const App = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault()

    console.log(evt.target.elements);

    
  }
  return <form onSubmit={handleSubmit}>
    <input type="text" name='user' />
    <input type="text" name='phone'/>
    <button type='submit'>submit</button>
  </form>;
}

export default App
