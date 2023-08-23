import React, { useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CircularProgress from "@mui/material/CircularProgress";
import imgNA from "../images/imageNA.png";
import { MyNewContext } from "./contextApi/MyContext";
import { findById } from "./Api";
const CardComp = () => {
  //const [id, setID] = useState(0);
  // const { setDiscoverData } = useContext(MyNewContext);

  const imgPath = "https://image.tmdb.org/t/p/w500";

  const { discoverData, SetMovieID } = useContext(MyNewContext);
  //console.log(discoverData);

  function getSearchMovies() {
    findById()
      .then((response) => SetMovieID(response.data.results))
      .catch((error) => console.log(error));
  }
  return (
    <>
      <section>
        <Container>
          {discoverData && discoverData.length > 0 ? (
            <Row>
              {discoverData
                ? discoverData.map((ele, index) => {
                    return (
                      <Col
                        lg={3}
                        md={4}
                        sm={6}
                        xs={6}
                        key={index}
                        mb={2}
                        className="mb-4"
                      >
                        <div className="wrapper">
                          <div className="card">
                            <img
                              src={
                                ele.poster_path === null
                                  ? imgNA
                                  : imgPath + ele.poster_path
                              }
                              alt=""
                            />
                            <div className="descriptions">
                              <h5>{ele.title}</h5>
                              {/*     <p>{ele.overview}</p> */}
                              <Button
                                variant="primary"
                                onClick={getSearchMovies}
                              >
                                More Info
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Col>
                    );
                  })
                : ""}
            </Row>
          ) : (
            <CircularProgress />
          )}
        </Container>
      </section>
    </>
  );
};

export default CardComp;
