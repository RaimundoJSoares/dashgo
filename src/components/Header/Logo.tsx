import { Text } from "@chakra-ui/react"

export function Logo() {
  return(
    <Text fontSize='3xl'
    fontWeight='bold'
    letterSpacing='tight'
    w='64'
    >
      I love Programming
      <Text as="span" ml = '1' color='purple.400'>.</Text>
      </Text>
  )
}