import { useState } from "react"


export const AddCategory = ( {onNewCategory} ) => {

  const [inputValue, setinputValue] = useState("")

  const onInputChanged = (event) => {
    setinputValue( event.target.value )
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if ( inputValue.trim().length <= 1 ) return;

    onNewCategory( inputValue.trim() );

    // setCategories( (categories) => [inputValue ,...categories] );
    setinputValue("")
  }

  return (
    <form onSubmit={onSubmit}>

    <input    
      type="text"
      placeholder="Buscar gifs"
      value={ inputValue }
      onChange={ onInputChanged }
    >     
    </input>

    </form>
  )
}
