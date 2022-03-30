import Header from "../../components/header/Header";
import NewPost from "../../components/newpost/NewPost";
import SideBar from "../../components/sidebar/SideBar";
import "./home.css"

export default function Home() {
  return (
    <>
      <Header/>
      <div className="home">
        <NewPost/>
        <SideBar/>
      </div>
    </>
  );
}
