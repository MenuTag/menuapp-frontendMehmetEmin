import React from 'react'
import Header from '../components/Header'
import Category from '../components/Category';
import { Button, Card, Container, Row, Dropdown } from 'react-bootstrap';


const Categories = () => {
 
    return (
        <div className="App" style={{ backgroundColor: '#ffffff' }}>
            <Container class="mx-auto" style={{ width: '35rem', borderWidth: 1, borderStyle: 'solid', borderColor: '#dddddd'}}>
                <Header></Header>
                <div class="container mt-3">
                    <div class="row" style={{justifyContent:'center', display: 'flex'}}>
                        <Category title="burger" />
                        <Category title="drink" />
                    </div>
                    <div class="row" style={{justifyContent:'center', display: 'flex'}}>
                        <Category title="pizza" />
                        <Category title="dessert"/>
                    </div>
                    <div class="row" style={{justifyContent:'center', display: 'flex'}}>
                        <Category title="fruit_juices" />
                        <Category title="sandwich"/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Categories