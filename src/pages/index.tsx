import { Flex, Stack, Input as ChakraInput, Button } from "@chakra-ui/react";
import { useForm} from 'react-hook-form'
import  {Input } from "../components/Form/input";

export default function SignIn() {
  const {register, handleSubmit} = useForm()

  function handleSignIn() {

  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      backgroundImage="https://img.wallpapersafari.com/desktop/1920/1080/60/93/r6Hqxf.jpg"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <Input name='Email' type='email' ref={register}/>
          <Input name="Password" type='password'  ref={register}/>
        </Stack>
        <Button type="submit" mt="6" colorScheme="purple" size='lg'>
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
