import React from 'react'
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Card, Container, Row, Dropdown } from 'react-bootstrap';
import logo from '../images/logo.jpg'
import fb from '../images/facebook_logo.png'
import ig from '../images/instagram_logo.png'
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
const Home = () => {

    const translations = {
        tr: {
          welcome: "Hoş geldiniz",
          goToMenu: "Menüye Git",
          poweredBy: "Powered By"
        },
        en: {
          welcome: "Welcome",
          goToMenu: "Go To Menu",
          poweredBy: "Powered By"
        }
      };

    const navigate = useNavigate();
    const [selectedLanguage, setSelectedLanguage] = useState("Turkce");

    const handleLanguageChange = (e) => {
        const a = e.target.value;
        setSelectedLanguage(a);
        console.log(e.target.value);
    };

    return (
        <div className="App" style={{ backgroundColor: '#ffffff' }}>
            <Container class="mx-auto" style={{ width: '35rem', borderWidth: 1, borderStyle: 'solid', borderColor: '#dddddd' }}>
                <Header></Header>
                <Row>
                    <div class="mx-auto mt-4" style={{ width: '270px', height: '270px', borderRadius: '50%', overflow: 'hidden', border: '4px solid #e0e0e0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={logo} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                    </div>
                </Row>
                <Row style={{ marginTop: "25px" }}>
                    <h4 class="mt-3"> INARI OMAKASE </h4>
                </Row>
                <Row class="mx-auto" style={{ textAlign: 'center' }}>
                    <a> Welcome </a>
                </Row>
                <Row class="mt-5 mx-auto" style={{ justifyContent: 'center', marginTop: "40px" }} >
                    <Button variant="danger col-4" onClick={()=> {navigate('/Categories');}}>Go To Menu</Button>
                </Row>
                <Row class="mx-auto" style={{ justifyContent: 'center', marginTop: "22px" }} >
                    <div class="col" style={{ textAlign: 'right' }}>
                        <img src={fb} width="26px" height="26px" alt="Facebook" />
                    </div>
                    <div class="col" style={{ textAlign: 'left' }}>
                        <img src={ig} width="26px" height="26px" alt="Instagram" />
                    </div>
                </Row>
                <Row>
                    <div class="col d-flex flex-column" style={{ marginTop: "60px" }}>
                        <a>Powered By</a>
                        <a>Tayfur</a>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Home