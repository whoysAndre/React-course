import { useRef } from "react"

export const FocusScreen = () => {
  
  const inputRef = useRef<HTMLInputElement | null>(null);
  
  const onClick = ()=>{
    inputRef.current?.focus();
  };

  return (
    <div> 
      <h1>Focus Screen</h1>

      <hr />

      <input 
        ref={inputRef}
        type="text" 
        placeholder='Ingrese nombre'
        className='form-control'  
      />

      <button className="btn btn-primary mt-2" onClick={onClick}>
        Focus
      </button>

    </div>
  )
};
