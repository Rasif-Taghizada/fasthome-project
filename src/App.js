import React from 'react'
import Navbar from './components/Header/Navbar'
import Main from './components/Main/Main.jsx'
import Card from './components/Cards/Sales_Card.jsx'
import RentalCard from './components/Cards/Rental_Card.jsx'
import image from './Images/Background image.jpg'
import image1 from './Images/Rental BG.jpg'
import icon1 from './Images/stairs-with-handrail 1.svg'
import icon2 from './Images/Group.svg'
import icon3 from './Images/keyboard-key-m 1.svg';
const App = () => {
    const Data = [
        {
            image: image,
            count: "290.000 $",
            description: "Apartment for sale",
            area: "London, Oxford St.",
            date: "26 November 2020",
            room: "3+1",
            staircase: 10,
            size: "150 m²",
            icon1: icon1,
            icon2: icon2,
            icon3: icon3
        },
        {
            image: image,
            count: "290.000 $",
            description: "Apartment for sale",
            area: "London, Oxford St.",
            date: "26 November 2020",
            room: "3+1",
            staircase: 10,
            size: "150 m²",
            icon1: icon1,
            icon2: icon2,
            icon3: icon3
        },
        {
            image: image,
            count: "290.000 $",
            description: "Apartment for sale",
            area: "London, Oxford St.",
            date: "26 November 2020",
            room: "3+1",
            staircase: 10,
            size: "150 m²",
            icon1: icon1,
            icon2: icon2,
            icon3: icon3
        },
        {
            image: image,
            count: "290.000 $",
            description: "Apartment for sale",
            area: "London, Oxford St.",
            date: "26 November 2020",
            room: "3+1",
            staircase: 10,
            size: "150 m²",
            icon1: icon1,
            icon2: icon2,
            icon3: icon3
        },
    ]

    const Data2 = [
        {
            image: image1,
            count: "3.000 $",
            description: "Apartment for rent",
            area: "London, John Ruskin St.",
            date: "20 November 2020",
            room: "2+1",
            staircase: 7,
            size: "110 m²",
            icon1: icon1,
            icon2: icon2,
            icon3: icon3
        },
        {
            image: image1,
            count: "3.000 $",
            description: "Apartment for rent",
            area: "London, John Ruskin St.",
            date: "20 November 2020",
            room: "2+1",
            staircase: 7,
            size: "110 m²",
            icon1: icon1,
            icon2: icon2,
            icon3: icon3
        },
        {
            image: image1,
            count: "3.000 $",
            description: "Apartment for rent",
            area: "London, John Ruskin St.",
            date: "20 November 2020",
            room: "2+1",
            staircase: 7,
            size: "110 m²",
            icon1: icon1,
            icon2: icon2,
            icon3: icon3
        },
        {
            image: image1,
            count: "3.000 $",
            description: "Apartment for rent",
            area: "London, John Ruskin St.",
            date: "20 November 2020",
            room: "2+1",
            staircase: 7,
            size: "110 m²",
            icon1: icon1,
            icon2: icon2,
            icon3: icon3
        },
    ]

    return (
        <div>
            <Navbar />
            <Main />
            <Card props={Data}/>
            <RentalCard props={Data2}/>
        </div>
    )
}

export default App