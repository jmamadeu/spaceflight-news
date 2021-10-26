import { Box, Container } from '@chakra-ui/layout';
import {
  Button,
  Divider,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody, ModalContent,
  ModalFooter, ModalOverlay,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import {
  FiChevronDown as FiChevronDownIcon,
  FiSearch as FiSearchIcon
} from 'react-icons/fi';

export function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal size='lg' isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody marginTop={4} display='flex' flexDirection='row'>
            <Image
              src='https://spacenews.com/wp-content/uploads/2021/08/elsa-d.jpg'
              alt='space image'
              width={250}
              height={180}
              background='black'
            />
            <Box
              marginLeft={6}
              display='flex'
              flexDirection='column'
              justifyContent='space-between'>
              <Text as='h4' fontWeight='bold'>
                Lorem ipsum, dolor sit amet consectetur
              </Text>
              <Box display='flex' justifyContent='space-between'>
                <Text as='span' fontSize='small'>
                  dd/mm/yyyy
                </Text>
              </Box>
              <Text as='p' noOfLines={4}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, sed. Illum doloremque ducimus ad recusandae neque
                porro temporibus quidem cupiditate consequuntur obcaecati
                quibusdam incidunt, soluta saepe voluptatibus, omnis nostrum
                quasi?
              </Text>
            </Box>
          </ModalBody>

          <ModalFooter justifyContent='center'>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Go Back
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box as='main'>
        <Box as='section'>
          <Box as='aside' display='flex' justifyContent='space-between'>
            <Box />
            <Box display='flex' marginRight={8} marginTop={4}>
              <Box marginRight={3}>
                <InputGroup>
                  <InputRightElement
                    pointerEvents='none'
                    children={<FiSearchIcon />}
                  />
                  <Input type='search' placeholder='Search' />
                </InputGroup>
              </Box>
              <Menu>
                <MenuButton as={Button} rightIcon={<FiChevronDownIcon />}>
                  Sort
                </MenuButton>
                <MenuList>
                  <MenuItem>older</MenuItem>
                  <MenuItem>news</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Box>
        <Box
          as='aside'
          marginBottom={4}
          display='flex'
          flexDirection='column'
          alignItems='center'>
          <Image
            src='/src/assets/rocket.png'
            alt='SpaceFlightNewsLogo'
            width={50}
            height={50}
          />
          <Text as='h2' fontSize='2xl' marginTop={4}>
            Space Flight News
          </Text>
        </Box>

        <Divider />

        <Container
          marginTop={8}
          as='section'
          maxW='container.sm'
          display='flex'
          alignItems='center'
          flexDirection='column'>
          <Box
            as='article'
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection={{ sm: 'column', md: 'row' }}>
            <Image
              src='https://spacenews.com/wp-content/uploads/2021/08/elsa-d.jpg'
              alt='space image'
              width={250}
              height={180}
              background='black'
            />
            <Box
              marginLeft={6}
              display='flex'
              flexDirection='column'
              justifyContent='space-between'>
              <Text as='h4' fontWeight='bold'>
                Lorem ipsum, dolor sit amet consectetur
              </Text>
              <Box display='flex' justifyContent='space-between'>
                <Text as='span' fontSize='small'>
                  dd/mm/yyyy
                </Text>
                <Text as='span' fontSize='small'>
                  News Site
                </Text>
              </Box>
              <Text as='p' noOfLines={4}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, sed. Illum doloremque ducimus ad recusandae neque
                porro temporibus quidem cupiditate consequuntur obcaecati
                quibusdam incidunt, soluta saepe voluptatibus, omnis nostrum
                quasi?
              </Text>

              <Box>
                <Button onClick={onOpen}>Show more</Button>
              </Box>
            </Box>
          </Box>
          <Box marginTop={8} marginBottom={8}>
            <Button>Load More</Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}
