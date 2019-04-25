
import React from "react";

const styles = {
    navBar: {
        color: "grey"
    },
    scores: {
        justifyContent: "right"
    }
}
function NavBar(props) {
    return (
        <nav style ={styles.navBar} className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">Clicky Game</span>
        <span style = {styles.scores} id = "scores">Current Score: {props.clickCount} | High Score: {props.highScore}</span>
        </nav>
    )
}

export default NavBar;