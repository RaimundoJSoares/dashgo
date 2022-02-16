import {Input as ChakraInput, InputProps as ChakraInputProps} from '@chakra-ui/react'

interface InputProps extends ChakraInputProps  {
name: string;
} ;

export function Input({name , ...rest}: InputProps) {
  return(
    < ChakraInput
    placeholder={name}
    id = {name}
    name={name}
    focusBorderColor="purple.500"
    bgColor="gray.900"
    variant="filled"
    _hover={{
      bgColor: "gray.900",
    }}
    size="lg"
    {...rest}
  />
  )
}