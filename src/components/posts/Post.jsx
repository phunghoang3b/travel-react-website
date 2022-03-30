import "./post.css"

export default function Post() {
  return (
    <div className="posts">
      <img className="postImg" src="https://i.imgur.com/gFQJChS.jpg" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odit ut
        odio quia? Earum praesentium debitis quis sed ratione saepe et, nesciunt
        nemo voluptatum vel, esse accusantium ab voluptates ipsa!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odit ut
        odio quia? Earum praesentium debitis quis sed ratione saepe et, nesciunt
        nemo voluptatum vel, esse accusantium ab voluptates ipsa!
      </p>
    </div>
  );
}
