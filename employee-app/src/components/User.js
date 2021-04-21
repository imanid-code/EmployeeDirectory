import Table from './Table';
import Search from './Search';
import axios from "axios";

import React, { Component } from 'react'
// import { object } from 'prop-types';

export default class User extends Component {
    state = { employees: [{}], search: '', filteredEmployees: [{}], loaded: false}

    componentDidMount() {
        

        axios.get("https://randomuser.me/api/?results=100").then(data => {
            console.log(data.data)
            this.setState({ employees: data.data.results, filteredEmployees: data.data.results , loaded: true})
        }).catch(err => {
            console.log(err)
        })

    }
    //defined in search component
    handleSearchChange = (event) => {
        const search = event.target.value;
        //single employee just one piece of employees 
        const filtered =  this.state.employees.filter(employee => {

            let names = Object.values(employee).join('').toLowerCase();
          
            return(
                names.indexOf(search.toLowerCase()) !== -1
               
            )
           
           

        })
        this.setState({
            //filteredEmployees = data.data.results : .filter employees
            filteredEmployees:filtered
        })
        //make filter by location & email
        
    }
    sortEmployeebyEmail = () => {
        //sort through using a,b this one then that one 
       const employeesSortedbyEmail =  this.state.employees.sort((a, b) => a.email.localeCompare(b.email));
        this.setState({
            employees: employeesSortedbyEmail
        })
    } 
    sortEmployeebyFirstName = () => {
        //sort through using a,b this one then that one 
       const employeesSortedbyFirstName =  this.state.employees.sort((a, b) => a.name.first.localeCompare(b.name.first));
        this.setState({
            employees: employeesSortedbyFirstName
        })
    } 
    sortEmployeebyLastName = () => {
        //sort through using a,b this one then that one 
       const employeesSortedbyLastName =  this.state.employees.sort((a, b) => a.name.last.localeCompare(b.name.last));
        this.setState({
            employees: employeesSortedbyLastName
        })
    }
    sortEmployeebyCity = () => {
        //sort through using a,b this one then that one 
       const employeesSortedbyCity =  this.state.employees.sort((a, b) => a.location.city.localeCompare(b.location.city));
        this.setState({
            employees: employeesSortedbyCity
        })
    } 
    sortEmployeebyState = () => {
        //sort through using a,b this one then that one 
       const employeesSortedbyState =  this.state.employees.sort((a, b) => a.location.state.localeCompare(b.location.state));
        this.setState({
            employees: employeesSortedbyState
        })
    } 
    sortEmployeebyCountry = () => {
        //sort through using a,b this one then that one 
       const employeesSortedbyCountry =  this.state.employees.sort((a, b) => a.location.country.localeCompare(b.location.country));
        this.setState({
            employees: employeesSortedbyCountry
        })
    } 
    render() {
console.log(this.state.employees)
        return (
            <div>
                <Search handleSearchChange={this.handleSearchChange} />
                {this.state.loaded ? <Table results = {this.state.filteredEmployees} sortEmployeebyEmail = {this.sortEmployeebyEmail} sortEmployeebyFirstName = { this.sortEmployeebyFirstName} sortEmployeebyLastName = {this.sortEmployeebyLastName} sortEmployeebyCity = {this.sortEmployeebyCity} sortEmployeebyCountry = {this.sortEmployeebyCountry} /> : <h4>Loading...</h4>}
                
            </div>
        )
    }
}
