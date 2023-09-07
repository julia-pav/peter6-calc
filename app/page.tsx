// import Image from 'next/image'

// export default function Home() {
//   return (

//   )
// }

'use client'
import { Link } from '@chakra-ui/next-js'

export default function Page() {
	return (
		<Link href='/' color='blue.400' _hover={{ color: 'blue.500' }}>
			WELCOME HOME
		</Link>
	)
}
