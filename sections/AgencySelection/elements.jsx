import styled from "styled-components";

export const AllCardsContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
`;

export const AgencySelectionContainer = styled.div`
	margin: auto auto;
	display: flex;
	justify-content: center;
	column-gap: 75px;
	min-height: 500px;
	background-image: url("/img/background.png");
	background-repeat: no-repeat;
	background-size: contain;
	background-position-x: 25%;

	@media (max-width: 1024px) {
		flex-wrap: wrap;
		row-gap: 30px;
		justify-content: center;
	}
`

export const FullWidthContainer = styled.div`
	width: 100%;
`

export const SectionHeadings = styled.div`
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
`
