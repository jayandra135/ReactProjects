import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { MyNewContext } from "./contextApi/MyContext";
import { getDiscoverMovies, searchMovies } from "./Api";
//import CardComp from "./CardComp";
const SearchComp = () => {
  const { setDiscoverData } = useContext(MyNewContext);
  const [searchQuery, setSearchQuery] = useState("");

  function getSearchData() {
    searchMovies(searchQuery)
      .then((response) => setDiscoverData(response.data.results))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getDiscoverMovies()
      .then((response) => setDiscoverData(response.data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <section id="searchSection">
        <Container>
          <Row>
            <Col>
              <div className="form">
                <input
                  type="text"
                  placeholder="Search movies"
                  value={searchQuery}
                  className="inputText"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button variant="success" onClick={getSearchData}>
                  search
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SearchComp;
