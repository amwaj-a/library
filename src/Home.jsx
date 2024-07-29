import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import imgHero from "./assets/ss.png";
import imgHero1 from "./assets/herop.png";
import Footer from "./Footer";
import searchImg from "./assets/search.png";
function Home() {
  const [api, setapi] = useState([]);
  const [filter, setFilter] = useState([]);
  const [alerta, setalerta] = useState("none");
  const [erro, seterror] = useState("");
  const [search, setsearch] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=qM0wnkp35vYOvdRrh7trRDeTY5clSJTg"
      )
      .then((e) => {
        setapi(e.data.results.books);
        setFilter(e.data.results.books);
      });
    axios
      .get("https://6689ba9f0ea28ca88b88bd30.mockapi.io/book")
      .then(function (response) {
        // setfilter(response.data.results.books)
        // setapi(response.data.books)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  const searchFilterData = () => {
    console.log(filter);
    if (search === "") {
      setapi(filter);
    } else {
      const filtered = filter.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
      setapi(filtered);

      // setapi(a);

      setsearch("");
    }
    //
  };

  return (
    <section>
      <section className="relative bg-60 h-[70vh] max-md:h-max">
        <Nav />
        <div className=" m-auto  flex justify-center">
          <div className="flex items-center ">
            <div className="w-[50vw] max-sm:w-60 max-sm:ms-4 flex flex-col">
              <h1 className="text-3xl font-bold max-sm:my-2 my-5 max-sm:text-xl ">
                2024 Reading Challenge
              </h1>
              <p className="w-[40vw] max-sm:text-sm max-sm:w-full text-xl  ">
                We aim to make culture and knowledge acquired from books
                accessible to everyone, promoting reading as a fundamental
                activity that enriches the lives of individuals and communities.
              </p>{" "}
              <br />
              <button
                onClick={() => {
                  navigate("/About");
                }}
                className="bg-20  text-gray-50 
  max-sm:w-max font-bold text-lg w-40 p-2 rounded"
              >
                Learn more{" "}
              </button>
              <br />
            </div>

            <img className="w-[30%]" src={imgHero} alt="" />
          </div>{" "}
        </div>
      </section>

      <section className=" ">
        <br />
        <div className="shadow-lg m-auto border-[1px] w-max  ">
          <input
            onKeyDown={(e) => (e.key === "Enter" ? searchFilterData() : null)}
            onChange={(e) => {
              setsearch(e.target.value);
            }}
            className=" p-3 w-72 focus:outline-none"
            type="text"
            placeholder="search book"
          />
          <button
            onClick={searchFilterData}
            className="bg-20 text-gray-50 font-bold text-lg p-3 h-full"
          >
            Search{" "}
          </button>
        </div>

        <br />

        <br />
        <div>
          {api.length == 0 ? (
            <div className="flex-col items-center justify-center flex ">
              <img className="w-80" src={searchImg} alt="" />
              <h1>No Book Found</h1>
            </div>
          ) : (
            <div
              className="grid max-md:grid-cols-1
            max-sm:gap-2 
         gap-6 max-sm:ps-7 m-auto  p-3  grid-cols-4 w-[80%] "
            >
              {api.map((e, i) => (
                <button
                  className="w-60 shadow-xl hover:scale-105"
                  onClick={() => {
                    if (localStorage.getItem("id") !== null) {
                      navigate(`/details/${e.rank}`);
                    } else {
                      alert("You must Login");
                    }
                  }}
                  key={i}
                >
                  {/* {console.log(e.title)} */}
                  <img
                    className="w-60 shadow-xl h-72"
                    src={e.book_image}
                    alt={e.title}
                  />
                  <h1> {e.title} </h1>

                  <span className=" ">{e.author}</span>
                </button>
              ))}
            </div>
          )}

          <br />
        </div>
      </section>

      <Footer />
    </section>
  );
}
export default Home;
