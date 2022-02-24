import { Input as ChakraInput, InputProps as ChakraInputProps} from '@chakra-ui/react'
import {forwardRef, ForwardRefRenderFunction} from 'react'

interface InputProps extends ChakraInputProps  {
name: string;
} ;

export const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({name , ...rest}, ref) => {
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
    ref={ref}
    {...rest}
  />
  )
}

export const Input = forwardRef(InputBase)