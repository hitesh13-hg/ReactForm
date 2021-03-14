import React, {useState} from 'react';
function Entryfield(props){
    const [name,setName]=useState("")
    function handleChange(event){
        setName(event.target.value);
    }
    return(
        <div>
            <form>
            <label style={{float:"left"}} for="inputent">{props.labelName}</label>
            <input onChange={handleChange}
            type={props.dataType} class="form-control" id="inputent" value={name} />
            
            </form>
        </div>
    );
}
export default Entryfield;
