import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange =(event) => {
        //console.log(event.target.value);
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        
        if (inputValue.trim().length <= 1) {
            return;
        }
        // console.log(inputValue);

        // onAddCategories( c =>  [...c, inputValue]);
        setInputValue('');
        onNewCategory(inputValue.trim());
        // onAddCategories([inputValue]);
    }

    return (
        
    <form onSubmit= { (event) => onSubmit(event)}>
        <input type="text"
            placeholder="Buscar gif"
            value={inputValue}
            // onChange= { (event) => onInputChange(event)}
            onChange= { onInputChange}
        />
    </form>
    )
}

// AddCategory.propTypes = {
//     onAddCategories: PropTypes.func.isRequired
// }
