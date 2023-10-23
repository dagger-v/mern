import { Container, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Table from "./Table";
import UserInfo from "./UserInfo";

const Hero = () => {
  return (
    <div className="py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column hero-card bg-light w-75">
          <UserInfo />
          <Table />
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
