import React, { Component } from 'react'
import Line from './Line'

interface Props {}
interface State {
	lines: object
	filledLines: object
}

export default class extends Component<Props, State> {
	constructor(props) {
		super(props)
	}

	public render() {
		return (
			<>
				<div className="canvas">
					<Line direction="rechterzijde" element={'#box1'}></Line>
					<Line direction="onderkant" element={'#box1'}></Line>

					<div id="box1" className="box"></div>
				</div>

				<style jsx>{`
					.canvas {
						height: 100vh;
						width: 100vw;
						position: relative;
					}

					.box {
						background: blue;
						width: 100px;
						height: 100px;
						position: absolute;
						top: 100px;
						left: 150px;
					}
				`}</style>
			</>
		)
	}
}
