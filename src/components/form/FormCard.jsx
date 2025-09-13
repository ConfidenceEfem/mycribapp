import styled from "styled-components"
import { colors } from "../../config/colors";
import ContentComp from "./ContentComp";
import React from "react"

const FormCard = ({ children, title, subText, reRouteCaption, reRouteLabel,reRouteFunction  }) => {
  return (
     <Card>
          <CardWrapper>
            <ContentComp
            title={title}
            subText={subText}
            reRouteCaption={reRouteCaption}
            reRouteLabel={reRouteLabel}
            reRouteFunction={reRouteFunction}
        
            />
       
          
            {children}
          </CardWrapper>
        </Card>
  )
}

export default FormCard

const CardWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Card = styled.div`
  width: 450px;
  background-color: ${colors.white};
  border: 1px solid lightgray;
  /* height: 500px; */
  display: flex;
  justify-content: center;
  padding: 20px 0;
  margin-bottom: 20px;
  border-radius: 10px;
`;
