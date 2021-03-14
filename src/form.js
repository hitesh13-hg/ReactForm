import React from 'react';
import Entryfield from './entryfield';
import Dropfield from './dropdown';
import Datep from './datep';

function Myform(){
    return(
    <div style={{margin:"20px"}}>
    <form>
        <div class="form-row">
        <div class="form-group col-md-6">
            <Dropfield 
            labelName="Prefix"
            dataType="text"
            one="Mr."
            two="Mrs."
            three="Miss"
            />
        </div>
        <div class="form-group col-md-6">
        <Entryfield 
            labelName="FullName"
            dataType="text"
            />
        </div>
        </div>
        <div class="form-row">
        <div class="form-group col-md-6">
            <Entryfield 
            labelName="Mobile Number"
            dataType="tel"
            />
        </div>
        <div class="form-group col-md-6">
        <Entryfield 
            labelName="Address Line 1"
            dataType="text"
            />
        </div>
        </div>
        <div class="form-row">
        <div class="form-group col-md-6">
        <Entryfield 
            labelName="Address Line 2"
            dataType="text"
            />
        </div>
        <div class="form-group col-md-6">
        <Entryfield 
            labelName="Address Line 3"
            dataType="text"
            />
        </div>
        </div>
        <div class="form-row">
        <div class="form-group col-md-6">
        <Entryfield 
            labelName="Town"
            dataType="text"
            />
        </div>
        <div class="form-group col-md-6">
        <Entryfield 
            labelName="City"
            dataType="text"
            />
        </div>
        </div>
        <div class="form-row">
        <div class="form-group col-md-6">
        <Entryfield 
            labelName="Post Code"
            dataType="number"
            />
        </div>
        <div class="form-group col-md-6">
        <Entryfield 
            labelName="Country"
            dataType="text"
            />
        </div>
        </div>
        <div class="form-row">
        <div class="form-group col-md-6">
        <Dropfield 
            labelName="Customer Type"
            dataType="text"
            one="New"
            two="Existing"
            />
        </div>
        <div class="form-group col-md-6">
        <Dropfield 
            labelName="Source Lead"
            dataType="text"
            one="Facebook"
            two="LinkedIn"
            />
        </div>
        </div>
        <div class="form-row">
        <div class="form-group col-md-12">
        <Entryfield 
            labelName="Comments"
            dataType="text"
            />
        </div>
        </div>
        <Datep />
        <br></br>
        <br></br>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    
    </div>
    );
}
export default Myform;
