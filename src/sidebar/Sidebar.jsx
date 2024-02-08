import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebaritem">
            <span className="sidebartitle">ABOUT ME</span>
            <img className="sidebarimg" src="/image/women-8509637_1280.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, iure. Repellat ullam a laudantium hic.</p>
        </div>
        <div className="sidebaritem">
            <span className="sidebartitle">CATEGORIES</span>
            <ul className="sidebarlist">
                <li className="sidebarlistitem">Life</li>
                <li className="sidebarlistitem">Music</li>
                <li className="sidebarlistitem">Style</li>
                <li className="sidebarlistitem">Sport</li>
                <li className="sidebarlistitem">Tech</li>
                <li className="sidebarlistitem">Cinema</li>
            </ul>
        </div>
        <div className="sidebaritem">
            <span className="sidebartitle">FOLLOW US</span>
            <div className="sidebarsocial"><i className="sidebaricon fa-brands fa-facebook-f"></i>
        <i className="sidebaricon fa-brands fa-instagram"></i>
        <i className="sidebaricon fa-brands fa-tiktok"></i>
        <i className="sidebaricon fa-brands fa-x-twitter"></i></div>
        </div>
    </div>
  )
}
