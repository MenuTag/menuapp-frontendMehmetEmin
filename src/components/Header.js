import React from 'react'
import { Button, Card, Container, Row, Dropdown } from 'react-bootstrap';
import { useState } from 'react';
import TurkishFlag from '../images/turkish_flag.jpg'
import EnglishFlag from '../images/english_flag.jpg'



const Header = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("Turkce");
    return (
        <Row>
            <div class="col-auto pe-0 ms-2 mt-4">
                {selectedLanguage === 'Turkce' ? (
                    <img src={TurkishFlag} width="26px" height="26px" alt="Turkish flag" />
                ) : selectedLanguage === 'English' ? (
                    <img src={EnglishFlag} width="29px" height="29px" alt="English flag" />
                ) : null}
            </div>
            <div class="col ps-0 ms-2" style={{ textAlign: 'left', marginTop: "20px" }}>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {selectedLanguage}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item value="Turkce" onClick={() => { setSelectedLanguage("Turkce") }}>Türkçe</Dropdown.Item>
                        <Dropdown.Item value="English" onClick={() => { setSelectedLanguage("English") }}>English</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </Row>
    )
}

export default Header;