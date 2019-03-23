// Node.JS
import React from "react";
import ReactDOM from "react-dom";
  
class App extends React.Component {

  constructor(props) {
    super(props); 
  }

  handleStockSubmit(event) { 
    $.get('/stock?symbol='+document.querySelector('#stock').value);
  }

  render() {
    return (
      <div>
        <h2>Stock Entry Form</h2>
        <input type="text" id="stock"/>
        <button onClick={this.handleStockSubmit.bind(this)}>Save</button>
      </div>
    );
  }
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));


module.hot.accept();