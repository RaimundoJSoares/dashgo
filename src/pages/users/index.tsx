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
  useBreakpointValue,
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { SideBar } from "../../components/SideBar/sidebar";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination/Pagination";
import Link from "next/link";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base:false,
    lg:true,
  })
  return (
    <Box>
      <Header />
      <Flex w="100%" my={["4","4","6"]} maxWidth={1480} mx="auto" px={["4","4","6"]}>
        <SideBar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Link href='/users/create' passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="purple"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo Usuário
              </Button>
            </Link>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th width="8" px={["4","4","6"]} color="gray.300">
                  <Checkbox colorScheme="purple" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de Cadastro</Th>}
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4","4","6"]}>
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
                {isWideVersion && <Td>28 de fevereiro, 2022</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme='purple'
                    leftIcon={<Icon as={RiPencilLine} fontSize="15" />}
                  >
                    {isWideVersion ? 'editar' : ''}
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={["4","4","6"]}>
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
                {isWideVersion && <Td>05 de março, 2022</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="15" />}
                  >
                    {isWideVersion ? 'editar' : ''}
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={["4","4","6"]}>
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
                {isWideVersion && <Td>1 de abril, 2022</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="15" />}
                  >
                    {isWideVersion ? 'editar' : ''}
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={["4","4","6"]}>
                  <Checkbox colorScheme="purple" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Jean</Text>
                    <Text fontSize="sm" color="gray.300">
                      Jeangenshinimpact@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>05 de março, 2022</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="15" />}
                  >
                    {isWideVersion ? 'editar' : ''}
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={["4","4","6"]}>
                  <Checkbox colorScheme="purple" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Keking</Text>
                    <Text fontSize="sm" color="gray.300">
                      Kekinggenshinimpact@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>05 de março, 2022</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="15" />}
                  >
                    {isWideVersion ? 'editar' : ''}
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={["4","4","6"]}>
                  <Checkbox colorScheme="purple" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Barbara</Text>
                    <Text fontSize="sm" color="gray.300">
                      Barbaragenshinimpact@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>05 de março, 2022</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="15" />}
                  >
                    {isWideVersion ? 'editar' : ''}
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
