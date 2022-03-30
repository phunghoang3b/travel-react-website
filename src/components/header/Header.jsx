import "./header.css"

export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
          <span className="headerTitleSm">Website React & TheRockVT</span>
          <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src="https://i.imgur.com/JIGRv1z.jpg" alt="" />
    </div>
  );
}
