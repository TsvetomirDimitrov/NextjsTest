import React from 'react'
import { AgencySectionContainer, StyledCardsContainer, FullWidthContainer, SectionHeadingsContainer, StyledCard, StyledVideoContainer, StyledSectionHeading, StyledSectionSubheading } from './elements'



export const AgencySelectionSection = ({ cards, headingText, subheadingText, ...props }) => {
	return (
		<FullWidthContainer>
			<SectionHeadingsContainer>
				<StyledSectionHeading>{headingText}</StyledSectionHeading>

				<StyledSectionSubheading>{subheadingText}</StyledSectionSubheading>
			</SectionHeadingsContainer>

			<AgencySectionContainer>
				<StyledVideoContainer />

				<StyledCardsContainer>
					{cards.map(el =>
						<StyledCard src={el.src} title={el.title} text={el.text} width={el.width} color={el.color}></StyledCard>
					)}
				</StyledCardsContainer>
			</AgencySectionContainer>
		</FullWidthContainer >
	)
}

export default AgencySelectionSection
