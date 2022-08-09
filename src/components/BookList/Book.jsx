import React from "react";
import { Link } from "react-router-dom";
import {  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BookList.css";

const Book = (book) => {
  return (
    <div className="book-item flex flex-column flex-sb">
      <div className="book-item-img">
        <img  src={book.cover_img} alt="cover" />
      </div>
      <div className="book-item-info text-center">
        <Link to={`/book/${book.id}`} {...book}>
          <div className="book-item-info-item title fw-7 fs-18">
            <span>{book.title}</span>
          </div>
        </Link>
        <div className="book-item-info-item author fs-15">
          <span className="text-capitalize fw-7">Author: </span>
          <span>{book.author.join(", ")}</span>
        </div>
        <div className="book-item-info-item edition-count fs-15">
          <span className="text-capitalize fw-7">Total Editions: </span>
          <span>{book.edition_count}</span>
        </div>
        <div className="book-item-info-item publish-year fs-15">
          <span className="text-capitalize fw-7">First Publish Year: </span>
          <span>{book.first_publish_year}</span>
        </div>{" "}
        <button
          style={{
            color: "rgb(34, 194, 146)",
            fontWeight: "bold",
            fontSize: "15px",
            border: "1px solid grey",
            padding: "8px",
            width: "100%",
            marginTop: "3rem",
            marginBottom: "-5rem",
          }}
        >
    Contact Supplier
        </button>
      </div>
    </div>
  );
};

export default Book;
