import React from 'react';
import './App.css';
import { Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import Main from './components/Main';
import {Link } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title="My Portofolio" scroll>
                <Navigation>
                    <Link to="/resume">Resume</Link>
                    <Link to="/aboutme">AboutMe</Link>
                    <Link to="/skills">Skills</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title="My Portofolio">
                <Navigation>
                    <Link to="/resume">Resume</Link>
                    <Link to="/aboutme">AboutMe</Link>
                    <Link to="/skills">Skills</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                 <Main />
                
            </Content>
        </Layout>
      </div>

    </div>
  );
}

export default App;
