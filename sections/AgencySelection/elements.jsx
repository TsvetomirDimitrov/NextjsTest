import styled from "styled-components";
import { SectionContainer } from "../../components";
import { SectionHeading, SectionSubheading, Video } from "~/components";
import { AllCardsContainer } from "../../collections/Card/elements";
import { Card } from "../../collections/Card";

export const StyledCard = styled(({ ...props }) => <Card {...props} />)``;

export const StyledVideoContainer = styled(({ ...props }) => (
  <Video {...props} />
))``;

export const StyledCardsContainer = styled(({ ...props }) => (
  <AllCardsContainer {...props} />
))`
  display: flex;
  flex-direction: column;
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  position: absolute;
  display: block;
  z-index: -1;
  height: 100%;
  width: 100%;
  text-align: center;
  left: -11%;

  @media (max-width: 1024px) {
    left: 0;
  }
`;

export const AgencySectionContainer = styled(({ ...props }) => (
  <SectionContainer {...props} />
))`
  position: relative;
  margin: 5% auto;
  display: flex;
  justify-content: center;
  column-gap: 75px;
  min-height: 500px;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    row-gap: 30px;
    justify-content: center;
  }
`;

export const FullWidthContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const SectionHeadingsContainer = styled.div`
  text-align: center;
  margin-bottom: 50px;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
`;
export const StyledSectionHeading = styled(({ ...props }) => (
  <SectionHeading {...props} />
))``;

export const StyledSectionSubheading = styled(({ ...props }) => (
  <SectionSubheading {...props} />
))``;
