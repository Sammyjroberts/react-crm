import React, { Component } from "react";
import FormStates from "../../helpers/FormStates";
import Form from "../../components/employees/EmployeeForm";
import EmployeeModel from "../../helpers/models/EmployeeModel";
const formContainerStyle = {
    boxShadow: "0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.3)",
    backgroundColor: "#F6F6F6",
    border: "black",
    padding: "0.5em 0.75em 0.625em",
}
class EmployeeEdit extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            firstName: "",
            lastName: "",
            age: "",
            jobTitle: ""
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        EmployeeModel.getOne(this.props.match.params.id)
        .then(resp => {
            this.setState(resp.data);
        })
        .catch(err => console.error(err));
    }
    handleUpdate(e) {
        e.preventDefault();
        EmployeeModel.update(this.props.match.params.id, this.state)
        .then(resp => {
            console.log(resp);
            this.props.history.push(`/employees/view/${this.props.match.params.id}`);
        })
        .catch(err => console.error(err));
    }
    handleDelete(e) {
        e.preventDefault();
        EmployeeModel.delete(this.props.match.params.id)
        .then(resp => {
            console.log(resp);
            this.props.history.push("/employees");
        }).catch(err => console.error(err));
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
        return (
            <div>
                <h1 className="text-center">Employee Edit</h1>
                <div className="col-md-8 col-md-offset-2" style={formContainerStyle}>
                    <Form
                    handleChange={this.handleChange} 
                    formState={FormStates.edit}
                    employee={this.state}
                    handleSubmit={this.handleUpdate}
                    handleDelete={this.handleDelete} />
                </div>
            </div>
        )
    }
}
export default EmployeeEdit;