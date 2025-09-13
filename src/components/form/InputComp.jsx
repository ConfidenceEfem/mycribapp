import styled from "styled-components";
import { colors } from "../../config/colors";

const InputComp = ({ placeholder, ...inputProps }) => {
  return <Input placeholder={placeholder} {...inputProps} />;
};

export default InputComp;

const Input = styled.input`
  width: 100%;
  height: 35px;
  border: none;
  /* padding: 5px 12px; */
  font-family: "montserrat";
  outline: none;
  @media screen and (max-width: 500px){
font-size: 13px;
}
`;
