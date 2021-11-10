// Styled elements for the Card go here

import styled from "styled-components";
import { SectionParagraph, SectionSubheading } from "../../components/Typography";



export const CardTitleAndTextContainer = styled.div`
  margin: 0;
  color: black;
  display: flex;
  flex-direction: column;
  flex-basis: 75%;
  justify-content: center;

`;

export const CardTitleContainer = styled((props) => <SectionSubheading {...props} />)`
  margin: 0;
  font-weight: 600;
  color: black;
  
`;

export const CardTextContainer = styled(({ ...props }) => <SectionParagraph {...props} />)`
  color: black;
  font-family: sans-serif;
  margin: 0;
  text-align: left;
`;

export const CardImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-height: 65rem;  
  height: 100%;
  display: flex;
  align-items: center;
`;

export const CardContainer = styled(({ ...props }) => <div {...props} />)`
  flex-basis: 30%;
  display: flex;
  height: 140px;
  justify-content: center;
  column-gap: 10%;
  background-color: #F4F4F4;
  border-radius: 10px;
  padding: 0 25px;

  :hover {
    border: 2px solid #3D8FFA;
    transition: border .1s ease;
    h3 {
      color: #3D8FFA;
      text-decoration: underline;
    }
  }

  @media (max-width: 1024px) {
    padding: 15px 25px;

  }
`;

export const AllCardsContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
  @media (max-width: 1024px) {
    gap: 20px;
	}
`;