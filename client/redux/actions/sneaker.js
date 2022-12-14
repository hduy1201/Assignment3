export const getAll = "getAll";
export const add = "add";
export const update = "update";
export const getDetail = "getDetail";
export const deleteOne = "delete";

export const search = "search";

const IPconfig = "192.168.1.14";

export const getAllSneakers = (sneakers) => {
  return {
    type: getAll,
    payload: sneakers,
  };
};

export const fetchAll = () => {
  return (dispatch) => {
    const getData = async () => {
      try {
        const res = await fetch("http://" + IPconfig + ":3000/sneakers");
        const sneakers = await res.json();
        dispatch(getAllSneakers(sneakers));
        console.log(sneakers);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  };
};

export const addSneaker = (sneaker) => {
  return {
    type: add,
    payload: sneaker,
  };
};

export const addSneakerToFB = (sneaker) => {
  return (dispatch) => {
    const addData = async () => {
      try {
        const res = await fetch("http://" + IPconfig + ":3000/sneakers/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sneaker),
        });
        const data = await res.json();
        dispatch(addSneaker(data));
      } catch (error) {
        console.log(error);
      }
    };
    addData();
  };
};

export const updateSneaker = (sneaker) => {
  return {
    type: update,
    payload: sneaker,
  };
};

export const updateSneakerToFB = (sneaker) => {
  return (dispatch) => {
    const updateData = async () => {
      try {
        const res = await fetch(
          `http://` + IPconfig + `:3000/sneakers/update/${sneaker.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(sneaker),
          }
        );
        const data = await res.json();
        dispatch(updateSneaker(data));
      } catch (error) {
        console.log(error);
      }
    };
    updateData();
  };
};

export const getSneakerDetail = (sneaker) => {
  return {
    type: getDetail,
    payload: sneaker,
  };
};

export const getSneakerDetailFromFB = (id) => {
  return (dispatch) => {
    const getDetail = async () => {
      try {
        const res = await fetch(`http://` + IPconfig + `:3000/sneakers/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        dispatch(getSneakerDetail(data));
      } catch (error) {
        console.log(error);
      }
    };
    getDetail();
  };
};

export const searchSneakerByName = (sneakers) => {
  return {
    type: search,
    payload: sneakers,
  };
};

export const searchSneakerByNameFromFB = (name) => {
  return (dispatch) => {
    const getData = async () => {
      try {
        const res = await fetch(
          `http://` + IPconfig + `:3000/sneakers/search/${name}`
        );
        const sneakers = await res.json();
        dispatch(searchSneakerByName(sneakers));
        console.log(sneakers);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  };
};

//delete
export const deleteSneaker = (id) => {
  return {
    type: deleteOne,
    payload: id,
  };
};

export const deleteSneakerFromFB = (id) => {
  return (dispatch) => {
    const deleteData = async () => {
      try {
        const res = await fetch(
          `http://` + IPconfig`` + `:3000/sneakers/delete/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        dispatch(deleteSneaker(data));
      } catch (error) {
        console.log(error);
      }
    };
    deleteData();
  };
};
