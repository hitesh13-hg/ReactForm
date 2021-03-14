import React, {useState} from 'react';
function Dropfield(props){
    
    const [name,setName]=useState("")
    function handleChange(event){
        setName(event.target.value);
    }
    return(
        <div>
            <form>
            <label style={{float:"left"}}>{props.labelName}</label>
            <select id="inputState" class="form-control" onChange={handleChange}>
            <option selected>{props.one}</option>
            <option>{props.two}</option>
            <option>{props.three}</option>
            </select>
            </form>
        </div>
    );
}
export default Dropfield;