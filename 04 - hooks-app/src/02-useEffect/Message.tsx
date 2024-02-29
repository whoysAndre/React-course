import { useEffect } from "react"

export const Message = () => {
  
  useEffect(() => {
    
    console.log('Message Mountend')

    return () => {
      console.log('Message Unmounted')
    };
  }, [])
  
  return (
    <>
      <h3>Usuario ya existe</h3>

    </>
  )
}
