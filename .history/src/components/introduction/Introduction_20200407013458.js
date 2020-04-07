import React from 'react';
import Scroll from '../common/Scroll';
import { Container, Row, Col } from 'reactstrap'


const Introduction = () =>
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    {/*<div className="inner">*/}
  <Container>
     <h1>Get OutSide</h1>
      <p style={{color: 'white'}}>
        A Escondido Creek Conservatory and Collaboror Effort
        {' '}
        
      </p>
      <ul className="actions">
        <li>
          <Scroll type="id" element="one">
            <a href="#one" className="button">
              Learn more
            </a>
          </Scroll>
        </li>
      </ul>
      </Container>
{/*</div>*/}
  </section>


export default Introduction;
