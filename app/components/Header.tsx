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
								<a href='/'>Home</a>
							</li>
							<li>
								<a href={url2}>GO TO SETTINGS</a>
							</li>
						</ul>
					</nav>
				</Flex>
			</Container>
		</Box>
	)
}
