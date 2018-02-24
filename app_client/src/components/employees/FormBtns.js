import React, {Component} from "react";
import FormStates from "../../helpers/FormStates";
class FormBtns extends Component {
    render() {
        let renderSubmit = false;
        let renderDelete = false;
        let renderEdit = false;
        // Could do a cool kmap or something to reduce this to a nice boolean expression
        if(this.props.formState === FormStates.add || this.props.formState === FormStates.edit) {
            renderSubmit = true;
        }
        if(this.props.formState === FormStates.edit || this.props.formState === FormStates.view) {
            renderDelete = true;
        }
        if(this.props.formState === FormStates.view) {
            renderEdit = true;
        }
        console.log(renderSubmit, this.props.formState)
        return(
        <div>
            {renderSubmit ?
            <button onClick={this.props.handleSubmit } 
            className = "btn btn-primary pull-right" 
            type = "submit">Submit</button> : ""}
            {renderEdit ?
            <button onClick={this.props.handleEdit} 
            className = "btn btn-warning pull-right" 
            type = "submit">Edit</button> : ""}
            {renderDelete ?
            <button onClick={this.props.handleDelete} 
            className = "btn btn-danger pull-right" 
            type = "submit">Delete</button> : ""}
        </div>
        )
    }
}
export default FormBtns;