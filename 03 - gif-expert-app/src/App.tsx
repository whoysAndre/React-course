import { useState } from "react"
import { AddCategory, GifGrid, Title } from "./components"
function App() {

  const [categories, setCategories] = useState(['']);

  return (
    <>
    
      {/* TITLE */}
      <Title title="Gif Expert App" />

      {/* INPUT */}
      <AddCategory
        categories={categories}
        setCategories={setCategories}
      />
      {/* LIST GIF */}
      <GifGrid
        categories={categories}
      />

    </>

  )
}

export default App
