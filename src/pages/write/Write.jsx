import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img className="writeimg" src="./image/street-8531779_1280 (1).jpg" alt="" />
        <form className="writeform">
            <div className="writeformgroup">
                <label htmlFor="fileinput">
                <i class="writeicon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileinput" style={{display:"none"}} />
                <input type="text" placeholder="Title" className="writeinput" autoFocus={true} />
            </div>
            <div className="writeformgroup">
                <textarea placeholder="Tell your story..." type="text" className="writeinput writetext"></textarea>
            </div>
            <button className="writesubmit">Publish</button>
        </form>
    </div>
  )
}
