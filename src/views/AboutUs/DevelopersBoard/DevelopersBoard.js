import React from "react";
import './DevelopersBoard.css'

function DevelopersBoard() {
    return (
        <div className="developer-board">
            <h1 className="developer-title">Developing Team</h1>
            <div className="developer-container">
                <div>
                    <h2>Machine Learning</h2>
                    <div className="developer-names">Bhargav Panguluru</div>
                    <div className="developer-names">Ethan Babel</div>
                    <h2>Fullstack Developers</h2>
                    <div className="developer-names">Adnan Alouane</div>
                    <div className="developer-names">Ivan Zhang</div>
                    <div className="developer-names">Teresa He</div>
                </div>
                <div>
                    <h2>iOS</h2>
                    <div className="developer-names">Rohan Song</div>
                    <div className="developer-names">Yueyang Huang</div>
                </div>
            </div>
        </div>
    );
};
export default DevelopersBoard;