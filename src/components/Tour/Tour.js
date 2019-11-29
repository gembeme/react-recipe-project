import React, { Component } from 'react';
import "./tour.scss";


export default class Tour extends Component {
    state = {
        showInfo: false
    };

    handleInfo = () => {
        this.setState({
            showInfo:!this.state.showInfo
        })
    }
    render() {
    
        const { id, img, cal,  name, info } = this.props.tour;
        const { removeTour } = this.props;

        return (
        <article className="tour">
            <div className="img-container">
                <img src={img} alt="recipe" />
            </div>
            <span className="close-btn" onClick={() => removeTour(id)}>
                <i class="fas fa-window-close" />
            </span>
            <div className="tour-info">
               
                    <h3>{name}</h3>
                    <h4>Calories: {cal}</h4>
                <h5>
                    Info {" "}
                    <span onClick={this.handleInfo}>
                        <i className="fas fa-caret-square-down" />
                    </span>
                    </h5>
                    {this.state.showInfo && <p>{info}</p>}
               
            </div>
        </article>
            
        )
    }
}
