import React,{Component} from 'react';

export default class Menu extends Component{
  render(){
    return <div>
      Menu
      <div onClick={this.toHome}>toHome</div>
    </div>
  }
  toHome = ()=>{
    console.log('current:Menu',this.props);
  }
}