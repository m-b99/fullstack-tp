import './App.css';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import React from 'react';
import {Cours} from './components/Cours' ;
import {Module} from './components/Module' ; 
import {Bienvenue} from './components/Bienvenue' ;
import {Navigationbar} from './components/Navigatiobar'

function App() {
  return (
    <Router>
      <Navigationbar />
      <Container>
        <Row>
          <Col lg={12} style={{marginTop : "20px"}} >
            <Switch>
              <Route exact path='/' >
                  <Bienvenue />
              </Route>
              <Route exact path='/cours' >
                  <Cours />
              </Route>
              <Route exact path='/module' >
                  <Module />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
