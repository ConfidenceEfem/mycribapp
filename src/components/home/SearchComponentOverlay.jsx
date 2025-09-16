import styled from "styled-components"
import { colors } from "../../config/colors"
const SearchComponentOverlay = () => {
  return (
    <Container>
        <Wrapper>
            <SearchComp>
                <SearchCompWrapper>
                    <SearchInput>
                        <SearchOption>Location</SearchOption>
                    </SearchInput>
                    <SearchInput>
                        <SearchOption>Type</SearchOption>
                    </SearchInput>
                    <SearchInput>
                        <SearchOption>Price Range</SearchOption>
                    </SearchInput>
                </SearchCompWrapper>
            </SearchComp>
        </Wrapper>
    </Container>
  )
}

export default SearchComponentOverlay

const SearchOption = styled.option`
`

const SearchInput = styled.select`
height: 55px;
border: 1px solid ${colors.primary};
background-color: white;
padding: 0px 15px;
    font-family: "Mochiy Pop P One", sans-serif;
    color: ${colors.primary};
    outline: none;
`
const SearchCompWrapper = styled.div`
width: 88%;
display:grid;
grid-template-columns: repeat(3,1fr);
grid-column-gap: 20px;
@media screen and (max-width: 500px){
   grid-template-columns: repeat(1, 1fr);
   grid-row-gap: 20px;
}
`

const SearchComp = styled.div`
width: 100%;
background-color: white;
border-radius: 15px;
height: 120px;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid lightgray;
@media screen and (max-width: 500px){
   height: auto;
   padding: 20px 0;
}
`

const Wrapper = styled.div`
width: 77%;
display:flex;
justify-content: center;
@media screen and (max-width: 700px){
    width: 90%;
}
`


const Container = styled.div`
padding-bottom: 40px;
width: 100%;
/* background-color: ${colors.white}; */
display: flex;
justify-content: center;
`