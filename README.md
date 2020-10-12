# reading_list_graphQL
A small fullstack project with Apollo and GraphQL to learn how to setup the server with Node and Express and consume the API with React/Apollo

This project is based on [this tutorial](https://www.youtube.com/watch?v=ed8SzALpx1Q) but I decided to change most of it in order to use the most recent syntax for both GraphQL and Apollo :
1. Use of GraphQL SDL (schema definition language) instead of the JavaScript equivalent (GraphQL.js). It is a lot clearer syntax (in my opinion) and it also allowed me to separate the schema definition from the resolver functions in different folders.
2. Use of Apollo Hooks for useQuery and UseMutation. Once again, less code, more readability.
