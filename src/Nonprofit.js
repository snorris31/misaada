import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
//tablerows need to be updated so that they pull from sql database the registries that each nonprofit has
class Nonprofit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            open: "", 
            tablerows: [<img src ={require("./bed-bath-and-beyond.png")} onClick={this.handleClick} width = "200px" height="125px"></img>, <img src ={require("./amazonlogo.jpg")} width = "200px" height="130px"></img>,
            <img src ={require("./qvclogo.png")} width = "200px" height="130px"></img>,<img src ={require("./walmartlogo.jpg")} width = "200px" height="130px"></img>,<img src ={require("./cvslogo.png")} width = "200px" height="130px"></img>
            ]
        }; 
    }
//hardcoded only to be able to go to Bed Bath and Beyond
handleClick(event) {
        window.location.href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/547861574?eventType=Wedding";
}
//hardcoded to only do Target - needs to be updated so it renders the registry that the user typed in
handleTargetClick(event) {
	window.location.href="https://www.target.com/gift-registry/giftgiver?registryId=cbe127acb84d450fa9c5d51d4bb39eec";
}

//only handles the addition of target - needs to be updated to handle any of the options in the dropdown
handleSubmit = () => {
	var rows = this.state.tablerows;
	console.log("hi made it");
	rows.push(<img src ={require("./targetlogo.jpg")} onClick={this.handleTargetClick} width = "200px" height="130px"></img>);
	this.setState({tableRows: rows, open:false})
}
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

//styling fixes needed
render() {
	const options = [
  'Target', 'Kroger', 'Bath and Body Works', 'TJMaxx', 'Kohls', 'Old Navy', 'Safeway'];
  const defaultOption = options[0];
    const classes = makeStyles(theme => ({

    root: {
        flexGrow: 1,
    },

    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
	}));

        return (
        	        	
              <div style = {styles} className={classes.root}>
                  <h1> World Vision </h1> 
            	<Grid container spacing={3}>
            	{this.state.tablerows.map((r) => (
            		<Grid item xs={6}>
            		<Paper className={classes.paper}><center> {r} </center></Paper>
            		</Grid>
            		))}
                 <Grid item xs={6} >

                    <Paper className={classes.paper}><center><img src ={require("./plusbutton.png")} onClick={this.onOpenModal} width = "200px" height="130px"></img></center></Paper>
        			<Modal open={this.state.open} onClose={this.onCloseModal} little>
          			<h3>Add new Registry</h3>
					<form onSubmit={this.handleSubmit}>	
					<label> Pick Registry <select value={this.state.value} onChange={this.handleChange}>
           			 <option value="target">Target</option>
          			  <option value="tjmaxx">TJMaxx</option>
           			 <option value="old_navy">Old Navy</option>
           			 <option value="safeway">Safeway</option>
       			   	</select>
       				 </label>
  					<label> Registry URL <input type="text" name="name" /></label>
  					<input type="submit" value="Submit" />
					</form>
                    </Modal>
                </Grid>
            </Grid>
        </div>
        )
    
    }
}
export default Nonprofit; 

