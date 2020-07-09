class App extends React.Component {
  state = {
    ingredients: [
      "Pork Belly",
      "Ramen Noodles",
      "Seasoned Egg",
      "Bean Sprouts",
      "Fresh Scallions",
      "Bok Choy Leaves",
      "Maitake Mushrooms",
      "Kanabo Spice",
    ],
    ramenBowls: [],
    ingredient1: "",
    ingredient2: "",
    ingredient3: "",
    ingredient4: "",
    ingredient5: "",
    ingredient6: "",
    ingredient7: "",
    ingredient8: "",
  };
  componentDidMount = () => {
    axios.get("/ramen").then((response) => {
      console.log(response);
      this.setState({ ramenBowls: response.data });
    });
  };
  finalizeOrder = (event) => {
    axios
      .post("/ramen", {
        ingredient1: this.state.ingredient1,
        ingredient2: this.state.ingredient2,
        ingredient3: this.state.ingredient3,
        ingredient4: this.state.ingredient4,
        ingredient5: this.state.ingredient5,
        ingredient6: this.state.ingredient6,
        ingredient7: this.state.ingredient7,
        ingredient8: this.state.ingredient8,
      })
      .then((response) => {
        console.log(response);
        this.setState({
          ramenBowls: response.data,
        });
        console.log(this.state);
      });
  };
  addIngredient = (event) => {
    console.log(event.target.id);
    if (event.target.id === "Pork Belly") {
      this.setState({ ingredient1: event.target.id });
    } else if (event.target.id === "Ramen Noodles") {
      this.setState({ ingredient2: event.target.id });
    } else if (event.target.id === "Seasoned Egg") {
      this.setState({ ingredient3: event.target.id });
    } else if (event.target.id === "Bean Sprouts") {
      this.setState({ ingredient4: event.target.id });
    } else if (event.target.id === "Fresh Scallions") {
      this.setState({ ingredient5: event.target.id });
    } else if (event.target.id === "Bok Choy Leaves") {
      this.setState({ ingredient6: event.target.id });
    } else if (event.target.id === "Maitake Mushrooms") {
      this.setState({ ingredient7: event.target.id });
    } else if (event.target.id === "Kanabo Spice") {
      this.setState({ ingredient8: event.target.id });
    }
    console.log(this.state);
  };
  deleteOrder = (event) => {
    axios.delete("/ramen/" + event.target.id).then(
      (response) => {
        this.setState({ramenBowls: response.data})
      }
    )
  }
  editItem = (event) => {
    const idTwo = event.target.getAttribute("randattr")
    console.log(idTwo);
    console.log(event.target.id);
    if (event.target.id === this.state.ingredient1) {
      this.setState({ingredient1: "" });
    } else if (event.target.id === this.state.ingredient2) {
      this.setState({ ingredient2: "" });
    } else if (event.target.id === this.state.ingredient3) {
      this.setState({ ingredient3: "" });
    } else if (event.target.id === this.state.ingredient4) {
      this.setState({ ingredient4: "" });
    } else if (event.target.id === this.state.ingredient5) {
      this.setState({ ingredient5: "" });
    } else if (event.target.id === this.state.ingredient6) {
      this.setState({ ingredient6: "" });
    } else if (event.target.id === this.state.ingredient7) {
      this.setState({ ingredient7: ""});
    } else if (event.target.id === this.state.ingredient8) {
      this.setState({ ingredient8: "" });
    }
    axios.put("/ramen/" + idTwo,
    {
      ingredient1: this.state.ingredient1,
      ingredient2: this.state.ingredient2,
      ingredient3: this.state.ingredient3,
      ingredient4: this.state.ingredient4,
      ingredient5: this.state.ingredient5,
      ingredient6: this.state.ingredient6,
      ingredient7: this.state.ingredient7,
      ingredient8: this.state.ingredient8,
    }
    ).then(
      (response) => {
        console.log(response);
        this.setState({ramenBowls: response.data})
      }
    )
  };
  render = () => {
    return (
      <div className="container">
        <div className="header-container">
          <div className="header-inner">
            <div className="header-front">
              <h1>Ram N Dom</h1>
            </div>
            <div className="header-back">
              <h1>A ramen-building app by Leland Shirley & Bobby Tazioli</h1>
            </div>
          </div>
        </div>
        <div className="bowl">
          <img src="https://i.imgur.com/nHKnzHd.png" />
        </div>
        <div className="buttons">
          <button id="SHO" onClick={this.createBowl}>
            Create A Shoyu Ramen
          </button>
          <button id="SHI" onClick={this.createBowl}>
            Create A Shio Ramen
          </button>
          <button id="MAI" onClick={this.createBowl}>
            Create A Maitake Ramen
          </button>

          <button>Clear the Bowl</button>
          <button onClick={this.finalizeOrder}>Finalize Order</button>
        </div>
        <div className="ingredients">
          <div className="options-left">
            <h2>Available Ingredients</h2>
            {this.state.ingredients.map((ingredient) => {
              return (
                <h3
                  onClick={this.addIngredient}
                  className="toppings"
                  id={ingredient}
                >
                  {ingredient}
                </h3>
              );
            })}
          </div>
          <div className="options-right">
            <h2>Your Ramen Bowl</h2>
            {this.state.ingredient1 ? (
              <h3 className="toppings">{this.state.ingredient1}</h3>
            ) : (
              ""
            )}
            {this.state.ingredient2 ? (
              <h3 className="toppings">{this.state.ingredient2}</h3>
            ) : (
              ""
            )}
            {this.state.ingredient3 ? (
              <h3 className="toppings">{this.state.ingredient3}</h3>
            ) : (
              ""
            )}
            {this.state.ingredient4 ? (
              <h3 className="toppings">{this.state.ingredient4}</h3>
            ) : (
              ""
            )}
            {this.state.ingredient5 ? (
              <h3 className="toppings">{this.state.ingredient5}</h3>
            ) : (
              ""
            )}
            {this.state.ingredient6 ? (
              <h3 className="toppings">{this.state.ingredient6}</h3>
            ) : (
              ""
            )}
            {this.state.ingredient7 ? (
              <h3 className="toppings">{this.state.ingredient7}</h3>
            ) : (
              ""
            )}
            {this.state.ingredient8 ? (
              <h3 className="toppings">{this.state.ingredient8}</h3>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="shopping-cart">
          {
            this.state.ramenBowls.map((bowl, index) => {
              return <div className="orders">
                <div className="order-flex">
                  <h3>Order #{bowl.id}</h3>
                  <h3 onClick={this.deleteOrder} id={bowl.id}>X</h3>
                </div>
                <img src="https://i.imgur.com/yEKcKDm.jpg" />
                <div className="order-items">
                  <h4>{bowl.ingredient1}</h4>
                  <h4 randattr={bowl.id} id={bowl.ingredient1} onClick={this.editItem}>X</h4>
                </div>
                <div className="order-items">
                  <h4>{bowl.ingredient2}</h4>
                  <h4 randattr={bowl.id} id={bowl.ingredient2} onClick={this.editItem}>X</h4>
                </div>
                <div className="order-items">
                  <h4>{bowl.ingredient3}</h4>
                  <h4 randattr={bowl.id} id={bowl.ingredient3} onClick={this.editItem}>X</h4>
                </div>
                <div className="order-items">
                  <h4>{bowl.ingredient4}</h4>
                  <h4 randattr={bowl.id} id={bowl.ingredient4} onClick={this.editItem}>X</h4>
                </div>
                <div className="order-items">
                  <h4>{bowl.ingredient5}</h4>
                  <h4 randattr={bowl.id}  id={bowl.ingredient5} onClick={this.editItem}>X</h4>
                </div>
                <div className="order-items">
                  <h4>{bowl.ingredient6}</h4>
                  <h4 randattr={bowl.id} id={bowl.ingredient6} onClick={this.editItem}>X</h4>
                </div>
                <div className="order-items">
                  <h4>{bowl.ingredient7}</h4>
                  <h4 randattr={bowl.id} id={bowl.ingredient7} onClick={this.editItem}>X</h4>
                </div>
                <div className="order-items">
                  <h4>{bowl.ingredient8}</h4>
                  <h4 randattr={bowl.id} id={bowl.ingredient8} onClick={this.editItem}>X</h4>
                </div>
              </div>
            })
          }
        </div>
      </div>
    );
  };
}

ReactDOM.render(<App />, document.getElementById("root"));
