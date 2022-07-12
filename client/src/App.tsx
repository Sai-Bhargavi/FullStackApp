import React from "react";
import './App.css';
import axios from "axios";
import { TableCell, TableRow } from "@mui/material";

class App extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      plants: []
    }
    this.handleSub = this.handleSub.bind(this);
    this.getTableData = this.getTableData.bind(this);
  }

  handleSub(e) {
    e.preventDefault();
    var body = {
      name: e.target[0].value,
      category: e.target[1].value,
      status: e.target[2].value
    }
    // axios({
    //   method: 'post',
    //   url: '/addFruit',
    //   data: body
    // }).then(res => console.log("sai")).catch(err => console.log(err));


    axios.post('/addFruit', body, { headers: { 'content-type': 'application/json' } })
      .then(res => console.log("sai"))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    //axios.get('/plant').then(res => console.log(res.data[1].name));
    axios.get('/plant').then(response => this.setState({ plants: response.data })).catch((error) => {
      console.log(error);
    });
  }

  getTableData() {
    let b = JSON.stringify(this.state.plants);
    if (!b) return null;  //added this line

    return Object.keys(b).map((row, index) => (
      <TableRow key={index} >
        <TableCell>row</TableCell>
        <TableCell>row</TableCell>
      </TableRow>
    ))
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <ul>{this.state.plants.map(plant => <li> {JSON.stringify(plant)} </li>)}</ul>

          {/* {<button onClick={this.getTableData}>Get Data</button>} */}
          <form onSubmit={this.handleSub}>
            <label>Name</label>
            <input type="text" name="name" />
            <label>Category</label>
            <input type="number" name="category" />

            <label>
              Pick your Status:
              <select >
                <option value="available">Available</option>
                <option value="pending">Pending</option>
                <option value="sold">Sold</option>
              </select>
            </label>
            <input type="submit" />
          </form>



        </header>
      </div>
    );
  }
}

export default App;
