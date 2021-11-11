import React from 'react'
import { Card } from '../../collections/Card'
import { AllCardsContainer } from '../../collections/Card/elements'
import { SectionBigHeading, SectionHeading, SectionInnerHeading, SectionParagraph, SectionSubheading, SectionTinyHeading, Video } from '../../components'
import { AgencySectionSubheading, AgencySelectionContainer, FullWidthContainer, SectionHeadings } from './elements'

const AgencySelectionSection = (props) => {
	return (
		<>
			<SectionHeadings>
				<SectionBigHeading>Managed agency selection</SectionBigHeading>
				<SectionSubheading>Strengthen your onboarding process</SectionSubheading>
			</SectionHeadings>

			<FullWidthContainer>

				<AgencySelectionContainer>
					<Video />

					<AllCardsContainer>
						<Card src={"/img/briefimg.png"} title={"Brief"} text={"Complete brief writing or simple guidance on what to include, we've got you covered."} width="440px" color="#F9F9F9"></Card>

						<Card src={"/img/searchimg.png"} title={"Search"} text={"In-depth agency search covering; criteria matching, door knocking and due-dilligence vertting."} width="460px" color="#F4F4F4"></Card>

						<Card src={"/img/pitchimg.png"} title={"Pitch"} text={"Comprehensive pitch management, including comms, diary management and pitch hosting."} width="480px" color='#F1F1F1'></Card>
					</AllCardsContainer>
				</AgencySelectionContainer>
			</FullWidthContainer >
		</>
	)
}

export default AgencySelectionSection
