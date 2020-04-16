import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Landing from './landing';
import AboutMe from './aboutme';
import Resume from './resume';
import Contact from './contact';
import Projects from './projects';
import Skills from './skills';

const Main = () => {
    return(
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/aboutme" component={AboutMe} />
            <Route  path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
            <Route path="/skills" component={Skills} />
        </Switch>
    )
}

export default Main;