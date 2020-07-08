class App extends React.Component {
  render = () => {
    return (
      <div className="container">
        <div className="header-container">
          <div className="header-inner">
            <div className="header-front">
              <h1>Ram 'n Dom</h1>
            </div>
            <div className="header-back">
              <h1>A ramen-building app by Leland Shirley & Bobby Tazioli</h1>
            </div>
          </div>
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
            <h2>Available Ingredients</h2>
          </div>
          <div className="options-right">
            <h2>Your Ramen Bowl</h2>
          </div>
        </div>
      </div>
    )
  }
}


ReactDOM.render(<App/>, document.getElementById("root"))
