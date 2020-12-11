import React from "react";

import List from "components/List/index";
import listMovies from "movies.json";
import "./App.css";

export default class App extends React.Component {
  state = {
    favItems: [],
    clearButton: true,
    hideButton: false
  };


render() {
    const { favItems } = this.state;
    return(
      <div className="container-fluid">
        <h1 className="text-center mt-3 mb-0">Favorites Movie App</h1>
        <p className="text-center text-secondary text-sm font-italic">
          (This is a <strong>class-based</strong> application)
        </p>
        
        <div className="container pt-3">
          <div className="row">
            <div className="col-sm text-center">

                  <div className="form-check">
                <input
                  type="checkbox"
                  checked={this.state.favHidden}
                  data-toggle="toggle"
                  onChange={this.handleToggle}
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Hide Favorites
                </label>
              </div>

            <button
                hidden={this.state.clearButton}
                className="btn btn-primary"
                onClick={this.clearAll}
              > Clear All Favorites </button>

            </div>
            </div>
            </div>

















        <div className="container pt-3">
          <div className="row">
            <div className="col-sm">
              <List
                title="List Movies"
                items={listMovies}
                onItemClick={this.handleItemClick}
              />
            </div>
            <div className="col-sm">
            {this.state.hideButton ? null :
                        
                        <List
                          title="My Favorites"
                          items={this.state.favItems}
                          onItemClick={this.handleItemClickRight}
                        />
                      
            }
            </div>
          </div>
        </div>
      </div>
    );
  }
  handleToggle = () => {
    const favHidden = this.state.hideButton;
    this.setState({ hideButton: !favHidden });
  };

  handleItemClick = (item) => {
    const newItems = [...this.state.favItems];
    const newItem = {...item };

    const targetInd = newItems.findIndex((it) => it.id === newItem.id);

    if(targetInd < 0 ) newItems.push(newItem);
    // else newItems.splice(targetInd, 1);

    this.setState({favItems: newItems, clearButton: false});
  };

  handleItemClickRight = (item) => {
    const newItems = [...this.state.favItems];
    const newItem = {...item };

    const targetInd = newItems.findIndex((it) => it.id === newItem.id);

    if(targetInd < 0 ) newItems.push(newItem);
    else newItems.splice(targetInd, 1);

    this.setState({favItems: newItems, clearButton: false});
    if(newItems.length == 0){
      this.setState({clearButton: true});
    }
  };

  clearAll = () => {
    this.setState({ favItems: [], clearButton: true });
  };
}
