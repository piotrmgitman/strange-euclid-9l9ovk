import { useReducer } from "react";
import "./styles.css";

const initialState = { age: 42, name: "Peter" };

function reducer(state, action) {
  switch (action.type) {
    case "increase_age": {
      return {
        ...state,
        age: state.age + 1
      };
    }
    case "decrease_age": {
      return {
        ...state,
        age: state.age > 0 ? state.age - 1 : state.age
      };
    }
    case "change_name": {
      return {
        ...state,
        name: action.nextName
      };
    }

    default:
      break;
  }
  throw Error("Unknown action: " + action.type);
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleInputChange(e) {
    dispatch({
      type: "change_name",
      nextName: e.target.value
    });
  }

  function handleButtonIncreaseAge() {
    dispatch({
      type: "increase_age"
    });
  }

  function handleButtonDecreaseAge() {
    dispatch({
      type: "decrease_age"
    });
  }

  return (
    <div className="App">
      <h1>React useReducer</h1>
      <input value={state.name} onChange={handleInputChange} />
      <button onClick={handleButtonIncreaseAge}>Inclrease age</button>
      <button onClick={handleButtonDecreaseAge}>Decrease age</button>
      <p>
        Hello, {state.name}. You are {state.age}.
      </p>
    </div>
  );
}

export default App;
