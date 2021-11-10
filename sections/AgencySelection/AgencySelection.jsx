import React from 'react'
import { Card } from '../../collections/Card'
import { AllCardsContainer } from '../../collections/Card/elements'
import { SectionBigHeading, SectionSubheading, Video } from '../../components'
import { AgencySelectionContainer, FullWidthContainer, SectionHeadings } from './elements'

const AgencySelectionSection = () => {
	return (
		<>
			{/* h1 */}
			<SectionHeadings>
				<SectionBigHeading>Managed agency selection</SectionBigHeading>
				<SectionSubheading>Strengthen your onboarding process</SectionSubheading>
			</SectionHeadings>
			<FullWidthContainer>

				<AgencySelectionContainer>
					<Video />
					<AllCardsContainer>
						<Card src={"/img/butiful.png"} title={"Brief"} text={"Complete brief writing or simple guidance on what to include, we've got you covered."} width="440px"></Card>

						<Card src={"/img/butiful.png"} title={"Search"} text={"In-depth agency search covering; criteria matching, door knocking and due-dilligence vertting."} width="460px"></Card>

						<Card src={"/img/butiful.png"} title={"Pitch"} text={"Comprehensive pitch management, including comms, diary management and pitch hosting."} width="480px"></Card>
					</AllCardsContainer>
				</AgencySelectionContainer>
			</FullWidthContainer>
		</>
	)
}

export default AgencySelectionSection
