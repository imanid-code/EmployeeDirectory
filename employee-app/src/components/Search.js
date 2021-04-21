import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function Search(props) {
    return(
        <form>
            <div className="container">
                <label htmlFor="search">Search:</label>
                <input
                //onChange detects the value of input element change
                onChange= { e => 
                    props.handleSearchChange(e)}
                // value={props.search}
                name="search"
                type="text"
                className="form-control"
                placeholder="Search for an employee by Name, E-mail or Location"
                id="search"
                />
        
            </div>
        </form>
    )
}

export default Search;