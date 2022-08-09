import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context.";
import "./SearchForm.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchForm = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef("");
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/book");
  };

  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form-elem flex  bg-white">
              <div className="inp sb">
                <FontAwesomeIcon
                  className="fa-xl sb icon"
                  icon={faSearch}
                ></FontAwesomeIcon>
                <input
                  type="text"
                  className="form-control"
                  placeholder="  Search The Medicine"
                  ref={searchText}
                />
              </div>

              <button
                type="submit"
                className="flex flex-c"
                onClick={handleSubmit}
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
