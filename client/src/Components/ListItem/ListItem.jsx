import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import "./ListItem.scss"
import { useState } from "react"

function ListItem({index}) {
  const [isHovered,setIsHovered] = useState(false)
  const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div className="listItem" onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} style={{left:isHovered && index*225-50 + index*2.5}}>
        <img src="https://th.bing.com/th/id/R.915c3b654cd803bd3c64bbe30ace7a99?rik=apqPFZok5uCvug&riu=http%3a%2f%2fwww.dreadcentral.com%2fwp-content%2fuploads%2f2018%2f05%2fsafe-trailer.jpg&ehk=pL9ZjFYlj%2b2niH4LhK8OgbQoke3OPDU%2fxFgexxeoik4%3d&risl=&pid=ImgRaw&r=0"/>
        {isHovered &&
        <>
        <video src= {trailer} autoPlay = {true} loop/>
        <div className="itemInfo">
          <div className="icons">
            <PlayArrow className="icon"/>
            <Add className="icon"/>
            <ThumbUpAltOutlined className="icon"/>
            <ThumbDownAltOutlined className="icon"/>
          </div>
          <div className="itemInfoTop">
            <span>1 hour 14 mins</span>
            <span className="limit">+16</span>
            <span>1999</span>
          </div>
          <div className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia et itaque officia dolore impedit delectus ipsa adipisci facere placeat, consequatur odio, cumque, eos dignissimos architecto maxime cum aut alias ratione.
          </div>
          <div className="genre">
            action
          </div>
        </div>
        </>
        }
    </div>
    
  )
}

export default ListItem