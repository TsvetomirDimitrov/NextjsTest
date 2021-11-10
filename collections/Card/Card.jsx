// The Card to be exported goes here

import { CardContainer, CardImageContainer, CardTextContainer, CardTitleAndTextContainer, CardTitleContainer } from "./elements"
import Image from 'next/image'

export const Card = (props) => {
	return (
		<CardContainer {...props}>
			<CardImageContainer><Image
				src={props.src}
				width={60}
				height={60}
			/>
			</CardImageContainer>

			<CardTitleAndTextContainer>
				<CardTitleContainer>
					{props.title}
				</CardTitleContainer>

				<CardTextContainer>
					{props.text}
				</CardTextContainer>
			</CardTitleAndTextContainer>

		</CardContainer>
	)
}
