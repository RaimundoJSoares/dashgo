import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text fontSize={['2xl', '3x1', '4xl', '5x1']} fontWeight="bold" letterSpacing="tight" w="64">
      Dashgo
      <Text as="span" ml="1" color="purple.400">
        .
      </Text>
    </Text>
  );
}
