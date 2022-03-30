import "./singlepost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Khai Nguyen</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sunt,
          ad nemo dolor, pariatur cupiditate quidem illum accusantium, molestias
          modi laudantium necessitatibus? Ex minus repellat dolorum quas!
          Facilis, minima laboriosam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sunt,
          ad nemo dolor, pariatur cupiditate quidem illum accusantium, molestias
          modi laudantium necessitatibus? Ex minus repellat dolorum quas!
          Facilis, minima laboriosam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sunt,
          ad nemo dolor, pariatur cupiditate quidem illum accusantium, molestias
          modi laudantium necessitatibus? Ex minus repellat dolorum quas!
          Facilis, minima laboriosam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sunt,
          ad nemo dolor, pariatur cupiditate quidem illum accusantium, molestias
          modi laudantium necessitatibus? Ex minus repellat dolorum quas!
          Facilis, minima laboriosam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sunt,
          ad nemo dolor, pariatur cupiditate quidem illum accusantium, molestias
          modi laudantium necessitatibus? Ex minus repellat dolorum quas!
          Facilis, minima laboriosam.
        </p>
      </div>
    </div>
  );
}
