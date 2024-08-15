import React, { useState } from 'react'
import './home.css'
import Header from './../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/foodDisplay/FoodDisplay';
import AppDownload from '../../components/appDownload/AppDownload';

const Home = () => {
  const [category,setCategory] = useState('All');

  return (
    <div>
      <Header />
      <ExploreMenu category  = {category} setCategory ={setCategory} />
      <FoodDisplay category  = {category} />
      <AppDownload />

    </div>
  )
}

export default Home