import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react";
import React from 'react';
import { useSideBarDrawer } from "../../contexts/SideBarDrawer";
import { SideBarNav } from "./SideBarNav";

export function SideBar() {
  const {isOpen, onClose} = useSideBarDrawer()

  const isDrawerSideBar = useBreakpointValue({
    base:true,
    lg: false,
  })
  if(isDrawerSideBar) {
    return(
      
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
      <DrawerOverlay >
        <DrawerContent bg='gray.800'>
          <DrawerCloseButton mt='6'/>
          <DrawerHeader>Navegação</DrawerHeader>
          <DrawerBody>

            <SideBarNav />
            
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
    )
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SideBarNav/>
    </Box>
  );
}
