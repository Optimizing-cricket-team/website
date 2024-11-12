import React, { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Text,
} from "@chakra-ui/react";
import indiaData from "../data/india.json";
import pakistanData from "../data/pakistan.json";

const AddPlayerWithTeams = () => {
  // State for both teams
  const [indiaPlayers, setIndiaPlayers] = useState(indiaData);
  const [pakistanPlayers, setPakistanPlayers] = useState(pakistanData);

  // Form state
  const [name, setName] = useState("");
  const [type, setType] = useState("batsman");
  const [team, setTeam] = useState("India");
  const [strikeRate, setStrikeRate] = useState("");
  const [economyRate, setEconomyRate] = useState("");
  const [message, setMessage] = useState("");

  // Handle adding a player to the selected team
  const handleAddPlayer = () => {
    const newPlayer = {
      name,
      type,
      strikeRate: parseFloat(strikeRate) || 0,
      economyRate: parseFloat(economyRate) || 0,
    };

    if (team === "India") {
      setIndiaPlayers([...indiaPlayers, newPlayer]);
    } else {
      setPakistanPlayers([...pakistanPlayers, newPlayer]);
    }

    // Show confirmation message
    setMessage(`Player ${name} added to ${team}!`);
    // Clear form fields
    setName("");
    setStrikeRate("");
    setEconomyRate("");
  };

  return (
    <Box
      p={6}
      maxW="500px"
      mx="auto"
      mt="50px"
      boxShadow="lg"
      borderRadius="md"
    >
      <Heading mb={6}>Add New Player</Heading>
      <FormControl mb={3}>
        <FormLabel>Player Name</FormLabel>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter player name"
        />
      </FormControl>
      <FormControl mb={3}>
        <FormLabel>Player Type</FormLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="batsman">Batsman</option>
          <option value="bowler">Bowler</option>
          <option value="allrounder">Allrounder</option>
        </Select>
      </FormControl>
      <FormControl mb={3}>
        <FormLabel>Team</FormLabel>
        <Select value={team} onChange={(e) => setTeam(e.target.value)}>
          <option value="India">India</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Australia">Australia</option>
          <option value="England">England</option>
        </Select>
      </FormControl>

      <FormControl mb={3}>
        <FormLabel>Strike Rate</FormLabel>
        <Input
          value={strikeRate}
          onChange={(e) => setStrikeRate(e.target.value)}
          placeholder="Enter strike rate"
        />
      </FormControl>
      <FormControl mb={3}>
        <FormLabel>Economy Rate</FormLabel>
        <Input
          value={economyRate}
          onChange={(e) => setEconomyRate(e.target.value)}
          placeholder="Enter economy rate"
        />
      </FormControl>
      <Button colorScheme="blue" width="100%" onClick={handleAddPlayer}>
        Add Player
      </Button>
      {message && (
        <Text mt={4} color="green.500">
          {message}
        </Text>
      )}

      {/* Display team players */}
      <Box mt={8}>
        <Heading size="md">India Team</Heading>
        {indiaPlayers.map((player, index) => (
          <Text key={index}>
            {player.name} - {player.type}
          </Text>
        ))}
      </Box>

      <Box mt={8}>
        <Heading size="md">Pakistan Team</Heading>
        {pakistanPlayers.map((player, index) => (
          <Text key={index}>
            {player.name} - {player.type}
          </Text>
        ))}
      </Box>
    </Box>
  );
};

export default AddPlayerWithTeams;
