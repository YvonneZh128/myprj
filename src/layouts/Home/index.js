import React,{Component} from 'react';

export default class Home extends Component{
  render(){
    return <div>
      Home
      <div onClick={this.toMenu}>toMenu</div>
    </div>
  }
  toMenu = ()=>{
    console.log('current:home',this.props);
  }
}