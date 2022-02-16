import { Flex, Input, Text, Icon} from '@chakra-ui/react'
import {RiSearchLine} from 'react-icons/ri'

export default function Header() {
  return(
    <Flex 
    as='header'
    mt='4'
    maxWidth={1480}
    h='20'
    marginX='auto'
    px='6'
    align='center'
    >
      <Text fontSize='3xl'
      fontWeight='bold'
      letterSpacing='tight'
      w='64'
      >
        I love Programming
        <Text as="span" ml = '1' color='purple.400'>.</Text>
        </Text>

        <Flex
        as='label'
        flex='1'
        py='4'
        px='8'
        ml='6'
        maxW={400}
        alignSelf='center'
        color='gray.200'
        position='relative'
        bg='gray.800'
        borderRadius='full'
        >
          <Input 
          placeholder='Buscar na Plataforma'
          _placeholder={{
            color:'gray.400'
          }}
          color='gray.50'
          variant='unstyled'
          px='4'
          mr='4'
          />
          <Icon as = {RiSearchLine} fontSize='20'/>
        </Flex> 
    </Flex>
  );
}