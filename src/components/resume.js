import React , {Component} from 'react';
import {Grid,Card} from 'react-mdl';
class Resume extends Component{
    render() {
        return(
            <Grid className="demo-grid-2">
                 <Card className="resume-right-col" col={2}  style={{minWidth: '20%', margin: '0.5% auto'}}>
                          <img 
                            src="https://www.uap.asia/wp-content/uploads/2017/01/me2.png"
                            alt="avatar"
                            style={{height: '170px', width: '170px'}}
                          /> 
                        <h4 style={{color:' #1f60a9'}}> Hi, I'm Zahra Ashrafi!</h4>
                        <h6 style={{color:'grey',margin: '1px'}}>Software Developer</h6>
                        <p style={{}}>professional with six years experience programming in C#.Net & Ruby on Rails & JavaScript</p>
                        <h5 style={{margin: '1px'}}>Phone</h5>
                        <p>(+98) 903-453-3190</p>
                        <h5 style={{margin: '1px'}}>Email</h5>
                        <p>Z.Ashrafi@yahoo.com</p>
                    </Card>
                    <Card Card className="resume-left-col" col={8} shadow={5} style={{minWidth: '50%', margin: '2% auto',overflowY: 'scroll', backgroundColor: '#ecf2f9'}}>
                          SALAM
                    </Card>
            
        </Grid>
            
        )
    }
}

export default Resume;