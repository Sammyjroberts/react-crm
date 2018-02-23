import React, { Component } from "react";
import FormStates from "../../helpers/FormStates";
import Form from "./EmployeeForm";
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
    }
    componentDidMount() {
        EmployeeModel.getOne(this.props.match.params.id)
        .then(resp => {
            this.setState({employee: resp.data});
        })
    }
    render() {
        return (
            <div>
                <h1 className="text-center">Employee View</h1>
                <div className="col-md-8 col-md-offset-2" style={formContainerStyle}>
                    <Form state={FormStates.view}
                        employee={this.state.employee}
                         />
                </div>
            </div>
        )
    }
}
export default EmployeeView;