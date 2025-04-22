import { Route, Routes } from 'react-router'
import Home from './routes/home/Home'
import RootLayout from './layout'
import Films from './routes/films/Films'
import People from './routes/people/People'

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />} >
        <Route path="/" index element={<Home />} />
        <Route path="/people" >
          <Route path=":id" element={<People />} />
        </Route>
        <Route path="/films" >
          <Route path=":id" element={<Films />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
