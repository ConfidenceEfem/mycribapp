import styled from "styled-components"

const ErrorMessage = ({error, visible}) => {
    if (!error || !visible) return null;
  return (
    <Text>{error}fff </Text>
  )
}

export default ErrorMessage

const Text = styled.div`
  color: red;
  font-size: 13px;
  margin-bottom: 5px;
  width: 100%;
  font-weight: 500;
  font-family: "montserrat", sans-serif;
`