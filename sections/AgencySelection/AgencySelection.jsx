import React from 'react'
import { Card } from '../../collections/Card'
import { AllCardsContainer } from '../../collections/Card/elements'
import { SectionHeading, SectionParagraph, SectionSubheading, Video } from '../../components'
import { AgencySelectionContainer, FullWidthContainer, SectionHeadings } from './elements'

const AgencySelectionSection = () => {
	return (
		<>
			<SectionHeadings>
				<SectionHeading>Managed agency selection</SectionHeading>
				<SectionSubheading>Strengthen your onboarding process</SectionSubheading>
			</SectionHeadings>

			<FullWidthContainer>

				<AgencySelectionContainer>
					<Video />

					{/*  */}

					<AllCardsContainer>

						<Card src={"/img/briefimgg.png"} title={"Brief"} text={<SectionParagraph>Complete <strong>brief writing or simple guidance</strong> on what to include, we've got you covered.</SectionParagraph>} width="442px" color="#F9F9F9"></Card>

						<Card src={"/img/searchimgg.png"} title={"Search"} text={<SectionParagraph>In-depth agency search covering; <strong>criteria matching,</strong> door knocking and due-dilligence vertting.</SectionParagraph>} width="469px" color="#F4F4F4"></Card>

						<Card src={"/img/pitchimgg.png"} title={"Pitch"} text={<SectionParagraph>Comprehensive <strong>pitch management,</strong> including comms, diary management and pitch hosting.</SectionParagraph>} width="499px" color='#F1F1F1'></Card>
					</AllCardsContainer>
				</AgencySelectionContainer>
			</FullWidthContainer >
		</>
	)
}

export default AgencySelectionSection
