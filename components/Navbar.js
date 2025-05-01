import { Box, Flex, Link, Button, Stack, useColorMode } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box px={4} shadow="sm">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box fontWeight="bold" fontSize="xl">Prince G.</Box>

        <Flex alignItems="center">
          <Stack direction="row" spacing={8} alignItems="center">
            <Link href="#about">À propos</Link>
            <Link href="#experience">Expérience</Link>
            <Link href="#competences">Compétences</Link>
            <Link href="#projets">Projets</Link>
            <Link href="#contact">Contact</Link>
            <Button onClick={toggleColorMode}>
              <FontAwesomeIcon icon={colorMode === 'light' ? faMoon : faSun} />
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar 