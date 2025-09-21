import styled from "styled-components"
import InputComp from "./InputComp"
import { colors } from "../../config/colors"
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const InputField = ({placeholder,type,isShowPassword, showPassword,style,  ...inputProps}) => {
  return (
    <Container
    style={style}
    >
        <InputComp
        
        placeholder={placeholder}
        type={isShowPassword? "text": type}
        {...inputProps}
        />
        {
            type === "password" ? (!isShowPassword? <VisibilityOffOutlinedIcon onClick={showPassword} style={{color: colors.primary, cursor: 'pointer'}}/>: <VisibilityOutlinedIcon onClick={showPassword} style={{color: colors.primary, cursor: 'pointer'}}/>)  : null
        }
    </Container>
  )
}

export default InputField

const Container = styled.div`
 width: 94%;
  /* height: 80px; */
  border: 1px solid ${colors.primary};
  padding: 5px 8px;
  font-family: "montserrat";
  outline: none;
  border-radius: 5px;
  display:flex;
  align-items: center;
`