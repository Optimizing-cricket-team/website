import React from "react";
import { Box, FormControl, FormLabel, Select, Radio, RadioGroup, Stack } from "@chakra-ui/react";

const VenueAndTime = ({ venue, setVenue, matchTime, setMatchTime }) => {
  return (
    <Box mb={6}>
      <FormControl>
        <FormLabel>Select Venue</FormLabel>
        <Select value={venue} onChange={(e) => setVenue(e.target.value)}>
          <option value="Mumbai">Mumbai</option>
          <option value="Chennai">Chennai</option>
          <option value="Kolkata">Kolkata</option>
        </Select>
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Select Match Time</FormLabel>
        <RadioGroup onChange={setMatchTime} value={matchTime}>
          <Stack direction="row">
            <Radio value="Day">Day</Radio>
            <Radio value="Night">Night</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default VenueAndTime;
