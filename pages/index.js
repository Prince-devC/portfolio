import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Badge,
  List,
  ListItem,
  ListIcon,
  VStack,
  HStack,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faBriefcase, faGraduationCap, faCode } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Container maxW="container.xl">
      {/* Hero Section */}
      <Box textAlign="center" py={20}>
        <Heading as="h1" size="2xl" mb={4}>
          Prince Gnangnon
        </Heading>
        <Text fontSize="xl" color="gray.600">
          Développeur Fullstack Laravel | 3+ ans d'expérience
        </Text>
      </Box>

      {/* À propos */}
      <Box id="about" mb={16}>
        <Heading as="h2" size="xl" mb={6}>
          À propos
        </Heading>
        <Text fontSize="lg">
          Développeur Fullstack passionné spécialisé dans Laravel, avec une solide expérience dans le développement d'applications web robustes et évolutives. Je m'efforce de créer des solutions technologiques innovantes qui répondent aux besoins des utilisateurs tout en maintenant les meilleures pratiques de développement.
        </Text>
      </Box>

      {/* Expérience */}
      <Box id="experience" mb={16}>
        <Heading as="h2" size="xl" mb={6}>
          Expérience Professionnelle
        </Heading>
        <Stack spacing={6}>
          <Box p={6} bg={bgColor} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
            <Heading as="h3" size="md" mb={2}>
              Développeur Fullstack Laravel @ BFT GROUP
            </Heading>
            <Text color="gray.600" mb={4}>Oct 2024 - Avr 2025</Text>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={FontAwesomeIcon} icon={faCheckCircle} color="green.500" />
                Développement d'applications web complexes avec Laravel
              </ListItem>
              <ListItem>
                <ListIcon as={FontAwesomeIcon} icon={faCheckCircle} color="green.500" />
                Création et maintenance d'APIs RESTful
              </ListItem>
              <ListItem>
                <ListIcon as={FontAwesomeIcon} icon={faCheckCircle} color="green.500" />
                Optimisation des performances des applications
              </ListItem>
            </List>
          </Box>

          <Box p={6} bg={bgColor} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
            <Heading as="h3" size="md" mb={2}>
              Développeur Web Junior @ AFRICA DIGITALIZER
            </Heading>
            <Text color="gray.600" mb={4}>Juil 2023 - Janv 2024</Text>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={FontAwesomeIcon} icon={faCheckCircle} color="green.500" />
                Développement de fonctionnalités frontend et backend
              </ListItem>
              <ListItem>
                <ListIcon as={FontAwesomeIcon} icon={faCheckCircle} color="green.500" />
                Intégration de maquettes
              </ListItem>
            </List>
          </Box>
        </Stack>
      </Box>

      {/* Compétences */}
      <Box id="competences" mb={16}>
        <Heading as="h2" size="xl" mb={6}>
          Compétences
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          <Box p={6} bg={bgColor} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
            <Heading as="h3" size="md" mb={4}>
              Backend
            </Heading>
            <Stack spacing={2}>
              <Badge>Laravel</Badge>
              <Badge>PHP</Badge>
              <Badge>Python</Badge>
              <Badge>Django Ninja</Badge>
              <Badge>Flask</Badge>
              <Badge>FastAPI</Badge>
              <Badge>MySQL</Badge>
              <Badge>PostgreSQL</Badge>
              <Badge>API RESTful</Badge>
            </Stack>
          </Box>

          <Box p={6} bg={bgColor} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
            <Heading as="h3" size="md" mb={4}>
              Frontend
            </Heading>
            <Stack spacing={2}>
              <Badge>HTML5</Badge>
              <Badge>CSS3</Badge>
              <Badge>JavaScript</Badge>
              <Badge>React</Badge>
              <Badge>Next.js</Badge>
              <Badge>Vite</Badge>
              <Badge>Tailwind CSS</Badge>
            </Stack>
          </Box>

          <Box p={6} bg={bgColor} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
            <Heading as="h3" size="md" mb={4}>
              Outils & Technologies
            </Heading>
            <Stack spacing={2}>
              <Badge>Git</Badge>
              <Badge>Docker</Badge>
              <Badge>Composer</Badge>
              <Badge>npm/yarn</Badge>
              <Badge>VS Code</Badge>
            </Stack>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Projets */}
      <Box id="projets" mb={16}>
        <Heading as="h2" size="xl" mb={6}>
          Projets
        </Heading>
        <SimpleGrid columns={[1, 2]} spacing={6}>
          <Box p={6} bg={bgColor} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
            <Heading as="h3" size="md" mb={2}>
              <Link href="https://kppay.co" isExternal color="blue.500" _hover={{ textDecoration: 'none', color: 'blue.600' }}>
                KPpay.co
              </Link>
            </Heading>
            <Text mb={4}>
              KPpay, un agrégateur de portefeuille électronique
            </Text>
          </Box>

          <Box p={6} bg={bgColor} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
            <Heading as="h3" size="md" mb={2}>
              <Link href="https://bftpay.bftgroup.co" isExternal color="blue.500" _hover={{ textDecoration: 'none', color: 'blue.600' }}>
                bftpay.bftgroup.co
              </Link>
            </Heading>
            <Text mb={4}>
              BFTpay est une passerelle de transactions Bank to Wallet
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Formation */}
      <Box id="formation" mb={16}>
        <Heading as="h2" size="xl" mb={6}>
          Formation
        </Heading>
        <Stack spacing={6}>
          <Box p={6} bg={bgColor} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
            <Heading as="h3" size="md" mb={2}>
              Licence professionnelle en Système Informatique et logiciel
            </Heading>
            <Text color="gray.600">2024</Text>
          </Box>
          <Box p={6} bg={bgColor} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
            <Heading as="h3" size="md" mb={2}>
              Baccalauréat
            </Heading>
            <Text color="gray.600">2021</Text>
          </Box>
        </Stack>
      </Box>

      {/* Contact */}
      <Box id="contact" mb={16}>
        <Heading as="h2" size="xl" mb={6}>
          Contact
        </Heading>
        <VStack spacing={4} align="start">
          <HStack>
            <Text fontWeight="bold">Email:</Text>
            <Text>prince.gnangnon2@gmail.com</Text>
          </HStack>
          <HStack>
            <Text fontWeight="bold">Localisation:</Text>
            <Text>Cotonou, Bénin</Text>
          </HStack>
          <HStack>
            <Text fontWeight="bold">GitHub:</Text>
            <Text>github.com/Prince-devC</Text>
          </HStack>
        </VStack>
      </Box>
    </Container>
  )
} 