import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Employees from "./components/Employees/Employees";
import Wrapper from "./components/Wrapper/Wrapper";
import API from "./util/API";

class App extends Component {
  state = {
    search: "",
    employee: [],
    filter: [],
  };

  componentDidMount() {
    API.getRandomEmployee()
      .then((res) =>
        this.setState({ employee: res.data.results, filter: res.data.results })
      )
      .catch((err) => console.log(err));
    console.log(this.state.employee);
    console.log(this.state.filter);
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleSearch = (event) => {
    event.preventDefault();
    const filtered = this.state.employee.filter(
      (employee) =>
        employee.name.first.includes(this.state.search) ||
        employee.name.last.includes(this.state.search) ||
        employee.phone.includes(this.state.search) ||
        employee.email.includes(this.state.search)
    );
    console.log(filtered);
    this.setState({ filter: filtered });
  };

  firstNameSearch = (event) => {
    event.preventDefault();
    const sort = this.state.filter.sort(function (a, b) {
      var nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.first.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    this.setState({ filter: sort });
  };

  lastNameSearch = (event) => {
    event.preventDefault();
    const sort = this.state.filter.sort(function (a, b) {
      var nameA = a.name.last.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.last.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    this.setState({ filter: sort });
  };

  render() {
    return (
      <Wrapper>
        <Header />
        <Search
          handleInputChange={this.handleInputChange}
          handleSearch={this.handleSearch}
        />
        <div className="table-div">
          <table className="table">
            <tr>
              <th></th>
              <th>
                <button className="sort-button" onClick={this.firstNameSearch}>
                  First Name
                </button>
              </th>
              <th>
                <button className="sort-button" onClick={this.lastNameSearch}>
                  Last Name
                </button>
              </th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
            {this.state.filter.map((emp) => (
              <Employees
                key={emp.id.value}
                firstname={emp.name.first}
                lastname={emp.name.last}
                email={emp.email}
                phone={emp.phone}
                image={emp.picture.thumbnail}
              />
            ))}
          </table>
        </div>
      </Wrapper>
    );
  }
}

export default App;
