import { useNavigate } from "react-router-dom";
import HeaderFolder from "../HeaderFolder/HeaderFolder";
import "./ListUsers.css";
import authentication from "../loginAuthentication";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import listuser from "../list.json";
const ListUser = () => {
  const [filteredArray, setFilteredArray] = useState(
    listuser.results.slice(0, 10)
  );
  let navigate = useNavigate();
  useEffect(() => {
    if (!authentication.isLoggedIn) {
      navigate("/");
    }
  }, []);
  const logoutHandler = () => {
    navigate("/");
  };
  const fetchMoreData = () => {
    setTimeout(() => {
      setFilteredArray([
        ...filteredArray,
        ...listuser.results.slice(
          filteredArray.length,
          filteredArray.length + 10
        ),
      ]);
    }, 1000);
  };
  return (
    <>
      <HeaderFolder name="User List" />
      <button className="logout" onClick={logoutHandler}>
        LOGOUT
      </button>
      <div className="user">
        <InfiniteScroll
          dataLength={filteredArray.length}
          next={fetchMoreData}
          hasMore={filteredArray.length < 50 ? true : false}
          loader={
            <h4 style={{ textAlign: "center", color: "green" }}>Loading...</h4>
          }
          endMessage={
            <p style={{ textAlign: "center", color: "green" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {
            <ol>
              {filteredArray.map((User, index) => (
                <>
                  <li className="userlist" key={index}>
                    <h2>{User.name.first}</h2>
                    <img src={User.picture.medium}></img>
                  </li>
                </>
              ))}
            </ol>
          }
        </InfiniteScroll>
      </div>
    </>
  );
};

export default ListUser;
