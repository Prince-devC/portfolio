import { Box, Container } from '@chakra-ui/react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Container maxW="container.xl" py={8}>
        {children}
      </Container>
      <Footer />
    </Box>
  )
}

export default Layout 