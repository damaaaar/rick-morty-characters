import { useState, useEffect } from 'react'
import { generateNumber } from '../logic/generateNumber'

export function useCharacter () {
  const [info, setInfo] = useState(null)
  const [character, setCharacter] = useState(1)

  const handleClick = () => {
    const newCharacter = generateNumber()
    setCharacter(newCharacter)
  }

  const ENDPOINT_RICKANDMORTY_CHARACTER = `https://rickandmortyapi.com/api/character/${character}`

  useEffect(() => {
    fetch(ENDPOINT_RICKANDMORTY_CHARACTER)
      .then(res => res.json())
      .then(data => {
        const { name, status, species, gender, location, image } = data
        setInfo({ name, status, species, gender, location, image })
      })
  }, [character])

  return { info, handleClick }
}
