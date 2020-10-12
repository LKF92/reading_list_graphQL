import React, {useState} from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ALL_AUTHORS, ADD_BOOK, ALL_BOOKS_QUERY } from "../queries/queries";


export default function AddBook() {
const [name, setName] = useState("")
const [genre, setGenre] = useState("")
const [authorId, setAuthorId] = useState("")
// eslint-disable-next-line
const [addBook, mutationResponse] = useMutation(ADD_BOOK)
const { loading, error, data } = useQuery(ALL_AUTHORS)

  if (loading) return <p>...Loading data...</p>;
  if (error) return <p>Something went wrong...{JSON.stringify(error)}</p>;

  return (
    <form id="add-book" onSubmit={e => {
      e.preventDefault()
      if(name, genre, authorId) addBook({variables: {name, genre, authorId}, refetchQueries:[{query: ALL_BOOKS_QUERY }], awaitRefetchQueries: true})
    }}>
      <div className="field">
        <label htmlFor="nameInput">Name</label>
          <input id="nameInput" name="name" type="text" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div className="field">
        <label htmlFor="genreInput">Genre</label>
          <input id="genreInput" name="genre" type="text" value={genre} onChange={e => setGenre(e.target.value)} />
      </div>
      <div className="field">
        <label htmlFor="selectAuthor">Author</label>
          <select id="selectAuthor" value={authorId} onChange={e => setAuthorId(e.target.value )}>
            <option disabled selected value="">
              Select author
            </option>
            {data.allAuthors.map((author) => (
              <option key={author.id} value={author.id}>{author.name}</option>
            ))}
          </select>
      </div>
      <button>+</button>
    </form>
  );
}
