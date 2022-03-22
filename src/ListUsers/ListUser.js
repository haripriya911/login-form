import { useNavigate } from "react-router-dom";
import HeaderFolder from "../HeaderFolder/HeaderFolder";
import "./ListUsers.css";
import authentication from "../loginAuthentication";
import { useEffect } from "react";

const ListItem = [
  {
    id: "1",
    name: "Nirmin",

    src: "https://randomuser.me/api/portraits/med/women/82.jpg",
  },
  {
    id: "2",
    name: "Katja",
    src: "https://randomuser.me/api/portraits/med/women/29.jpg",
  },
  {
    id: "3",
    name: "Hudson",
    src: "https://randomuser.me/api/portraits/med/men/36.jpg",
  },

  {
    id: "4",
    name: "Charlie",
    src: "https://randomuser.me/api/portraits/med/men/19.jpg",
  },
  {
    id: "5",
    name: "Ralph",
    src: "https://randomuser.me/api/portraits/med/men/6.jpg",
  },
  {
    id: "6",
    name: "Ashley",
    src: "https://randomuser.me/api/portraits/med/women/49.jpg",
  },
  {
    id: "7",
    name: "marlin",
    src: "https://randomuser.me/api/portraits/med/women/19.jpg",
  },
  {
    id: "8",
    name: "Kajini",
    src: "https://randomuser.me/api/portraits/med/women/21.jpg",
  },
  {
    id: "9",
    name: "sherlin",
    src: "https://randomuser.me/api/portraits/med/women/29.jpg",
  },
  {
    id: "10",
    name: "mark",
    src: "https://randomuser.me/api/portraits/med/women/29.jpg",
  },
];

const ListUser = () => {
  let navigate = useNavigate();
  useEffect(() => {
    if (!authentication.isLoggedIn) {
      navigate("/");
    }
  });

  const User = ListItem.map((User) => (
    <>
      <li className="userlist">
        <h2>{User.name}</h2>
        <img src={User.src}></img>
      </li>
    </>
  ));
  const logoutHandler = () => {
    navigate("/");
  };

  return (
    <>
      <HeaderFolder name="User List" />

      <button className="logout" onClick={logoutHandler}>
        LOGOUT
      </button>

      <ol> {User}</ol>
    </>
  );
};

export default ListUser;
