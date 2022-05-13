import { Badge } from "@mantine/core";


function BotContainer() {
  return (
    <div className="bot-container">
      <Badge<'a'>
        component="a"
        target="_blank"
        href="https://github.com/Cismatico"
        variant="outline"
        size="lg">
        App by Cismatico
      </Badge>
    </div>
  );
}

export default BotContainer;