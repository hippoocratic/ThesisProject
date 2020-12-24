import React , {Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Input = props => (
    <tr>
        <td>{props.input.overview}</td>
        <td>{props.input.conferences}</td>
        <td>{props.input.insurance_companies}</td>
        <td>{props.input.phone}</td>
        <td>{props.input.location}</td>
        <td>
            <Link to ={'/edit/'+props.input._id}></Link>
        </td>
    </tr>
)

export default class Profile extends Component{
    constructor(props){
        super(props);
        this.state ={inputs:[]};

    }
    componentDidMount(){
        axios.get('http://localhost:3000/infos/')
        .then(response => {
            this.setState({inputs :response.data})
        })
        .catch((error)=> {
            console.log(error);
        })
    }
    inputList(){
        return this.state.inputs.map(currentinput => {
            return <Input input={currentinput}/>;
        })
    }

    render(){
        return (
            <div>
                <h3>Profile page </h3>
                <table className="table">
                    <tr>
                        <th>Overview</th>
                        <th>Conferences</th>
                        <th>insurance_companies</th>
                        <th>Phone</th>
                        <th>Location</th>
                    </tr>
                    <tbody>
                        {this.inputList()}
                    </tbody>
                </table>
            </div>
        )
    }

}