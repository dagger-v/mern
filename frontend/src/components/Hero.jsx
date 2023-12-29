import { Container, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Featured from "./featured/Featured";
import CardList from "./cardList/CardList";
import Menu from "./Menu/Menu";
import Stories from "./stories/Stories";

const Hero = () => {
  return (
    <div>
      <Container>
        <Featured />
        <div>
          <Stories />
          <CardList />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
