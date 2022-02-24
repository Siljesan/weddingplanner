import styled from "styled-components";

export const Title = styled.h1`
  font-size: 2rem;
  color: white;
  margin: 1rem;
`;

export const InheritedTitle = styled(Title)`
  font-size: 1.5rem;
`;

export const Titlethree = styled(InheritedTitle)`
  font-size: 1.1rem;
  margin: auto;
`;
