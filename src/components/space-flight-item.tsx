import { Box, Text } from '@chakra-ui/layout';
import {
  Button,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react';
import { SpaceFlightNewsProperties } from '../hooks/use-space-flight-news';

type SpaceFlightDetailsProperties = {
  spaceFlight: SpaceFlightNewsProperties;
  isInverted: boolean;
  
};

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

export type DetailsFlight = Partial<SpaceFlightNewsProperties> & {
  variant?: string;
  onOpen?: () => void
};

const DetailsFlight = ({
  title,
  publishedAt,
  summary,
  url,
  variant = '',
  onOpen = () => {}
}: DetailsFlight) => (
  <Box
    marginLeft={6}
    display='flex'
    flexDirection='column'
    justifyContent='space-between'>
    <Text as='h4' fontWeight='bold'>
      {title}
    </Text>
    <Box display='flex' justifyContent='space-between'>
      <Text as='span' fontSize='small'>
        {publishedAt}
      </Text>
      {variant ? (
        <Link isExternal href={url}>
          NewsSite
        </Link>
      ) : null}
    </Box>
    <Text as='p' noOfLines={4}>
      {summary}
    </Text>

    <Box>
      {variant ? <Button>Go to website</Button> : <Button onClick={onOpen}>Show more</Button>}
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
            <DetailsFlight {...spaceFlight} variant={'modal'} />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Box
        as='article'
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection={{ sm: 'column', md: 'row' }}>
        {isInverted ? (
          <>
            <ImageFlight {...spaceFlight} />
            <DetailsFlight {...spaceFlight} onOpen={onOpen} />
          </>
        ) : (
          <>
            <DetailsFlight {...spaceFlight} onOpen={onOpen} />
            <ImageFlight {...spaceFlight} />
          </>
        )}
      </Box>
    </>
  );
}
