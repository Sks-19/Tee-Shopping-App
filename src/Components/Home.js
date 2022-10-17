import Card from "./productCard";
import FilterSection from "./filterSection";
import SearchData from "./searchData";
import Footer from "./Footer";
import Nav from "../Nav";
import SlideShow from "./slideShow";
import { useEffect, useState } from "react";
const Home = (props) => {
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    setFilterData(props.data);
  }, []);

  return (
    <>
      <Nav />
      <div>
        <SearchData data={props.data} setFilterData={setFilterData} />
        <SlideShow />
        <FilterSection data={props.data} />
        <div
          className="container-fluid p-4 pb-5"
          style={{ backgroundColor: "lightyellow" }}
        >
          {(filterData.length === 0 ? props.data : filterData)?.map((user) => {
            return (
              <Card
                key={user.id}
                id={user.id}
                image={user.imageURL}
                name={user.name}
                type={user.type}
                price={user.price}
                currency={user.currency}
                color={user.color}
                gender={user.gender}
                quantity={user.quantity}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
