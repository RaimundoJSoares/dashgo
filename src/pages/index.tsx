import { Flex, Stack, Input as ChakraInput, Button } from "@chakra-ui/react";
import { SubmitHandler, useForm} from 'react-hook-form'
import  {Input } from "../components/Form/input";

export default function SignIn() {
  const {register, handleSubmit, formState} = useForm()

  type SignInFormData = {
    email: string;
    password: string;
  }

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(values)

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input name='Email' type='email' {...register('email')} />
          <Input name="Password" type='password'  {...register('password')}/>
        </Stack>
        <Button type="submit" mt="6" colorScheme="purple" size='lg'
        isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
