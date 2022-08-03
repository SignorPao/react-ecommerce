import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  max-height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
`;

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
  text-transform: uppercase;
  color: white;
  margin-bottom: 20px;
  text-align: center;
`;

const Button = styled.button`
  border: none;
  padding: 10px 20px;
  background-color: white;
  color: black;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.6s ease;
  &:hover{
    transform: scale(1.2);
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
