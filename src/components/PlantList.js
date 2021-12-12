import React, { Component } from "react";
import axios from "axios";
import { Rate } from 'antd';
//import { FaTruckMoving} from "react-icons/ai";

import { FaTruckMoving} from 'react-icons/fa';


export default class PlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array
  state = {
    plants: [],
  };
  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  //   - set the returned plants array to this.state.plants

  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  componentDidMount() {
    axios.get("http://localhost:3333/plants").then((res) => {
      console.log(res);
      this.setState({ plants: res.data });
    });
  }

  render() {
    return (
      <main className="plant-list">
        {this.state?.plants?.map((plant) => (
          <div className="plant-card" key={plant.id} data-testid="plant-card">
            <div className="card-mix">
              <div className="plant-details">
                <img className="plant-image" src={plant.img} alt={plant.name} />
                <h2 className="plant-name">{plant.name}</h2>
                <p className="plant-scientific-name">{plant.scientificName}</p>
                <p>{plant.description}</p>
                <div className="plant-bottom-row">
                  <p>${plant.price}</p>
                  <Rate allowHalf defaultValue={4.5} className="rate" />
                  <FaTruckMoving/>
              
                  <button
                  className="plant-button"
                  onClick={() => this.props.addToCart(plant)}
                >Buy
                </button>

                </div>
                
              </div>
            </div>
          </div>
        ))}
      </main>
    );
  }
}
