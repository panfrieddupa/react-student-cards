import React from 'react'
import Students from './Students';

function StudentList() {

    const cardInfo = [
        {
            image: 's1.png',
            name: 'Mike',
            gpa: 3.8
        },
        {
            image: 's2.png',
            name: 'Manal',
            gpa: 3.6
        },
        {
            image: 's3.png',
            name: 'Moe',
            gpa: 3.2
        },
        {
            image: 's4.png',
            name: 'Mary',
            gpa: 2.6
        }
    ]

    const cardMap = cardInfo.map(cards => <Students cards={cards} />)

    return <div className='inline-block-display'>
        <h1>Students List</h1>
        <div className='card-grid'>
                    {cardMap}
                    </div>
    </div>
}

export default StudentList;
