import React,{Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import face from './face.jpg';


class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state={

        }
        this.updateUI = this.updateUI.bind(this);
    }
    updateUI =(num)=>{
        this.props.updateUI(num);
    }
     

    //   window.onclick = function(event) {
    //     if (!event.target.matches('.dropbtn')) {
    //       var dropdowns = document.getElementsByClassName("dropdown-content");
    //       var i;
    //       for (i = 0; i < dropdowns.length; i++) {
    //         var openDropdown = dropdowns[i];
    //         if (openDropdown.classList.contains('show')) {
    //           openDropdown.classList.remove('show');
    //         }
    //       }
    //     }
    //   }

    render(){
       
        return(
            <Router>
            <div className="sidebar">
               <div className="sidebar-header">
                   <div className="column">
                       <img className="faace" src={face}/>
                       <h3 className="toptext">Automated Attendance</h3>
                   </div>
               <div className="search-container">
             <form>
              <input type="text" className="search-bar" placeholder="Search..." name="search"/>              
           </form>
            </div>
            <button className="main-button"> Main navigation</button>
               </div>
               
               <div className="sidebar-body">

                   <ul className="sidebar-ul">
                   <button className="sidebar-button" onClick={()=>this.props.updateUI(2)}><i className="fa fa-dashboard"></i>&nbsp;&nbsp; Dashboard</button>
                      <div className="dropdown">
                       <button class="dropbtn"><i className="fa fa-building"></i>&nbsp;&nbsp; Department &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fas fa-arrow-circle-down"></i></button>
                       <div class="dropdown-content">
                       <a href="#">BCT</a>
                       <a href="#">BEX</a>
                       <a href="#">BEL</a>
                       <a href="#">BCE</a>
                       </div></div>
                       <button className="sidebar-button" onClick={()=>this.props.updateUI(4)}><i  class="fas fa-edit"></i>&nbsp;&nbsp; Register</button>
                       <button className="sidebar-button" onClick={()=>this.props.updateUI(4)}><i  class="fas fa-edit"></i>&nbsp;&nbsp; Update details</button>
                       <button className="sidebar-button" onClick={()=>this.props.updateUI(3)}><i className="fa fa-bars"></i>&nbsp;&nbsp; Statistics</button>
                       <button className="sidebar-button" onClick={()=>this.props.updateUI(2)}><i className="fas fa-user"></i>&nbsp;&nbsp; Profile</button>
                       <button className="sidebar-button" onClick={()=>this.props.updateUI(1)}><i className="fa fa-sign"></i>&nbsp;&nbsp; Log Out</button>
                       

                    
                   </ul>
               
               </div>
            </div>
            </Router>
        )
    }
}
export default Sidebar