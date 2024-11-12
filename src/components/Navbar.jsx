import React from "react";
import { Box, Flex, Button, Heading, Spacer } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/"); // Redirect to Sign In page
  };

  return (
    <Box bg="teal.500" color="white" px={4}>
      <Flex h={16} alignItems="center">
        <Heading size="md">Team Selection App</Heading>
        <Spacer />
        <NavLink to="/home">
          <Button colorScheme="teal" variant="ghost" mr={4}>
            Home
          </Button>
        </NavLink>
        <NavLink to="/add-player">
          <Button colorScheme="teal" variant="ghost" mr={4}>
            Add Player
          </Button>
        </NavLink>
        <Button colorScheme="red" onClick={handleSignOut}>
          Sign Out
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
