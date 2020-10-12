import React from 'react'
import {useQuery} from "@apollo/client"
import {GET_BOOK} from '../queries/queries'

export default function BookDetails({bookId}) {
    const {loading, error, data} = useQuery(GET_BOOK, {variables: {id: bookId}})
    if (loading) return <p>...Loading... </p>;
    if (error) return <p>Something went wrong in BookDETAILS... \n {JSON.stringify(error)}</p>;

const {author, genre, name} = data.book

    return (
        <div id="book-details">
            <h2>{name}</h2>
            <p>{genre}</p>
            <p>{author.name}</p>
            <p>All books by this author:</p>
            <ul className="other-books">
                {author.books.map(book => <li key={book.id}>{book.name}</li>)}
            </ul>

        </div>
    )
}
