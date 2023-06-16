import React from "react";
import BookDetails from "./BookDetails";
import Message from "./Message";

const book = {
  ID: "001",
  author: "Gabriel Suarez",
  categories: [
    {
      name: "Futbol",
    },
    {
      name: "React",
    },
  ],
  language: "Español",
  pages: "500 pg",
  publisher: "www.GabrielSuarez.com",
  publisher_date: "19/09/2002",
  tags: [
    {
      name: "Adriana",
    },
    {
      name: "Franky",
    },
  ],
  title: "Gabriel's Life",
  url_download: "https://github.com/GabrielSB19",
};

const BookList = ({ books }) => {
  console.log(books);
  return (
    <div>
      {books.name || books.err || books.length === 0 ? (
        <Message
          msg={"No se encontraron Libros en esta busqueda"}
          bgColor="#808080"
        />
      ) : (
        <>
          <h2>Libros Encontrados</h2>
          {books.map((el) => (
            <BookDetails key={el.ID} el={el} />
          ))}
        </>
      )} 
      <BookDetails el={book}/>
    </div>
  );
};

export default BookList;
