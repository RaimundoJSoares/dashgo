import { Flex, Stack, Input, Button } from "@chakra-ui/react";

export default function Home() {
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
          <Input
            placeholder="Email"
            type="email"
            name="email"
            focusBorderColor="purple.500"
            bgColor="gray.900"
            variant="filled"
            _hover={{
              bgColor: "gray.900",
            }}
            size="lg"
          />
          <Input
            type="password"
            name="password"
            focusBorderColor="purple.500"
            bgColor="gray.900"
            variant="filled"
            _hover={{
              bgColor: "gray.900",
            }}
            size="lg"
            placeholder="Senha"
          />
        </Stack>

        <Button type="submit" mt="6" colorScheme="purple" size='lg'>
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
