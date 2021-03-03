import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Container } from 'reactstrap';

const Footer = () =>{
    return(
        <Jumbotron fluid className="footer">
            <style>
                {`.footer{
                    background-color: #FAB92D;
                    color: #fff;
                    padding-top: 10px;
                    padding-bottom: 10px;
                    margin-bottom: 0rem !important
                }`}
            </style>
            <Container>
                <h1 className="lead">Footer</h1> 
            </Container>
            
        </Jumbotron>
    )
}

export default Footer