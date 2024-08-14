import Content from "./Content";
import image from '../Images/1img.avif';


function Header(){
    return(
        <>
            <nav>
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT US</a></li>
                    <li><a href="#">PRODUCTS</a></li>
                    <li><a href="#">SERVICES</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </nav>
            <img src={image} />
          <Content name="gowtham"/>
        </>
    );
}
// import React from "react";
// class Header extends React.Component{
//     constructor(){
//         super();
//         this.state={name:"Gowtham ",age:" 20"}
//     }
//     change=()=>{
//         this.setState({name:"hai"})
//     }
//     render(){
//         return(
//             <>
//             <h1>{this.state.name}{this.state.age}</h1>
//             <button type="button" onClick={this.change}>click</button>
//             </>
//         );
//     }
// }
export default Header;