
import ReactDOM from "react-dom";
import React, {Component} from "react";
import {contacts} from "./data/contacts";
import Main from "./main";
import Detail from "./detail";
require("./main.scss");


let state = {};


function selectedItemo(e){
    var id = e.target.closest("li").id.split("-")[1];
    location.hash = "#/contact/" + id;
       
    var contact = find(function (i){
        return i.id == id;
    });
    
    
    
}
    
function setState(changes){

    state = Object.assign({}, state, changes);
    
    ReactDOM.render(<Main contactsArray = {contacts} selectedItem = {selectedItemo} contact = {state.contact}/> ,   document.getElementById("react-app"));
}

window.addEventListener("hashchange", ()=>{
    if (location.hash.split("/").includes("contact")) {
        var id = location.hash.split("/");
        id = id[id.length - 1];
        var contact = contacts.find(function (i) {
            return i.id == id;
        });
    }
    setState({contact:contact}); });
    
    
setState({contactsArray: contacts, contact: undefined});