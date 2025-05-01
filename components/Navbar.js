import { Box, Flex, Link, Button, Stack, useColorMode, IconButton, useDisclosure, VStack } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box px={4} shadow="sm">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box fontWeight="bold" fontSize="xl">Prince G.</Box>

        <Flex alignItems="center">
          <Stack direction="row" spacing={8} alignItems="center" display={['none', 'flex']}>
            <Link href="#about">À propos</Link>
            <Link href="#experience">Expérience</Link>
            <Link href="#competences">Compétences</Link>
            <Link href="#projets">Projets</Link>
            <Link href="#contact">Contact</Link>
            <Button onClick={toggleColorMode}>
              <FontAwesomeIcon icon={colorMode === 'light' ? faMoon : faSun} />
            </Button>
          </Stack>

          <IconButton
            display={['flex', 'none']}
            onClick={onToggle}
            icon={<FontAwesomeIcon icon={isOpen ? faTimes : faBars} />}
            variant="ghost"
            aria-label="Menu"
          />
        </Flex>
      </Flex>

      {isOpen && (
        <Box pb={4} display={['block', 'none']}>
          <VStack spacing={4} align="stretch">
            <Link href="#about">À propos</Link>
            <Link href="#experience">Expérience</Link>
            <Link href="#competences">Compétences</Link>
            <Link href="#projets">Projets</Link>
            <Link href="#contact">Contact</Link>
            <Button onClick={toggleColorMode} w="full">
              <FontAwesomeIcon icon={colorMode === 'light' ? faMoon : faSun} />
            </Button>
          </VStack>
        </Box>
      )}
    </Box>
  )
}

export default Navbar 