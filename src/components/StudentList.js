import React from "react"

function StudentList () {

    const cardInfo = [
        {
          image: "s1.png",
          name: "Mike",
          gpa: 3.8
        },
        {
          image: "s2.png",
            name: "Manal",
            gpa: 3.6
        },
        {
          image: "s3.png",
            name: "Moe",
            gpa: 3.2
        },
        {
          image: "s4.png",
            name: "Mary",
            gpa: 2.6
        }
      ]

      const listMap = cardInfo.map(cardInfo => <Cards cardInfo = {cardInfo} />)
      
      return listMap
}

export default StudentList;