class App extends React.Component {
  render = () => {
    return (
      <div className="container">
        <div className="header">
          <h1>Ram 'n Dom</h1>
        </div>
        <div className="bowl">
          <img src="https://i.imgur.com/nHKnzHd.png"/>
        </div>
        <div className="buttons">
          <button>Create A Bowl</button>
          <button>Clear the Bowl</button>
          <button>Finalize Order</button>
        </div>
        <div className="ingredients">
          <div className="options-left">
          </div>
          <div className="options-right">
          </div>
        </div>
      </div>
    )
  }
}


ReactDOM.render(<App/>, document.getElementById("root"))
