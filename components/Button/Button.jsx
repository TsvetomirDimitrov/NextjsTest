import { StyledButton, StyledButtonText } from "./elements";

const handleClick = (e) => {
  e.preventDefault();
  window.location.href = '/agencySelection';

}

export const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props} onClick={handleClick}>
      <StyledButtonText>{children}</StyledButtonText>
    </StyledButton>
  );
};
