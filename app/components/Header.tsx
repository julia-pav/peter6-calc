import React from 'react'

export default function Header() {
	const url2 = './pages/settings'
	return (
		<div>
			<nav>
				<ul>
					<li>
						<a href='/'>HOME</a>
					</li>
					<li>
						<a href='./pages/about'>ABOUT</a>
					</li>
					<li>
						<a href='./pages/dashboard'>DASHBOARD</a>
					</li>
					<li>
						<a href={url2}>SETTINGS</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}
