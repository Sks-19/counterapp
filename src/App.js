import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store/index";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
    // dispatch({ type: "INC" });
  };
  const decrement = () => {
    dispatch(actions.decrement());
    // dispatch({ type: "DEC" });
  };
  const addBy = () => {
    dispatch(actions.addBy(10));
    // dispatch({ type: "ADD", payload: 10 });
  };
  return (
    <>
      <div className="container-fluid">
        <h1 className="text-success my-4" style={{ textAlign: "center" }}>
          Developed using React <b>Redux</b> & <b>Redux-Toolkit</b>
        </h1>
        <div className="card my-4">
          <div className="card-title">
            <h1 className="m-4" style={{ textAlign: "center" }}>
              Counter App
            </h1>
          </div>
          <div className="card-body">
            <h4 className="my-4" style={{ textAlign: "center" }}>
              {counter}
            </h4>
            <div className="p-4" style={{ textAlign: "center" }}>
              <button className="btn btn-primary mx-1" onClick={increment}>
                Increment
              </button>
              <button className="btn btn-success mx-1" onClick={decrement}>
                Decrement
              </button>
              <button className="btn btn-danger mx-1" onClick={addBy}>
                Increment by 10
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
