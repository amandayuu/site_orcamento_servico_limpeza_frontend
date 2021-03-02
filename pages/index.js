import React from 'react'
import { Jumbotron, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../style/Index.module.css'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

function Homepage() {
    return (
        <div>
            <Menu />
            <Jumbotron fluid className={styles.descriptionTop}>
                <Container className="text-center">
                    <h1 className="display-4">Clean & Clean</h1>
                    <p>Bacon ipsum dolor amet chicken meatloaf beef cow prosciutto shankle frankfurter sausage chislic bresaola.</p>
                </Container>
            </Jumbotron>
            <Jumbotron fluid className='services'>
                <style>
                    {`.services{
                        background-color: #fff;
                        margin-bottom: 0rem !important;
                    }.circle{
                        width: 140px;
                        height: 140px;
                        background-color: #FA5FAC;
                        font-size: 52px;
                        color: #fff;
                        padding-top: 24px;
                    }.centralize{
                        margin: 0 auto !important;
                        float: none !important;
                    }`}
                </style>
                <Container className="text-center">
                    <h2 className="display-4">Serviços oferecidos</h2>
                    <p className="lead pb-4">
                        Cow ham chislic brisket, strip steak drumstick leberkas beef salami ham hock. Pancetta landjaeger shoulder drumstick.
                    </p>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="rounded-circle circle centralize">
                            </div>
                            <h2 className="mt-4 mb-4">Serviço 2</h2>
                            <p>
                                Pork belly tail chicken venison pancetta kevin short ribs salami tri-tip cow biltong pork.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <div className="rounded-circle circle centralize">
                            </div>
                            <h2 className="mt-4 mb-4">Serviço 2</h2>
                            <p>
                                Pork belly tail chicken venison pancetta kevin short ribs salami tri-tip cow biltong pork.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <div className="rounded-circle circle centralize">
                            </div>
                            <h2 className="mt-4 mb-4">Serviço 3</h2>
                            <p>
                                Pork belly tail chicken venison pancetta kevin short ribs salami tri-tip cow biltong pork.
                            </p>
                        </div>
                    </div>
                </Container>
            </Jumbotron>
            <Footer />
        </div>
    )
}

export default Homepage