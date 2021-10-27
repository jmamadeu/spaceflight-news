import { Box, Container } from '@chakra-ui/layout';
import {
  Alert,
  AlertIcon,
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
import { FormEvent, useState } from 'react';
import {
  FiChevronDown as FiChevronDownIcon,
  FiSearch as FiSearchIcon
} from 'react-icons/fi';
import { SpaceFlightNewsItem } from './components/space-flight-item';
import { useDebounce } from './hooks/use-debounce';
import { useSpaceFlightNews } from './hooks/use-space-flight-news';
import { getQueryParam, updateQueryParam } from './utils/update-query-params';

const PAGE_LIMIT = 10;

export function App() {
  const [sortParam, setSortParam] = useState('');
  const [limit, setLimit] = useState(PAGE_LIMIT);
  const [searchTerm, setSearchTerm] = useState(getQueryParam('search'));

  const debouncedSearchTerm = useDebounce(searchTerm);

  const { data, isLoading } = useSpaceFlightNews({
    limit,
    sortParam,
    search: debouncedSearchTerm,
  });

  const handleChangeSortParam = async (value: string = '') =>
    setSortParam(value);

  const handleChangeLimit = () => setLimit((old) => old + PAGE_LIMIT);

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);

    updateQueryParam('search', e.currentTarget.value);
  };

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
                  <Input
                    type='search'
                    placeholder='Search'
                    onChange={handleInputChange}
                    value={searchTerm}
                  />
                </InputGroup>
              </Box>
              <Menu>
                <MenuButton as={Button} rightIcon={<FiChevronDownIcon />}>
                  Sort
                </MenuButton>
                <MenuList>
                  <MenuItem
                    onClick={() => handleChangeSortParam('publishedAt')}>
                    older
                  </MenuItem>
                  <MenuItem onClick={() => handleChangeSortParam('')}>
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

          <Box>
            {!data?.length && (
              <Alert status='warning'>
                <AlertIcon />
                There's no flights with this title
              </Alert>
            )}
          </Box>

          {data?.length ? (
            <Box marginTop={8} marginBottom={8}>
              <Button
                isLoading={isLoading}
                loadingText='Loading...'
                onClick={handleChangeLimit}>
                Load More
              </Button>
            </Box>
          ) : null}
        </Container>
      </Box>
    </>
  );
}
