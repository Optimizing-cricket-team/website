import React, { useState } from "react";
import { Box, Input, Button, FormControl, FormLabel, Heading, Text, Link, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (username && password) {
      setMessage("Sign-up successful! Redirecting to sign in...");
      setTimeout(() => navigate("/"), 1500); // Redirect to sign in after 1.5 seconds
    } else {
      setMessage("Please enter a username and password.");
    }
  };

  return (
    <Box p={6} maxW="400px" mx="auto" mt="50px" boxShadow="lg" borderRadius="md">
      <Heading mb={6}>Sign Up</Heading>
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
      <Button colorScheme="blue" width="100%" onClick={handleSignUp}>
        Sign Up
      </Button>
      <br />
      <br />
      <Center>
        <Link textDecoration={"none"} href="/" color="blue">
          Already have an account?
        </Link>
      </Center>
      {message && <Text mt={4} color="green.500">{message}</Text>}
    </Box>
  );
};

export default SignUp;
