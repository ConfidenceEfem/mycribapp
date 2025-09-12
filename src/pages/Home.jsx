import styled from 'styled-components'
import Hero from '../components/home/Hero'
import SearchComponentOverlay from '../components/home/SearchComponentOverlay'

const Home = () => {
  return (
    <Container>
    <Hero/>
    <SearchComponentOverlay/>
    </Container>
  )
}

export default Home

const Container = styled.div`
padding-top: 80px;
`