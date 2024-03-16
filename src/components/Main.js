import React from 'react'
import '../App.css';
import selfie from '../Images/coolGuy.png'
import slenderman from '../Images/slender-man.jpg'
import dog from '../Images/Screenshot 2024-03-07 232600.png'

function Main() {

  return (
    <main>
      <div className='section1'>
        <img src={selfie} className='mainPicture'></img>
        <div className='text'>
          <h2 id="AboutMe"> About me </h2>
          <p>
            I am currently a computer science major at Langara College, with aspirations of becoming a game developer.
            <br></br> My hobbies include playing video games, spending time with friends, and programming.
          </p>
        </div>
      </div>

      <br></br>

      <div className='section2'>
        <div className='text'>
          <h2 id="Education"> Education </h2>
          <p> Some of the schools I went to are: </p>
          <ul>
            <li> Charles Hayes Secondary School </li>
            <li> Langara College </li>
          </ul>
        </div>
        <img src={slenderman} className='mainPicture'></img>
      </div>

      <br></br>

      <div className='section3'>
      <img src={dog} className='mainPicture'></img>
        <div className='text'>
          <h2 id="Experience"> Experience </h2>
          <p> Some programming languages I know are: </p>
          <ul>
            <li> Lua </li>
            <li> C++ </li>
            <li> Javascript </li>
            <li> Java </li>
            <li> Python </li>
          </ul>
        </div>
      </div>

      <br></br>

      <div className='Contact' id = 'Contact'>
      <h2> Contact </h2>
      <ul>
      <li>Contact my <a href='https://google.ca'>personal email</a></li>
      <li>See my <a href='https://github.com/DeadzoneLEVEL'>github profile</a></li>
      <li>Visit my <a href='https://deadzonelevel.github.io/my-website/#Contact'>github page</a></li>
      <li>See <a href='https://www.youtube.com'>Youtube's main page</a></li>
      <li>See <a href='https://www.google.com/search?client=opera-gx&q=google&sourceid=opera&ie=UTF-8&oe=UTF-8'>Google</a></li>
      </ul>
      </div>
    </main>
  )
}

export default Main