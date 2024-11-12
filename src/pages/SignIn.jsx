import React, { useState } from "react";
import { Box, Input, Button, FormControl, FormLabel, Heading, Text, Link, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Basic validation (could be enhanced)
    if (username && password) {
      navigate("/home"); // Redirect to Home page after successful login
    } else {
      setMessage("Please enter a valid username and password.");
    }
  };

  return (
    <Box p={6} maxW="400px" mx="auto" mt="50px" boxShadow="lg" borderRadius="md">
      <Heading mb={6}>Sign In</Heading>
      <FormControl mb={3}>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
      </FormControl>
      <FormControl mb={3}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
      </FormControl>
      <Button colorScheme="blue" width="100%" onClick={handleSignIn}>
        Sign In
      </Button>
      <br />
      <br />
      <Center>
        <Link textDecoration={"none"} href="/signup" color="blue">
          New user?
        </Link>
      </Center>
      {message && <Text mt={4} color="red.500">{message}</Text>}
    </Box>
  );
};

export default SignIn;
