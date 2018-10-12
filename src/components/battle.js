import React, { Component } from "react";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class Battle extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      firstName: "",
      notes: "",
      hp: null,
      init: null
    };
  }
  handleChange = event => {
    if (event.target.name === "firstName")
      this.setState({ firstName: event.target.value });
    if (event.target.name === "init")
      this.setState({ init: event.target.value });
    if (event.target.name === "notes")
      this.setState({ notes: event.target.value });
    if (event.target.name === "hp")
      this.setState({ hp: event.target.value });
  };

    handleSubmit = event => {
    this.setState({data: 
        [...this.state.data, 
            { firstName: this.state.firstName,  
                init: this.state.init,
                hp: this.state.hp
            }
        ]
        });
    event.preventDefault();
    this.setState({firstName: ""});
    this.setState({init: ""});
    this.setState({hp: ""})
    };

  renderEditable = cellInfo => {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  };
  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dylan's DM Battle Coordinator</h1>
        </header>
        <p className="App-intro">
          <form onSubmit={this.handleSubmit}>
            <h3>Add fighter</h3>
            <label>
              Name:
              <input
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </label>{" "}
            <label>
              Initiative:
              <input
                type="number"
                name="init"
                value={this.state.init}
                onChange={this.handleChange}
                />
            </label>{" "}
            <label>
                HP?:
              <input
                type="number"
                name="hp"
                value={this.state.hp}
                onChange={this.handleChange}
              />
              </label>{" "}
            <input type="submit" value="Add" />
          </form>
        </p>
        <div>
          <ReactTable
            data={data}
            columns={[
              {
                Header: "First Name",
                accessor: "firstName",
                Cell: this.renderEditable
              },
              {
                Header: "Hit Points",
                accessor: "hp",
                Cell: this.renderEditable
              },
              {
                Header: "Initiative",
                id: 'init',
                accessor: d=>Number(d.init),
                Cell: this.renderEditable,
              },
              {
                Header: "Notes",
                id: "notes",
                Cell: this.renderEditable
                // accessor: d => (
                //   <div
                //     dangerouslySetInnerHTML={{
                //       __html: d.firstName + " " + d.lastName
                //     }}
                //   />
                // )
              }
            ]}
            defaultSorted={[
                {
                  id: "init",
                  desc: false
                }
              ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
        </div>
      </div>
    );
  }
}
export default Battle;