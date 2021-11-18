import './App.css';
import styled from 'styled-components';

const Container = styled.div` 
  display: flex;
  justify-content: center;
  flex-direction:column;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 300px;
  overflow: hidden;
  box-shadow: 0px 0px 15px -5px;
  transition: 0.3s;
  :hover{
    transform: scale(1.1);
    box-shadow: 0px 0px 15px 0px;
  }
  font-family: 'Caveat', cursive;
` ;

const Image = styled.img` 
  overflow: hidden;
  height: 200px;
` 
const Title = styled.h2`
// text-align: center;
padding-left: 20px;
font-size: 33px;
`

const Text = styled.p`
// text-align: center;
margin: 1rem;
margin-top: -10px;
font-size: 21px;
`
const Button = styled.button`
margin: 0rem 5rem 1rem 5rem;
padding: 5px 5px;
border: none;
background: none;
border-radius: 3px;
:hover {
  background: #D0D0D0;
}
`

const Link = styled.a`
font-weight: bold;
color: #3d2b1f;
text-decoration: none;
text-transform: uppercase;
font-family: 'Caveat', cursive;
font-size: 18px;
:hover {
  color: #644117;
}
`

function App() {


  return (
    <Container>
            <Image src={'./paella.jpg'} alt=''></Image>
              <Title>Paella Poem</Title>
            <Text>Oh paella!<br/>
                  The queen of the after-dinner meals.<br/>
                  You smell and taste so good.<br/>
                  My tummy is happy with you.<br/>
                  You make Sunday a cool day.<br/>
                  Naps are on another level.<br/>
                  Long live the paella!
            </Text>
            <Button><Link href="https://www.pequerecetas.com/receta/paella-valenciana/"
            target="_blank">See full recipe</Link></Button>
        </Container>
  );
}

export default App;
