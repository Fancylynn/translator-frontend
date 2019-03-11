import React, {Component} from "react";
import TranslatePage from "../components/TranslatePage";
import { NavLink } from "react-router-dom";
import "../styles/Home.css";

class Home extends Component {
    render () {
        return (
            <div>
                <div className="button-container">
                    <button className="my-button button-translate">
                        <NavLink to="/translateHistory" className="link-text">Check Translate History</NavLink>
                    </button>
                </div>
                
                <TranslatePage/>
            </div>
        );
    }
}

export default Home;