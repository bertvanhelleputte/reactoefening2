import React, { Component } from 'react'

interface Props {
	direction: string
	length: number
	element: object
	factor: number
	connectingLines?: object
}
interface State {
	lines: object
}

export default class extends Component<Props, State> {
	constructor(props) {
		super(props)

		this.state = {
			x1: 0,
			y1: 0,
			x2: 500,
			y2: 500,
		}
	}

	componentDidMount() {
		const elementId = this.props.element
		const direction = this.props.direction

		const coordinates = document
			.querySelector(elementId)
			.getBoundingClientRect()
		
		console.log(coordinates);
		

		this.setState({
			x1: coordinates.right,
			y1: coordinates.top + coordinates.height / 2,
		})
	}

	public render() {
		const { x1, y1, x2, y2 } = this.state

		return (
			<>
				<svg>
					<line
						x1={x1}
						y1={y1}
						x2={x2}
						y2={y2}
						stroke="#dae4f4"
						strokeWidth="4"
					></line>
				</svg>

				<style jsx>{`
					svg {
						height: 100%;
						width: 100%;
						position: absolute;
					}
				`}</style>
			</>
		)
	}
}
