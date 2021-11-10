import styled from "styled-components";

export const AllCardsContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
`;

export const AgencySelectionContainer = styled.div`
	margin: auto auto;
	display: flex;
	column-gap: 75px;
	width: 50%;
	min-height: 500px;
	
	@media (max-width: 1024px) {
		flex-wrap: wrap;
		row-gap: 30px;
		justify-content: center;
	}
`

export const FullWidthContainer = styled.div`
	width: 100%;
	background-image: url("/img/background.png");
	background-repeat: no-repeat;

`

export const SectionHeadings = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
`