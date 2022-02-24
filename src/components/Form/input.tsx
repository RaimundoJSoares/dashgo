import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps} from '@chakra-ui/react'
import {forwardRef, ForwardRefRenderFunction} from 'react'
import { FieldError } from 'react-hook-form';

interface InputProps extends ChakraInputProps  {
name: string;
error?: FieldError;
} ;

export const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = 
({name ,error = null, ...rest}, ref) => {
  return(
    <FormControl isInvalid={!!error}>
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
    {!!error && (
      <FormErrorMessage>
        {error.message}
      </FormErrorMessage>
    )}
  </FormControl>
  )
}

export const Input = forwardRef(InputBase)