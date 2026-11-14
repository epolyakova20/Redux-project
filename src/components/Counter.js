const Counter = ({counter, inc, dec, rnd}) => {
  return (
    <div className="jumbotron">
      <h1>{counter}</h1>
      <button onClick={dec} className="btn btn-primaty">DEC</button>
      <button onClick={inc} className="btn btn-primaty">INC</button>
      <button onClick={rnd} className="btn btn-primaty">RND</button>
    </div>
  )
}

export default Counter;