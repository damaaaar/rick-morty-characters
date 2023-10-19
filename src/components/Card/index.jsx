import { useCharacter } from '../../hooks/useCharacter'
import './Card.css'

function Card () {
  const { info, handleClick } = useCharacter()
  return (
    <div className='container'>
      {
        info &&
          <article className='character'>
            <figure className='character-image'>
              <img src={info.image} alt={`Image of ${info.name}`} />
            </figure>
            <div className='character-data'>
              <h2 className='character-info'><span className='character-span'>Name: </span>{info.name}</h2>
              <p className='character-info'><span className='character-span'>Status: </span>{info.status}</p>
              <p className='character-info'><span className='character-span'>Species: </span>{info.species}</p>
              <p className='character-info'><span className='character-span'>Gender: </span>{info.gender}</p>
              <p className='character-info'><span className='character-span'>Location: </span>{info.location.name}</p>
            </div>
          </article>
      }
      <button onClick={handleClick} className='refresh-button'>Refresh</button>
    </div>
  )
}

export default Card
