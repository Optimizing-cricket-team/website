import React from "react";
import { Box, FormControl, FormLabel, Select } from "@chakra-ui/react";

const TeamSelection = ({ homeTeam, setHomeTeam, opponentTeam, setOpponentTeam }) => {
  return (
    <Box mb={6}>
      <FormControl>
        <FormLabel>Select Home Team</FormLabel>
        <Select value={homeTeam} onChange={(e) => setHomeTeam(e.target.value)}>
          <option value="India">India</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Australia">Australia</option>
          <option value="England">England</option>
        </Select>
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Select Opponent Team</FormLabel>
        <Select value={opponentTeam} onChange={(e) => setOpponentTeam(e.target.value)}>
          <option value="India">India</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Australia">Australia</option>
          <option value="England">England</option>
        </Select>
      </FormControl>
    </Box>
  );
};

export default TeamSelection;
