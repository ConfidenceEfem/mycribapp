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
`

const Wrapper = styled.div`
width: 77%;
display:flex;
justify-content: center;

`


const Container = styled.div`
padding: 60px 0;
width: 100%;
/* background-color: ${colors.white}; */
display: flex;
justify-content: center;
`