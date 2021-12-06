import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { styled } from '@mui/material/styles';
import { Grid, Paper } from '@mui/material';

// const styles = {
//     // width: '100px',
//     // height: '100px',
//     background: 'blue',
//     color: 'black',
//     display: 'grid'
// }

// const divSize = {
//     width: '200px',
//     height: '100px',
//     background: 'white',
//     margin: '10px 10px 10px 10px',
//     border: '10px solid black'
// }

class Body extends Component {
    render() {
        
        return (
            <div className='yolo-body'>
                <Container fluid>
                    <Row style={{marginTop: '20px', background: '#00adff1f'}}>
                        <h5 style={{fontWeight: '400', fontSize: '18px'}}>API URL:<span style={{marginLeft: '100px'}}></span>{this.props.data[0].api}</h5>
                        <h5 style={{fontWeight: '400', fontSize: '18px'}}>API KEY:<span style={{marginLeft: '100px'}}></span>BTBhJsg6i7GzOkAOPjhPeQBBk%5EjFjWvEl1oB1%S9b8egwxy$6g</h5>
                    </Row>
                    <Row>
                        <Col xs={9}>
                            <h3 style={{margin: '17px 0'}}>Statistics:</h3>
                            <Grid container sx={{ padding: '0px 10%' }} rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: -3 }}>
                                <Grid item xs={12} md={6}>
                                    <Paper style={{paddingTop: '55px'}} className='paper'>
                                        <h3>Total Requests</h3>
                                        <p>0</p>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Paper className='paper'>
                                        <h3>Percentage queries failed to answer</h3>
                                        <p>0.0%</p>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Paper className='paper'>
                                        <h3>Average Rating</h3>
                                        <p>0</p>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Paper className='paper'>
                                        <h3>Total Rating</h3>
                                        <p>0</p>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Body;