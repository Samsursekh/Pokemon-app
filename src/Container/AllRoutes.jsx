import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FavoritePage from './FavoritePage'
import Navbar from './Navbar'
import PokemonDetails from './PokemonDetails'
import PokemonPage from './PokemonPage'
import TypesPage from './TypesPage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={ <Navbar />} />
        <Route path='/pokemon' element={ <PokemonPage />} />
        <Route path='/types' element={ <TypesPage />} />
        <Route path='/favorites' element={ <FavoritePage />} />
        <Route path="/pokemon/:name" element={<PokemonDetails />} /> 
     </Routes>
  )
}

export default AllRoutes
