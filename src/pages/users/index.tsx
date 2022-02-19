import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { SideBar } from "../../components/Form/sidebar";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";

export default function UserList() {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="purple"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar novo Usuário
            </Button>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th width="8" px="6" color="gray.300">
                  <Checkbox colorScheme="purple" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de Cadastro</Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="purple" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Hu Tao</Text>
                    <Text fontSize="sm" color="gray.300">
                      raimundojssoares@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>28 de fevereiro, 2022</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="15" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="purple" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Yoimiya</Text>
                    <Text fontSize="sm" color="gray.300">
                      Yoimiyagenshinimpact@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>05 de março, 2022</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="15" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="purple" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Mona</Text>
                    <Text fontSize="sm" color="gray.300">
                      Monagenshinimpact@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>1 de abril, 2022</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="15" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination/>
        </Box>
      </Flex>
    </Box>
  );
}
