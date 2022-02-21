import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps{
  showProfileData?:boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
        <Text>HUTAO</Text>
        <Text color="gray.200" fontSize="small">
          raimundojssoares@gmail.com
        </Text>
      </Box>
      )}
      <Avatar
        size="md"
        name="Raimundo Junior"
        src="https://pa1.narvii.com/7876/8022d9dccf952d8837dcd6ba09548be4585b8820r1-547-547_hq.gif"
      />
    </Flex>
  );
}
