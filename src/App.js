import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [quotes, setQuotes] = useState("Loading.....");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    get_quotes();
  }, []);

  const get_quotes = async () => {
    let temp = await fetch(
      "https://goquotes-api.herokuapp.com/api/v1/random?count=1"
    )
      .then((res) => res.json())
      .then((result) => result.quotes[0]);
    const quoteVal = temp.text;
    setQuotes(quoteVal);
    setAuthor(temp.author);
  };
  // justify-content-between align-items-center
  return (
    <div className="App">
      {/* ***********here is main content*********** */}
      <div className="justify-content-center container mt-5">
        <div className="row">
          <div className="col-md-10">
            <center>
              <div className="card cookie gradient2 p-3">
                <div className="d-flex align-items-center">
                  <img
                    src="https://raw.githubusercontent.com/kbrsh/moon/gh-pages/img/logo.png"
                    width="80"
                    alt="none"
                  />
                  <div className="ml-2 mr-2 my">
                    <span style={{ fontStyle: "italic", fontSize: "20px" }}>
                      {quotes}
                      <br />
                    </span>

                    <p className="learn-more your" href="#">
                      - {author}
                      <i className="fa fa-angle-right ml-2"></i>
                    </p>
                  </div>
                </div>
                <div></div>
              </div>
            </center>

            <div>
              <center>
                <button
                  className="btn mt-3 btn-dark"
                  onClick={get_quotes}
                  type="button"
                >
                  New
                </button>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
