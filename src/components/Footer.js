// function Footer(){
//     return(
//         <>
//         <p className="Footer">This page was developed by Gowtham</p>
//         </>
//     );
// }
// export default Footer;
import React from "react";
import {FaBeer} from 'react-icons/fa'
// class Footer extends React.Component{
//     constructor(){
//         super();
//             this.state={name:"Gowtham",age:"15"}
//     }
// changevalue=()=>{
//     this.setState({name:"hai"});
// }
//     render(){
//         return(
//             <>
//             <h1>{this.state.name}{this.state.age}</h1>
//             <button type="button" onClick={this.changevalue}>Change</button>
//             </>
//         );
//     }
// }
// class Footer extends React.Component{

//     constructor(props){
//         super(props);
//     }
//     render(){
//         return(
//             <>
//                 <h1>Welcome{this.props.dept}</h1>
//             </>
//         );
//     }
// }
// function Footer(props){
//     let list=["home","aboutus","contactus","services"];
//     return(
//         <>
//         <h1>Welcome{props.name}</h1>
//         <ul>
//             {list.map((listitem)=>{
//                 return<li>{listitem}</li>
//             })}
//         </ul>
//         </>
//     );
// }
class Footer extends React.Component{
    constructor(){
        super();
        this.state={name:"welcome to all"};
    }
  change=()=>{
    this.setState({name:"hai"});
  }
    render(){
        return(
            <>
            <h1>{this.state.name}</h1>
            <FaBeer />
            <button type="button" onClick={this.change}>Clickme</button>
            </>
        )
    }
} 
export default Footer;