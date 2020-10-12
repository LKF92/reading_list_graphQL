import React, {useState} from "react";
import { useQuery } from "@apollo/client";
import { ALL_BOOKS_QUERY } from "../queries/queries";
import BookDetails from "./BookDetails"

export default function BookList() {
  const [bookId, setBookId] = useState("")
  const { loading, error, data } = useQuery(ALL_BOOKS_QUERY);
  if (loading) return <p>...Loading... </p>;
  if (error) return <p>Something went wrong... \n {JSON.stringify(error)}</p>;
  
  return (
    <div>
      <ul id="book-list">
        {data.allBooks.map((book) => (
          <li key={book.id} onClick={()=> setBookId(book.id)}>{book.name}</li>
        ))}
      </ul>
      <div>
        {bookId && <BookDetails bookId={bookId} />
        }
      </div>
    </div>
  );
}
