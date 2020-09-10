import React, { Component } from 'react'
import Front from 'components/Front'

interface Props {}
interface State {}

export default class extends Component<Props, State> {
	constructor(props) {
		super(props)
	}

	public render() {
		return <Front></Front>
	}
}
