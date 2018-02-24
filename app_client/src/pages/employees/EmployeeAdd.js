import React, {Component} from "react";
import Form from "../../components/employees/EmployeeForm";
import EmployeeModel from "../../helpers/models/EmployeeModel";
import FormStates from "../../helpers/FormStates";

const formContainerStyle = {
    boxShadow: "0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.3)",
    backgroundColor: "#F6F6F6",
    border: "black",
    padding: "0.5em 0.75em 0.625em",
}

class EmployeeAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            jobTitle: ""
        };
    }
    handleSubmit(e) {
        e.preventDefault();
        EmployeeModel.create(this.state)
        .then(resp => {
            this.props.history.push("/employees")
        })
        .catch(err => {
            console.error(err);
        })
    }
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    render() {
        return(
        <div>
            home > employees > add
            <h1 className= "text-center">Employee Add</h1>
            <div className = "col-md-8 col-md-offset-2" style={formContainerStyle}>
                <Form formState={FormStates.add}
                employee={this.state} 
                handleChange={this.handleChange.bind(this)} 
                handleSubmit={this.handleSubmit.bind(this)}/>
            </div>
            
        </div>
        )
    }
}
export default EmployeeAdd;