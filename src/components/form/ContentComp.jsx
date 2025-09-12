import styled from "styled-components"
import { colors } from "../../config/colors";
 
const ContentComp = ({title, subText, reRouteCaption, reRouteLink, reRouteLabel}) => {
  return (
    <Content>
              <Title>{title}</Title>
              <SubText>
                {subText}{" "}
                 {reRouteCaption} <Label>{reRouteLabel}</Label>
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
`

const SubText = styled.div`
font-family: "montserrat";
font-size: 13px;
`
const Title = styled.div`
color: ${colors.primary};
font-size: 17px;
`