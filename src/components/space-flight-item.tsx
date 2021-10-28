import { Box, Text } from '@chakra-ui/layout';
import {
  Button,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react';
import {
  DetailsFlightProperties, SpaceFlightDetailsProperties, SpaceFlightNewsProperties
} from '../models/space-flight-news';

const ImageFlight = ({
  imageUrl,
  title,
}: Partial<SpaceFlightNewsProperties>) => (
  <Image
    src={imageUrl}
    alt={title}
    width={250}
    height={200}
    background='black'
  />
);

const DetailsFlight = ({
  title,
  publishedAt,
  summary,
  url,
  variant = '',
  onOpen = () => {},
}: DetailsFlightProperties) => (
  <Box display='flex' flexDirection='column' justifyContent='space-between'>
    <Text color='third' as='h4' fontWeight='bold'>
      {title}
    </Text>
    <Box display='flex' justifyContent='space-between' marginBottom={3}>
      <Text color='secondary' as='span' fontSize='small'>
        {publishedAt}
      </Text>
      {!variant ? (
        <Link color='secondary' isExternal href={url}>
          NewsSite
        </Link>
      ) : null}
    </Box>
    <Text color='primary' as='p' noOfLines={4}>
      {summary}
    </Text>

    <Box marginTop={2}>
      {!variant && <Button onClick={onOpen}>Show more</Button>}
    </Box>
  </Box>
);

export function SpaceFlightNewsItem({
  spaceFlight,
  isInverted,
}: SpaceFlightDetailsProperties) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal size='lg' isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody marginTop={4} display='flex' flexDirection='row'>
            <ImageFlight {...spaceFlight} />

            <Box marginLeft={6}>
              <DetailsFlight variant='modal' {...spaceFlight} />
            </Box>
          </ModalBody>
          <ModalFooter justifyContent='center'>
            <Button variant='link' colorScheme='blue' mr={3}>
              <Link href={spaceFlight.url} isExternal>
                Go to the website
              </Link>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box
        data-testid='flight-item'
        as='article'
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection={{ sm: 'column', md: 'row' }}>
        {isInverted ? (
          <>
            <ImageFlight {...spaceFlight} />
            <Box marginLeft={6}>
              <DetailsFlight {...spaceFlight} onOpen={onOpen} />
            </Box>
          </>
        ) : (
          <>
            <Box marginRight={6}>
              <DetailsFlight {...spaceFlight} onOpen={onOpen} />
            </Box>
            <ImageFlight {...spaceFlight} />
          </>
        )}
      </Box>
    </>
  );
}
