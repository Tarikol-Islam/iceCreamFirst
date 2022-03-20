import React, { Component } from 'react'
import classes from './icecreambuilder.module.css'
import Builder from '../../components/builder/builder'
import Icecream from '../../components/icecream/icecream'

export default class icecreambuilder extends Component {
  state = {
    items: {
      vanilla: 45,
      chocolate: 50,
      lemon: 40,
      orange: 55,
      strawberry: 60,
    },
    scoops: [],//ordered scoop for icecream
    totalPrice: 0, 
  };

  // componentDidMount(){
  //   console.log('icecreambuilder');
  // API calling will be here
  // fetch('apilink').then((reponse) => response.json()).then((responseData) => {
  // this.setState({ items: responseData });
  // })
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('icecreamBuider update');
  // }

  addScoop = (scoop) => {
    const { scoops, items, totalPrice} = this.state;
    const copyScoop = [...scoops];
    copyScoop.push(scoop)
    this.setState((prevState)=>{
      return {
        scoops: copyScoop,
        totalPrice: totalPrice + items[scoop],
      }
    });
  }
  removeScoop = (scoop) => {
    const { scoops, items, totalPrice} = this.state;
    const copyScoop = [...scoops];
    const scoopIndex = copyScoop.findIndex(sc => sc ===scoop);
    copyScoop.splice(scoopIndex,1);
    this.setState((prevState)=> {
      return {
        scoops: copyScoop,
        totalPrice: totalPrice - items[scoop],
      }
    });
  };
  render() {
    const {items, totalPrice, scoops} = this.state;
    return (
        <div className={["container ",classes.container].join(" ")}>
            <Icecream scoops = {scoops}/>
            <Builder items={items} totalPrice = {totalPrice} add={this.addScoop} remove = {this.removeScoop} scoops = {scoops}/>
        </div>
    )
  }
}
