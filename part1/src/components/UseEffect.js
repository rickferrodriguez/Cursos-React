import { useEffect, useState } from 'react'

export function UseEffect () {
  const [counter, setCounter] = useState(0)
  useEffect (() => {
    console.log('El codigo a ejecutar')
  },[counter])

}
