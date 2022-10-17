import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import "./searchData.css";

const SearchData = ({ data, setFilterData }) => {
  const [searchContent, setSearchContent] = useState("");
  const [priceRange, setPriceRange] = useState(0);

  const gender = ["Men", "Women"];
  const colour = ["Black", "Blue", "Red", "Grey", "Purple", "White", "Yellow"];
  const type = ["Polo", "Hoodie", "Basic"];

  let filteredGender = [];
  let filteredColor = [];
  let filteredType = [];

  const handleSearch = () => {
    const searchedData = data?.filter((datas) => {
      if (searchContent === "") {
        return datas;
      } else if (
        datas.name.toLowerCase().includes(searchContent.toLowerCase()) ||
        datas.color.toLowerCase().includes(searchContent.toLowerCase()) ||
        datas.type.toLowerCase().includes(searchContent.toLowerCase())
      ) {
        return datas;
      }
    });
    setFilterData(searchedData);
  };

  const handleDropdown = () => {
    const content = document.getElementById("showDropdown");
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  };

  const handleGenderFilter = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      filteredGender.push(name);
    }
  };

  const handleColorFilter = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      filteredColor.push(name);
    }
  };

  const handleTypeFilter = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      filteredType.push(name);
    }
  };

  const handleRange = (e) => {
    setPriceRange(e.target.value);
  };

  const handleFilterData = () => {
    const content = document.getElementById("showDropdown");
    content.style.display = "none";

    const genderData = data?.filter((d) => {
      const val = filteredGender?.map((val) => {
        if (d.gender.toLowerCase() === val.toLowerCase()) {
          return d;
        }
      });
      if (d.id === val[0]?.id) {
        return d;
      }
    });

    const colorData = data?.filter((d) => {
      const val = filteredColor?.map((val) => {
        if (d.color.toLowerCase() === val.toLowerCase()) {
          return d;
        }
      });
      if (d.id === val[0]?.id) {
        return d;
      }
    });

    const typeData = data?.filter((d) => {
      const val = filteredType?.map((val) => {
        if (d.type.toLowerCase() === val.toLowerCase()) {
          return d;
        }
      });
      if (d.id === val[0]?.id) {
        return d;
      }
    });

    const allFiltered = [
      ...new Set([...genderData, ...colorData, ...typeData]),
    ];

    if (allFiltered.length === 0) {
      setFilterData(data);
    } else {
      setFilterData(allFiltered);
    }
  };

  return (
    <>
      <div className="container py-3">
        <div className="input-group rounded">
          <div className="dropdown">
            <button
              type="button"
              className="btn rounded btn-outline-dark"
              onClick={handleDropdown}
            >
              <FiFilter />
            </button>
            <div id="showDropdown" className="dropdown-content">
              <div className="row w-100 p-3">
                <div className="col">
                  <label htmlFor="price-range" className="form-label h5">
                    Price Range
                  </label>
                  <hr />
                  <h5
                    className="border rounded"
                    style={{ textAlign: "center" }}
                  >
                    0 - {priceRange}
                  </h5>
                  <input
                    className="form-range"
                    type="range"
                    id="price-range"
                    name="price-range"
                    min="0"
                    max="1000"
                    step="50"
                    onChange={handleRange}
                  />
                </div>
                <div className="col">
                  <h5 className="card-title">Gender</h5>
                  <hr />
                  {gender.map((data, i) => {
                    return (
                      <>
                        <div className="form-check" key={i}>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name={data}
                            value=""
                            id="gender-men"
                            onChange={handleGenderFilter}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="gender-men"
                          >
                            {data}
                          </label>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="col">
                  <h5 className="card-title">Colour</h5>
                  <hr />
                  {colour.map((data) => {
                    return (
                      <>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="gender-men"
                            name={data}
                            onChange={handleColorFilter}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="gender-men"
                          >
                            {data}
                          </label>
                        </div>
                      </>
                    );
                  })}
                </div>

                <div className="col">
                  <h5 className="card-title">Type</h5>
                  <hr />
                  {type.map((data) => {
                    return (
                      <>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="gender-men"
                            name={data}
                            onChange={handleTypeFilter}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="gender-men"
                          >
                            {data}
                          </label>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="my-4" style={{ textAlign: "center" }}>
                <button
                  type="submit"
                  className="btn btn-primary w-50"
                  onClick={handleFilterData}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
          <input
            type="search"
            onChange={(event) => {
              setSearchContent(event.target.value);
            }}
            className="form-control rounded search mx-2"
            placeholder="Search Products..."
          />
          <button
            type="button"
            className="btn rounded btn-outline-dark mx-0"
            onClick={handleSearch}
          >
            <BsSearch />
          </button>
        </div>
      </div>
    </>
  );
};
export default SearchData;
