import { Box, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface NaveSectionProps {
  title: string;
  children: ReactNode;
}
export function NavSection({ title, children }: NaveSectionProps) {
  return (
    <Box>
      <Text fontWeight="bold" fontSize="small" color="gray.400">{title}</Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}
