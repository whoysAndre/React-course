import { ChangeEvent, FormEvent, useState } from "react"

interface IProps{
  categories: string[];
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
};


export const AddCategory = ({categories,setCategories}:IProps) => {
  
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setInputValue(e.target.value);
  };

  const handleSubmit = (e:FormEvent)=>{
    e.preventDefault();
    if(inputValue.trim().length<=1) return;

    //Validando para que no haya mas de 2 nombres iguales
    if(categories.includes(inputValue)) return;
    setCategories([inputValue]);
    setInputValue('');
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <input
        className="mt-5" 
        type="text"
        placeholder="Search Gif"
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  )
}
