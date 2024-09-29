import { useState } from 'react'
import Nav from './Componets/Nav'
import Newsbord from './Componets/Newsbord'
import NewsItem from './Componets/NewsItem'

function App() {
  const [category, setCategory] = useState("general");

  return (
    <>
     <Nav setCategory={setCategory} />
     <Newsbord category={category} />
    </>
  )
}

export default App
