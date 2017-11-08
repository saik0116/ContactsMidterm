import ReactDOM from   "react-dom";
import React, {Component} from "react";
import Title from "./title";
import List from "./list";
import Detail from "./detail";
import PropTypes from "prop-types";



export default class Main extends Component {
    render(){
        return (
        
            <div>
            <div className = "row"><Title/></div>
            <List arrayList={this.props.contactsArray}
            selectedProfile = {this.props.selectedItem}/>
        <Detail info = {this.props.contact}/>
        </div> 
            
            
            
        
        )
    }
}



Main.propTypes = {
    contactsArray: PropTypes.array,
    selectedItem: PropTypes.func,
    contact: PropTypes.object
}
