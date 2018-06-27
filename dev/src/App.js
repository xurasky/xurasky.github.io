import React, { Component } from "react";
import Lottie from "react-lottie";
import * as animationData from "./Animations/loading.json";
import "./App.css";
class App extends Component {
	constructor(props) {
		super(props);
		this.state = { isStopped: false, isPaused: false };
	}

	render() {
		const defaultOptions = {
			loop: true,
			autoplay: true,
			animationData: animationData
		};

		const height = window.innerHeight * 0.5;
		const width = window.innerWidth * 0.5;
		return (
			<div className="loading">
				<Lottie
					options={defaultOptions}
					width={width}
					height={height}
					isStopped={this.state.isStopped}
					isPaused={this.state.isPaused}
				/>
			</div>
		);
	}
}

export default App;
