import { Box, Stack, Text } from "@chakra-ui/react";


export function SideBar(){
  return (
    <Box as='aside' w='64' mr='8'>
      <Stack spacing='12' align='flex-start'>
        <Box>
          <Text fontWeight='bold' fontSize='small' color='gray.400'> STAFF</Text>
          <Stack spacing='4'></Stack>
        </Box>
      </Stack>
    </Box>
  )
}