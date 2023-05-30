import "./footer.scss"
import youtube1 from "../../assets/images/DavesYouTubeScreenshot.png";


function Footer() {
  return (
    <div className="footer">
       Video Walkthrough
        <div>
        <a href='https://www.youtube.com/watch?v=g7oXVFaofOY' target='blank'>
          <img src ={youtube1} alt = "Daves Comics Youtube video" width="300" height="300"/>
        </a>
        </div>
    </div>
  )
}

export default Footer