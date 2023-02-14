import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import data from './data'
import Post from './Post'


function App() {
  
  const postElements = data.map(obj =>{
    return (
      <Post
          title = {obj.title}
          location = {obj.location}
          url = {obj.googleMapsUrl}
          startDate = {obj.startDate}
          endDate = {obj.endDate}
          description = {obj.description}
          image = {obj.imageUrl}
      />
    )
  })

  return (
    <div >
      <header>
      <FontAwesomeIcon icon={faEarthAmericas} className="globe"/>
        <p className="title">my travel journal.</p> 
      </header>
      <div className="main">
        {postElements}
      </div>

      
    </div>
  )
}

export default App
