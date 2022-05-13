import { Card, Image, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import IMAGES from "./Images";

function WeatherDisplay(props: any) {
  const [imag, setImag] = useState(IMAGES.clear);

  useEffect(() => {
    selectImage();
    // eslint-disable-next-line
  }, [props.sky]);

  function selectImage() {
    switch (props.sky.toLowerCase()) {
      case 'clear':
        setImag(IMAGES.clear);
        break;
      case 'clouds':
        setImag(IMAGES.cloud);
        break;
      case 'thunderstorm':
        setImag(IMAGES.thunderstorm);
        break;
      case 'rain':
        setImag(IMAGES.rain);
        break;
      case 'snow':
        setImag(IMAGES.snow);
        break;
      case 'mist':
        setImag(IMAGES.mist);
        break;
      default:
        setImag(IMAGES.clear)
        break;
    }
  }

  return (
    <Card className="card-container">
      <Card.Section>
        <Image
          src={imag}
          height={200}
          alt={props.sky}
          withPlaceholder
        />
      </Card.Section>
      <Text align="center">{props.name}</Text>
      <Text>Country: {props.country}</Text>
      <Text>Sky: {props.sky}</Text>
      <Text>Temp: {props.temp} ºC</Text>
    </Card>
  );
}

export default WeatherDisplay;