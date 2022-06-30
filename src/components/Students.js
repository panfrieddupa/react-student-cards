import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './studentlist.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

function Students({ cards }) {

    return (
        <Router>

            <Card className='Students'>
                <Card.Img variant='top' src={require(`../img/${cards.image}`)} />
                <Card.Body>
                    <Card.Title className='card-title'>{cards.name}</Card.Title>
                    <Card.Text className='card-text'>
                    <Routes>
                        <Route path={`/grade/${cards.name}`} element={`${cards.gpa}`}></Route>
                    </Routes>
                    </Card.Text>
                    <Link to={`/grade/${cards.name}`}>
                        <Button>Show Grade</Button>
                    </Link>
                    </Card.Body>
                    </Card>
    </Router>
    )
}

export default Students;
