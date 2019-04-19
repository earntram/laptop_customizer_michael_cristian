import React, { Component } from 'react';
import './App.css';
import Cart from '../Cart/Cart'
import FeaturesList from '../FeaturesList/FeaturesList'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        "Display": {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
    }
  }

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {
    // cart vvv
    // const summary = Object.keys(this.state.selected)
    //       .map(key => <div className="summary__option" key={key}>
    //         <div className="summary__option__label">{key}  </div>
    //         <div className="summary__option__value">{this.state.selected[key].name}</div>
    //         <div className="summary__option__cost">
    //           { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
    //               .format(this.state.selected[key].cost) }
    //         </div>
    //     </div>)

    // const total = Object.keys(this.state.selected)
    //       .reduce((acc, curr) => acc + this.state.selected[curr].cost, 0);    
// cart ^^

// 
    // const features = Object.keys(this.props.features)
    //       .map(key => {
    //         const options = this.props.features[key].map((item, index) => {
    //           const selectedClass = item.name === this.state.selected[key].name ? 'feature__selected' : '';
    //           const featureClass = 'feature__option ' + selectedClass;
    //           return <li key={index} className="feature__item">
    //             <div className={featureClass}
                  
    //               onClick={e => this.updateFeature(key, item)}>
    //                 { item.name }
    //                 ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
    //                   .format(item.cost) })
    //             </div>
    //           </li>
    //         });

    //         return <div className="feature" key={key}>
    //           <div className="feature__name">{key}</div>
    //           <ul className="feature__list">
    //             { options }
    //           </ul>
    //         </div>
    //       });      

    return (
      <div className="App">
        <header>
          <h1>ELF Computing</h1>
          <h3>Laptops</h3>
          <h5>Customize your laptop</h5>  
        </header>      
        <main>
          <FeaturesList 
          features={this.props.features} 
          selected={this.state.selected}
          onSelect={this.updateFeature}/>
          <Cart selected={this.state.selected} />
        </main>
      </div>
    );
  }
}

export default App;  
