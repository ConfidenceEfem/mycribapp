import styled from 'styled-components'
import ListLodgeCard from '../components/cards/ListLodgeCard'
import SearchComponentOverlay from '../components/home/SearchComponentOverlay'

const Lodges = () => {
  return (
    <Container>
        <SearchComponentOverlay/>
        <Wrapper>
        <ListLodgeCard/>
        <ListLodgeCard/>
        <ListLodgeCard/>
        <ListLodgeCard/>

        </Wrapper>
    </Container>
  )
}

export default Lodges

const Wrapper = styled.div`
width: 90%;
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;
`

const Container = styled.div`
padding-top: 100px;
width: 100%;
display:flex;
/* justify-content: center; */
flex-direction: column;
align-items: center;
`