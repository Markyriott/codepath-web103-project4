import React from 'react'
import { useRoutes } from 'react-router-dom'
import Navigation from './components/Navigation'
import CreateShoe from './pages/CreateShoe'
import EditShoe from './pages/EditShoe'
import ShoeDetails from './pages/ShoeDetails'
import ViewShoes from './pages/ViewShoes'
import './App.css'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <CreateShoe title='DIY SHOES | Customize' />
    },
    {
      path:'/customshoes',
      element: <ViewShoes title='DIY SHOES | Custom Shoes' />
    },
    {
      path: '/customshoes/:id',
      element: <ShoeDetails title='DIY SHOES | View' />
    },
    {
      path: '/edit/:id',
      element: <EditShoe title='DIY SHOES | Edit' />
    }
  ])

  return (
    <div className='app'>

      <Navigation />

      { element }

    </div>
  )
}

export default App