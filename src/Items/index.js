import "./index.css"

const Item = (props) => {
    const {eac} = props
    return (
        <li className="eachcontainer">
          <img src={eac.image} alt={eac.rooms} className="itemimg"/>
          <p className="para">ROOMS:{eac.rooms}</p>
          <p className="para">PRICE:{eac.price}/-</p>
        </li>
    )
}
export default Item