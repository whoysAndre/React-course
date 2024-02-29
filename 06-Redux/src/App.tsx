import { useDispatch } from "react-redux"
import { newThunks } from "./store/slices/pokemon";
import { AppDispatch } from "./store/store";





function App() {

  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <h1>RTK</h1>
      <hr />

      <button onClick={()=>dispatch(newThunks())}>Click</button>
    </>
  )
}

export default App
