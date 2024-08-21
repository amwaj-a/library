import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
// import test from './test';

function Favorite() {
  const navigat = useNavigate();
  const [isLoding, setisLoadin] = React.useState(false);
  const id = localStorage.getItem("id");
  const [api, setapi] = React.useState([]);
  React.useEffect(() => {
    //  apiBOOK()
    get();
  }, []);
  const get = () => {
    axios
      .get(`https://6689ba9f0ea28ca88b88bd30.mockapi.io/book/${id}`)
      .then(function (response) {
        setapi(response.data.liked);
        setisLoadin(true);
      });
  };
  const deletBook = (e) => {
    let array = [];
    array = api;
    let index = api.findIndex((i) => i.book.rank == e.book.rank);
    array.splice(index, 1);

    axios
      .put(`https://6689ba9f0ea28ca88b88bd30.mockapi.io/book/${id}`, {
        liked: array,
      })
      .then((_) => {
        get();
      });
  };

  return (
    <>
      {
        // api.length!=undefined&&
        <div>
          {isLoding ? console.log(api) : console.log(";;;")}
          <section className=" bg-white ">
            <Nav />
          </section>
          <br />
          <br />
          <section className=" mt-10">
            <br />
            <div className="bg-60 max-md:h-[70vh] w-[80%] h-[50vh] -z-10 fixed top-32 left-20 "></div>
            {isLoding &&
              api !==
                undefined&&(
                  <section className="grid grid-cols-3 max-md:grid-cols-1  gap-9 w-[90%] m-auto">
                    {api.map((e) => (
                      <div className=" w-[90%]  flex justify-start items-center">
                        <img
                          className="w-60 h-72 shadow-xl shadow-slate-500"
                          src={e.book.book_image}
                          alt=""
                        />
                        <div className="mx-6 flex w-full h-full flex-col items-center justify-center">
                          {console.log(e)}

                          <h1 className="text-lg">{e.book.title}</h1>
                          <span>by {e.book.author}</span>

                          <div className="flex flex-col items-center gap-3 h-20">
                            <button
                              onClick={() => {
                                navigat(`/details/${e.book.rank}`);
                              }}
                              className="bg-40  w-40 mt-7 text-gray-50 cursor-pointer px-2 p-1 rounded"
                            >
                              Details
                            </button>

                            <button
                              onClick={() => {
                                deletBook(e);
                              }}
                              className="bg-40 w-40 rounded  text-40  flex justify-center items-center gap-1  border-40 bg-transparent border-2 "
                            >
                              <span onClick={() => {}} className=" px-1">
                                Delete Favorite
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="flex w-[50%] flex-col items-center justify-center gap-4">
                      <h1
                        className="ms-20 w-max font-extrabold text-xl mt-9 
mb-3 text-40 text-center"
                      >
                        {api.title}
                      </h1>
                    </div>

                    <section className="w-[20%] items-end  flex gap-4 flex-col">
                      <img className="w-32" src={api.book_image} alt="" />
                      <img className="w-32" src={api.book_image} alt="" />
                      <img className="w-32" src={api.book_image} alt="" />
                    </section>
                    <section></section>
                  </section>
                )}
          </section>
        </div>
      }
    </>
  );
}

export default Favorite;
