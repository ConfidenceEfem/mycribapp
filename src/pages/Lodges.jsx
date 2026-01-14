import styled from 'styled-components'
import ListLodgeCard from '../components/cards/ListLodgeCard'
import SearchComponentOverlay from '../components/home/SearchComponentOverlay'
import { useAuthStore } from '../store/useAuthStore'
import { useEffect } from 'react'
import CircularProgressComp from '../components/form/CircularProgressComp'

const Lodges = () => {


  const {getAllLodges, lodges, isGettingAllLodge} = useAuthStore()


  useEffect( ()=>{
   getAllLodges()
  }, [getAllLodges])


  return (
    <Container>
        <SearchComponentOverlay/>
        <Wrapper>
              {
          isGettingAllLodge ? <CircularProgressComp/> : lodges?.length === 0 ? <div>No lodge found</div> : lodges?.map( (item)=> <ListLodgeCard key={item._id} data={item}/>)
        }
   
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