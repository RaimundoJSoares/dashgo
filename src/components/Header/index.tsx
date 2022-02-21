import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSideBarDrawer } from "../../contexts/SideBarDrawer";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export default function Header() {
  const { onOpen} = useSideBarDrawer()

  const isWideVersion = useBreakpointValue({ //quero por padrão que o nome e email não estejam visiveis na versao mobile, só quando passar do tamanho large
    base:false,
    lg:true,
  })

  return (
    <Flex
      as="header"
      mt="4"
      maxWidth={1480}
      h="20"
      marginX="auto"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
        aria-label="Open-navigation"
        icon={<Icon as={RiMenuLine} />}
        fontSize='24'
        variant='unstyled'
        onClick={onOpen}
        mr='2'
        >

        </IconButton>
      )}

      <Logo />
      {isWideVersion && 
          <SearchBox />
      }
      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
