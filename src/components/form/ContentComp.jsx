import styled from "styled-components"
import { colors } from "../../config/colors";
import {NavLink, useNavigate} from "react-router"
 
const ContentComp = ({title, subText, reRouteCaption, reRouteFunction, reRouteLabel}) => {

  const navigate = useNavigate()

  return (
    <Content>
              <Title>{title}</Title>
              <SubText>
                {subText}{" "}
                 {reRouteCaption} <Label 
                 onClick={reRouteFunction}
                 >{reRouteLabel}</Label>
              </SubText>
            </Content>
  )
}

export default ContentComp

const Content = styled.div`
text-align: center;
display:flex;
flex-direction: column;
align-items: center;
gap: 15px;
`;

const Label = styled.label`
color: ${colors.primary};
text-decoration: none;
cursor: pointer;
`

const SubText = styled.div`
font-family: "montserrat";
font-size: 13px;
`
const Title = styled.div`
color: ${colors.primary};
font-size: 17px;
`