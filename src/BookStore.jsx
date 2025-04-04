import PropTypes from "prop-types";
import Book from "./Book";

function BookStore ({books}){
    return(
        <div>
            {
                books.map(book => <Book book={book} key={book.id}/>)
            }
        </div>
    )
}

BookStore.propTypes = {
    books: PropTypes.array,
}

export default BookStore;