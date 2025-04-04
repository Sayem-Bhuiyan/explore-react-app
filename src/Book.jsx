import PropTypes from "prop-types";
import "./Book.css"

const Book = ({book}) => {
    const {name, price} = book;
    return (
        <div className="book">
            <h2>Book Name: {name}</h2>
            <p>Price: {price}</p>
        </div>
    )
}

Book.propTypes = {
    book: PropTypes.object,
}

export default Book;