import { useState } from "react";
import reducer from "./Reducer";
import { incrementLike, decrementLike } from "./Actions";
import { legacy_createStore as createStore } from "redux";

let store = createStore(reducer);

export default function LikeCounter() {
  const [count, setCount] = useState(0);

  store.subscribe(() => {
    setCount(store.getState().count);
  });

  return (
    <>
      <h2>{count}</h2>
      <h2>{console.log(incrementLike())}</h2>
      <button onClick={() => store.dispatch(incrementLike())}>Like</button>
      <button onClick={() => store.dispatch(decrementLike())}>Dislike</button>
    </>
  );
}
