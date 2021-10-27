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
  Spinner,
  Text
} from '@chakra-ui/react';
import { useState } from 'react';
import {
  FiChevronDown as FiChevronDownIcon,
  FiSearch as FiSearchIcon
} from 'react-icons/fi';
import { SpaceFlightNewsItem } from './components/space-flight-item';
import { useSpaceFlightNews } from './hooks/use-space-flight-news';

export function App() {
  const [order, setOrder] = useState('');
  const [limit, setLimit] = useState(1);
  const [search, setSearch] = useState('');

  const { data, isLoading } = useSpaceFlightNews({
    limit,
    order,
    search,
  });

  const handleChangeOrder = async (value: string = '') => setOrder(value);

  const handleChangeLimit = () => setLimit((old) => old + 1);

  return (
    <>
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
                  <MenuItem onClick={() => handleChangeOrder('publishedAt')}>
                    older
                  </MenuItem>
                  <MenuItem onClick={() => handleChangeOrder('')}>
                    news
                  </MenuItem>
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

          <Box>{isLoading && <Spinner size='xl' />}</Box>
        </Box>

        <Divider />

        <Container
          marginTop={8}
          as='section'
          maxW='container.sm'
          display='flex'
          alignItems='center'
          flexDirection='column'>
          {data?.map((flight, index) => (
            <Box key={flight.id} marginBottom={6}>
              <SpaceFlightNewsItem
                spaceFlight={flight}
                isInverted={(index + 1) % 2 === 0}
              />
            </Box>
          ))}

          <Box marginTop={8} marginBottom={8}>
            <Button
              onClick={handleChangeLimit}>
              Load More
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}
