import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrent?:boolean;
  number: number;
  onPageChange:(page: number) => void;
}

export function PaginationItem({isCurrent = false, onPageChange, number}: PaginationItemProps) {
  if(isCurrent){
    return(
      <Button
      size='sm'
      fontSize='xs'
      width='4'
      colorScheme="purple"
      _disabled={{
        bgColor: 'purple.900',
        cursor: 'default',
      }}
      >
        {number}
      </Button>
    )
  }

  return (
    <Button
    size='sm'
    fontSize='xs'
    width='4'
    bgColor='gray.700'
    _hover={{
      bgColor:'gray.500'
    }}
    onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  )
}