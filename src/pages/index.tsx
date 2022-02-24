import { Flex, Stack, Button } from "@chakra-ui/react";
import { SubmitHandler, useForm} from 'react-hook-form'
import  {Input } from "../components/Form/input";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail Obrigatório').email('Digite um E-mail válido'),
  password:yup.string().required('Senha Obrigatória'),
})

export default function SignIn() {
  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const {errors} = formState


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
          <Input name='Email' type='email' {...register( 'email')} error={errors.email}/>
          <Input name="Password" type='password'  {...register('password')} error={errors.password}/>
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
