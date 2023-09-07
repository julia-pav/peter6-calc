import React from 'react'

import { Box, Flex, Image, Container } from '@chakra-ui/react'

export default function Header() {
	const url2 = './pages/settings'
	return (
		<Box>
			<Container maxW='container.lg'>
				<Flex>
					<nav>
						<ul>
							<li>
								<a href='/'>HOME</a>
							</li>
							<li>
								<a href='./pages/about'>ABOUT</a>
							</li>
							<li>
								<a href='./pages/index'>DASHBOARD</a>
							</li>

							<li>
								<a href={url2}>SETTINGS</a>
							</li>
						</ul>
					</nav>
				</Flex>
			</Container>
		</Box>
	)
}
