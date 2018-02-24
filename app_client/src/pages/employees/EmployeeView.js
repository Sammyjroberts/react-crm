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
class EmployeeView extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            employee: {}
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.gotoEdit = this.gotoEdit.bind(this);
    }
    componentDidMount() {
        EmployeeModel.getOne(this.props.match.params.id)
        .then(resp => {
            this.setState({employee: resp.data});
        })
        .catch(err => console.error(err));
    }
    gotoEdit(e) {
        e.preventDefault();
        this.props.history.push(`/employees/edit/${this.props.match.params.id}`);
    }
    handleDelete(e) {
        e.preventDefault();
        EmployeeModel.delete(this.props.match.params.id)
        .then(resp => {
            console.log(resp);
            this.props.history.push("/employees");
        }).catch(err => console.error(err));
    }
    render() {
        return (
            <div>
                <h1 className="text-center">Employee View</h1>
                <div className="col-md-8 col-md-offset-2" style={formContainerStyle}>
                    <Form handleEdit={this.gotoEdit} 
                    formState={FormStates.view}
                    employee={this.state.employee}
                    handleDelete={this.handleDelete} />
                </div>
            </div>
        )
    }
}
export default EmployeeView;