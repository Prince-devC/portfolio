import { Box, Container, Stack, Text, Link, IconButton, Center } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <Box bg="gray.50" color="gray.700" mt={8}>
      <Container maxW="container.xl" py={4}>
        <Stack direction={['column', 'row']} spacing={4} align="center" justify="space-between">
          <Text textAlign={['center', 'left']} fontSize={['sm', 'md']}>
            © 2025 Prince Gnangnon. Tous droits réservés.
          </Text>
          <Center>
            <Stack direction="row" spacing={4}>
              <Link href="https://github.com/Prince-devC" isExternal>
                <IconButton
                  aria-label="GitHub"
                  icon={<FontAwesomeIcon icon={faGithub} />}
                  variant="ghost"
                  size={['sm', 'md']}
                />
              </Link>
              <Link href="https://linkedin.com" isExternal>
                <IconButton
                  aria-label="LinkedIn"
                  icon={<FontAwesomeIcon icon={faLinkedin} />}
                  variant="ghost"
                  size={['sm', 'md']}
                />
              </Link>
            </Stack>
          </Center>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer 