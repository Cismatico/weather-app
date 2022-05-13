import { Button, Group, TextInput } from "@mantine/core";
import React from "react";

function WeatherSearch(props:any) {
  return (
    <Group>
      <TextInput
            type="text"
            value={props.locations}
            onChange={(e) => props.setLocations(e.target.value)}
            placeholder="Enter city name"
            className="location-input"
          />
          <Button
            className="location-button" onClick={props.handleClick}>
            Search
          </Button>
    </Group>
  );
}

export default WeatherSearch;