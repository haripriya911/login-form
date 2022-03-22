import "./ListUsers.css";
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
];
console.log(ListItem, "HH");

const ListUser = () => {
  const User = ListItem.map((User) => (
    <>
    <li className="userlist">
      <h2>{User.name}</h2>
      <img src={User.src}></img>
      </li>
    </>
  ));
  return (
    <div className="user">
      <div className="img">
        <ol> {User}</ol>
      </div>
    </div>
  );
};

export default ListUser;
