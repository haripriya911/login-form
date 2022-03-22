import InfiniteScroll from "react-infinite-scroll";
import ListUser from "../ListUsers/ListUser";
const InfiniteLoop=(props)=>{
    return<InfiniteScroll>
        dataLength={ListUser.length}
        loader={<h4>loading</h4>}
    </InfiniteScroll>
}
export default InfiniteLoop;
