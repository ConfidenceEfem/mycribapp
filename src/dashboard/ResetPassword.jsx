import React from 'react'
import styled from "styled-components"
import InputField from '../components/form/InputField'
import Button from '../components/Button'
import ErrorMessage from '../components/form/ErrorMessage'
import GoBack from './components/GoBack'

const ResetPassword = () => {
  return (
    <Container>
        <Wrapper>
          <GoBack/>
            <FormHolder>
                <Div>
                <ErrorMessage/>
                <InputField
                style={{
                    width: "100%"
                }}
                placeholder={"Current Password"}
                />
                </Div>
                <Div>
                    <ErrorMessage/>
                <InputField

                 style={{
                    width: "100%"
                }}
                placeholder={"New Password"}

                />
                </Div>
                <Button text={"Update Password"}/>
            </FormHolder>
        </Wrapper>
    </Container>
  )
}

export default ResetPassword

const Div = styled.div`
width: 100%;
`

const FormHolder = styled.div`
width: 320px;
display: flex;
flex-direction: column;
gap: 20px;
`


const Wrapper = styled.div`
  display: flex;
 
  width: 88%;
  flex-direction: column;
  gap: 40px;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 40px 0px;
  height: 100%;
`;
