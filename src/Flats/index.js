import Header from "../Header"
import Item from "../Items"
import "./index.css"

const list=[
    {id:1,
     price:500000,
     rooms:"2BHK",
     image:"https://i.ibb.co/6RZnHqH/house-middleclass-1.jpg"
    },
    {id:2,
        price:1000000,
        rooms:"3BHK",
        image:"https://i.ibb.co/47b8b9j/istockphoto-1390233984-612x612.jpg"
       },

       {id:3,
        price:1200000,
        rooms:"5BHK",
        image:"https://i.ibb.co/6RZnHqH/house-middleclass-1.jpg"
       },
       {id:4,
        price:1900000,
        rooms:"4BHK",
        image:"https://i.ibb.co/47b8b9j/istockphoto-1390233984-612x612.jpg"
       }
]

const Flats = () => {
   return(
    <div className="flatcontainer">
        <Header/>
        <div className="lower">
        <ul className="unorder">
            {list.map(each => (
                <Item key={each.id} eac={each}/>
            ))}
        </ul>
        </div>
    </div>
   )
}
export default Flats