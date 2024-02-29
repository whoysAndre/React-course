import {  render } from "@testing-library/react"
import Title from "../components/Title";

describe('Title', () => { 
  
  test('Debemos hacer un snapshop', () => {
    
    render(<Title title="Hello world"/>)
    
    //Primero desestrucutaremos el render 
    const { container } = render(<Title title="Hello world"/>);

    expect(container).toMatchSnapshot();


  });
  
})
