import React, { useState } from "react";
import { Box, Input, SimpleGrid, Button, HStack, Text } from "@chakra-ui/react";
import PlayerCard from "../components/PlayerCard"; // Reuse the PlayerCard component
import axios from "axios";

const getData = async()=>{
  const data = await axios.post("https://best-11-team-predictions.onrender.com/");
}

const PlayerSelection = ({ players, selectedPlayers, setSelectedPlayers }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const playersPerPage = 6;
  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPlayers.length / playersPerPage);

  const handlePlayerSelect = (player) => {
    if (selectedPlayers.includes(player)) {
      setSelectedPlayers(selectedPlayers.filter((p) => p !== player));
    } else if (selectedPlayers.length < 11) {
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  const displayedPlayers = filteredPlayers.slice(
    currentPage * playersPerPage,
    currentPage * playersPerPage + playersPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Box>
      <Input
        placeholder="Search Player..."
        mb={4}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Text mb={4}>Select 11 Players</Text>
      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        {displayedPlayers.map((player, index) => (
          <PlayerCard
            key={index}
            player={player}
            onSelect={() => handlePlayerSelect(player)}
            isSelected={selectedPlayers.includes(player)}
          />
        ))}
      </SimpleGrid>

      {/* Pagination Controls */}
      <HStack mt={4} justifyContent="center">
        <Button onClick={handlePreviousPage} isDisabled={currentPage === 0}>
          Previous
        </Button>
        <Text>
          Page {currentPage + 1} of {totalPages}
        </Text>
        <Button onClick={handleNextPage} isDisabled={currentPage === totalPages - 1}>
          Next
        </Button>
      </HStack>
    </Box>
  );
};

export default PlayerSelection;
