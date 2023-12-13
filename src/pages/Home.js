import React,{useState} from 'react'
import './home.scss'
import Player from '../components/Player/Player'
import Nav from '../components/Nav/Nav'
const Home = () => {
  const [currentTheme, setCurrentTheme] = useState('dark')
  return (
    <div className='home'>
        <Nav setCurrentTheme={setCurrentTheme} currentTheme={currentTheme}/>
        <Player currentTheme={currentTheme}/>
    </div>
  )
}

export default Home