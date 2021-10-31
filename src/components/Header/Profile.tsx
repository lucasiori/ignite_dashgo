import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Lucas Iori</Text>
        <Text color="gray.300" fontSize="small">
          lucasferiori@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Lucas Iori" src="https://github.com/lucasiori.png" />
    </Flex>
  );
}