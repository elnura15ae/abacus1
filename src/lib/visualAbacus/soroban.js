import React, { Component } from 'react';


class UpperStone extends Component {
  render() {
    return (<ellipse className="upperStone" id="upperStone" cx="100" cy={this.props.up ? 125 : 175} rx="40" ry="25"
	    onClick={this.props.onClick} />)
  }
}


class LowerStone extends Component {
  render() {
    return (<ellipse className="lowerStone" id="lowerStone" cx="100" cy={this.props.cy} rx="40" ry="25"
	    onClick={()=>this.props.onClick(this.props)} />)
  }
}


class Row extends Component {
  // each Row should have 4 lower stones and 1 upper
  
  constructor(props) {
    super(props);
    this.state = {digit:0,
		  upperStoneUp: true,
		  lowerStones: [1,2,3,4].map( (x) => {return{digit:x, cy:(x*50+225), up:false}})
		 };
    this.toggleUpperStone = this.toggleUpperStone.bind(this);
    this.toggleLowerStones = this.toggleLowerStones.bind(this);
  }

  
  toggleLowerStones(props) {
    if (props.up) {
      this.setState({lowerStones:[1,2,3,4].map((x)=> (x>=props.digit ? this.moveStoneDown(x) : this.moveStoneUp(x))),
		     digit:(props.digit-1+this.add5()) }) 
    } else {
      this.setState({lowerStones:[1,2,3,4].map((x)=> (x<=props.digit ? this.moveStoneUp(x) : this.moveStoneDown(x))),
		     digit:(props.digit+this.add5()) }) 
    }
  }

  moveStoneUp(digit) {
    return( {digit:digit, cy:(digit*50+175), up:true} );
  }
  
  moveStoneDown(digit) {
    return( {digit:digit, cy:(digit*50+225), up:false} );
  }
  
  add5() {
    return(this.state.upperStoneUp ? 0 : 5)
  }
  
  toggleUpperStone() {
    if (this.state.upperStoneUp) {
      this.setState({upperStoneUp: false, digit:(this.state.digit+5)});
    } else {
      this.setState({upperStoneUp: true,  digit:(this.state.digit-5)});
    }
  }

  
  render() {
    return(<g transform={"translate(" + this.props.place*100 + ",0)"}>
	   <text x="80" y="70">{this.state.digit}</text>
	   <line x1="100" x2="100" y1="100" y2="450" />
	   <UpperStone up={this.state.upperStoneUp} onClick={this.toggleUpperStone} />
	   {this.state.lowerStones.map((stone) =>
				       <LowerStone digit={stone.digit} cy={stone.cy} up={stone.up} onClick={this.toggleLowerStones} /> )}
	   </g> 
	  )
  }
}


const Rows = [0,1,2,3,4,5,6,7,8,9].map( (x) => <Row place={x} /> );

const Soroban = <svg id="sorobanSVG"
                     xmlns='http://www.w3.org/2000/svg'
                     baseProfile="tiny"
                     viewBox="0 0 1100 450" >
  <line id="sorobanHorizLine" y1="200" y2="200" x1="0" x2="1100"  />
  {Rows}
</svg>

export default Soroban;