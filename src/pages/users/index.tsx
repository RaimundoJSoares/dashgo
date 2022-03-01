import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Spinner,
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
import { GetServerSideProps } from "next";
import { getUsers, useUsers } from "../../components/services/hooks/useUsers";
import { useState } from "react";

export default function UserList() {
  const [page, setPage] = useState(1)
  const {data, isLoading, error, isFetching } = useUsers(page); 
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
              {!isLoading && isFetching && <Spinner size='md' color='gray.400' ml='4'/>}
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
          {isLoading ? (
           <Flex justify='center'>
             <Spinner />
           </Flex>
         ): error ? (
          <Flex justify='center'>
             <Text>Falha ao obter dados dos usuários</Text>
           </Flex>  
         ) : (
          <><Table colorScheme="whiteAlpha">
                  <Thead>
                    <Tr>
                      <Th width="8" px={["4", "4", "6"]} color="gray.300">
                        <Checkbox colorScheme="purple" />
                      </Th>
                      <Th>Usuário</Th>
                      {isWideVersion && <Th>Data de Cadastro</Th>}
                      <Th width="8"></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data.users.map(user => {
                      return (
                        <Tr key={user.id}>
                          <Td px={["4", "4", "6"]}>
                            <Checkbox colorScheme="purple" />
                          </Td>
                          <Td>
                            <Box>
                              <Text fontWeight="bold">{user.name}</Text>
                              <Text fontSize="sm" color="gray.300">
                                {user.email}
                              </Text>
                            </Box>
                          </Td>
                          {isWideVersion && <Td>{user.createdAt}</Td>}
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
                      );
                    })}
                  </Tbody>
                </Table><Pagination 
                  totalCountOfRegisters={data.totalCount}
                  currentPage={page}
                  onPageChange={setPage}
                  
                /></>
         )}
        </Box>
      </Flex>
    </Box>
  );
}

//export const getServerSideProps: GetServerSideProps = async () => {
  //const {users, totalCount} = await  getUsers(1)

  //return {
    //props:{
      //users
    //}
  //}
//}