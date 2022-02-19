import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { Input } from "../../components/Form/input";
import { SideBar } from "../../components/Form/sidebar";
import Header from "../../components/Header";

export default function UserCreate() {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size='lg' fontWeight='normal'>
          Criar usuário
          </Heading>

          <Divider my='6' borderColor='gray.700'/>

          <VStack spacing='8'>
            <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
              <Input name='Name' />
              <Input name='Email' type='email' />
            </SimpleGrid>

            <SimpleGrid minChildWidth='240px' spacing='8' width="100%">
              <Input name='Senha' type='password' />
              <Input name='Confirmação de Senha' type='password' />
            </SimpleGrid>
          </VStack>
          <Flex mt='8' justify='flex-end'>
            <HStack spacing='4'>
              <Button colorScheme='whiteAlpha'>Cancelar</Button>
              <Button colorScheme='purple'>Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
