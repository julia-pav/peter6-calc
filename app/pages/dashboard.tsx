import React from 'react'
import Layout from './layout'

export default function Home() {
	const myHome = '/'

	return (
		<div>
			<h1>DASHBOARD PAGE</h1>
			<a href={myHome}>[HOME]</a>
			<h1> About Page </h1>
		</div>
	)
}
