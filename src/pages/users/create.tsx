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
import { SideBar } from "../../components/SideBar/sidebar";
import Header from "../../components/Header";
import Link from "next/link";
import { SubmitHandler, useForm} from 'react-hook-form'
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome Obrigatório'),
  email: yup.string().required('E-mail Obrigatório').email('Digite um E-mail válido'),  
  password:yup.string().required('Senha Obrigatória').min(6, 'Senha deve ter no mínimo 6 caracteres'),
  password_confirmation:yup.string().oneOf([
    null, yup.ref('password')
  ], 'As senhas precisam ser iguais'),
})

export default function UserCreate() {
  const{ register, handleSubmit, formState} = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const { errors} = formState

  const handleCreateUser: SubmitHandler<CreateUserFormData > = async (values) =>{
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(values)
  }

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />
        <Box as='form'
         flex="1" 
         borderRadius={8}
          bg="gray.800" 
          p={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
          >
          <Heading size='lg' fontWeight='normal'>
          Criar usuário
          </Heading>

          <Divider my='6' borderColor='gray.700'/>

          <VStack spacing='8'>
            <SimpleGrid minChildWidth='240px' spacing={["6", "8"]} w='100%'>
              <Input name='name' {...register( 'name')}  error={errors.name}/>
              <Input name='email' type='email'  {...register( 'email')} error={errors.email}/>
            </SimpleGrid>

            <SimpleGrid minChildWidth='240px' spacing={["6", "8"]} width="100%">
              <Input name='password' type='password' {...register( 'password')} error={errors.password} />
              <Input name='password_confirmation' type='password'  {...register( 'password_confirmation')}
              error={errors.password_confirmation}/>
            </SimpleGrid>
          </VStack>
          <Flex mt='8' justify='flex-end'>
            <HStack spacing='4'>
            <Link href='/users' passHref>
              <Button as='a' colorScheme='whiteAlpha'>Cancelar</Button>
            </Link>
              <Button type="submit"  colorScheme='purple' isLoading={formState.isSubmitting}>Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
