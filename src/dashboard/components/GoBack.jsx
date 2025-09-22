import styled from "styled-components"
import {ArrowLeftOutlined} from "@mui/icons-material"
import { useNavigate } from "react-router"
const GoBack = ({style}) => {

    const navigate = useNavigate()


  return (
    <Container
    style={style}
    onClick={()=>{
      navigate(-1)
    }}
    >
<ArrowLeftOutlined/>
<label>Back</label>

    </Container>
  )
}

export default GoBack

const Container = styled.div`
display:flex;
align-items: center;
cursor: pointer;
label{
  cursor: pointer;
}
`