import React from 'react';
import Scroll from '../common/Scroll';
import { Container, Row, Col } from 'reactstrap'
import '../../css/mystyle.css'

const Introduction = () =>
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    {/*<div className="inner">*/}
  <Container >
    <Row className="topRow">
     <h1 >Get OutSide</h1>
     </Row>
     <Row className="topRow">
      <p style={{color: 'white'}}>
        A Escondido Creek Conservatory and Collaborator Initiative
        {' '}</p>
        </Row>
        <Row className="topRow">
      
      <ul className="actions">
        <li>
          <Scroll type="id" element="one">
            <a href="#one" className="button">
              Learn more
            </a>
            
          </Scroll>
          
        </li>
      </ul>
      </Row>
      </Container>
{/*</div>*/}
  </section>


export default Introduction;
