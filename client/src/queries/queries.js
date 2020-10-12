import { gql } from "@apollo/client";

const ALL_BOOKS_QUERY = gql`
  query getBooks {
    allBooks {
      name
      genre
      id
    }
  }
`;

const ALL_AUTHORS = gql`
  query {
    allAuthors {
      name
      age
      id
    }
  }
`;

const ADD_BOOK = gql`
mutation AddBook($name: String! , $genre: String!, $authorId: ID!){
    addBook(name: $name , genre: $genre, authorId: $authorId){
      name
    }
}
`

const GET_BOOK = gql`
query GetBook($id: ID!){
    book(id: $id){
      id
      name
      genre
      author{
        id 
        name
        age
        books{
          name
          id
        }
      }
    }
}
`

export { ALL_AUTHORS, ALL_BOOKS_QUERY, ADD_BOOK, GET_BOOK };
