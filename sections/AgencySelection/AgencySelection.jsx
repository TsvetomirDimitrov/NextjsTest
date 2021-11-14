import Image from "next/image";
import {
  AgencySectionContainer,
  StyledCardsContainer,
  FullWidthContainer,
  SectionHeadingsContainer,
  StyledCard,
  StyledVideoContainer,
  StyledSectionHeading,
  StyledSectionSubheading,
  StyledImageContainer,
} from "./elements";

export const AgencySelectionSection = ({
  image,
  cards,
  headingText,
  subheadingText,
  ...props
}) => {
  return (
    <FullWidthContainer>
      <SectionHeadingsContainer>
        <StyledSectionHeading>{headingText}</StyledSectionHeading>

        <StyledSectionSubheading>{subheadingText}</StyledSectionSubheading>
      </SectionHeadingsContainer>

      <AgencySectionContainer>
        <StyledImageContainer>
          <Image
            layout="fixed"
            src={image.src}
            width={image.width}
            height={image.height}
          />
        </StyledImageContainer>

        <StyledVideoContainer />

        <StyledCardsContainer>
          {cards.map((el) => (
            <StyledCard
              src={el.src}
              title={el.title}
              key={el.title}
              text={el.text}
              width={el.width}
              color={el.color}
            />
          ))}
        </StyledCardsContainer>
      </AgencySectionContainer>
    </FullWidthContainer>
  );
};

export default AgencySelectionSection;
