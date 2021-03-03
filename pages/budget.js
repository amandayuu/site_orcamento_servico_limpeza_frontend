import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import HeadComponent from '../components/HeadComponent'
import Menu from '../components/MenuComponent'
import Footer from '../components/FooterComponent'

function Budget() {
    return (
        <div>
            <HeadComponent>
                Orçamento - Clean & Clean
                <meta name="description" content="Site de serviços de limpeza - orçamento de serviços de limpeza" />
            </HeadComponent>
            <Menu />
            <Jumbotron fluid className="desc-top">
                <style>
                    {`.desc-top{
                        background-color: #4584FA;
                        color: whitesmoke;
                        margin-bottom: 0rem !important;
                        padding-top: 40px;
                        padding-bottom: 40px;
                        }`
                    }
                </style>
                <Container>
                    <h1 className="display-4">Orçamento</h1>
                </Container>
            </Jumbotron>
            <Jumbotron fluid className="budget-form">
                    <style>
                        {`.budget-form{
                            padding-top: 80px;
                            padding-bottom: 80px;
                            margin-bottom: 0rem !important;
                            background-color: #fff;
                        }`}
                    </style>
                    <Container>
                        <Form>
                            <FormGroup>
                                <Label for="name">Nome</Label>
                                <Input type="text" name="name" id="name" placeholder="Preenche com o nome completo" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">E-mail</Label>
                                <Input type="email" name="email" id="email" placeholder="Preenche com o seu e-mail" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="phone">Telefone para contato</Label>
                                <Input type="text" name="phone" id="phone" placeholder="(XX) XXXXX-XXXX" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="whatsapp">Whatsapp</Label>
                                <Input type="text" name="whatsapp" id="whatsapp" placeholder="(XX) XXXXX-XXXX" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="service">Fale um pouco do serviço desejado</Label>
                                <Input type="textarea" name="service" id="service" placeholder="Fale sobre o serviço desejado" />
                            </FormGroup>
                            <Button type="submit" outline color="primary">Solicitar</Button>
                        </Form>
                    </Container>
            </Jumbotron>
            <Footer />
        </div>
    )
}

export default Budget