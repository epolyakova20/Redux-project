import {inc, dec, rnd} from '../actions';
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="jumbotron">
      <h1>{counter}</h1>
      <button onClick={() => dispatch(dec())} className="btn btn-primaty">DEC</button>
      <button onClick={() => dispatch(inc())} className="btn btn-primaty">INC</button>
      <button onClick={() => dispatch(rnd())} className="btn btn-primaty">RND</button>
    </div>
  )
}


export default Counter;