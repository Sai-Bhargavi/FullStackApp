import React from "react";
import './App.css';
import axios from "axios";

class App extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      category: '',
      status: ''
    }
    this.handleSub = this.handleSub.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
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

  handleOnClick() {
    console.log("sai");
  }

  componentDidMount() {
    axios.get('/plant').then(res => console.log(res.data[1].name));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

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
