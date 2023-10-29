import React from "react";
import { useSelector } from "react-redux";
import profile from "../../images/Profile.png";
import "./account.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaBirthdayCake } from "react-icons/fa";
import {BiLinkExternal} from "react-icons/bi";
import gsIcon from "../../images/googleScholarIcon.png";
import wosIcon from "../../images/webOfScienceIcon.png";
import scopusIcon from "../../images/scopusIcon.png";
import vidwanIcon from "../../images/vidwanIcon.png";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { getUserPublications } from "../../actions/publicationsAction";
import Publication from "../publications/Publication";
import { useDispatch } from "react-redux";
const Account = () => {
  const { user } = useSelector((state) => state.user);
  const {publications,error}=useSelector(state=>state.userPublications)
  const dispatch=useDispatch()
  useEffect(()=>{
      dispatch(getUserPublications(user.name))
      if(error){
        toast.error(error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        dispatch({ type: "CLEAR_ERRORS" });
      }
  },[error])
  return (
    <>
      <div className="account">
        <div className="userDetails">
          <div className="dp">
            <img src={user.avatar.url} alt={profile} className="dp" />
          </div>
          <div className="name">{user.name}</div>
          <div className="description">{user.description}</div>
          <div className="details">
            <span id="location">
              <FaLocationDot /> {` ${user.city}`}
            </span>
            <span id="dob">
              <FaBirthdayCake /> {` ${user.dob}`}
            </span>
          </div>
          <div className="research-profiles">
            <p>Research Profiles</p>
            <div className="profiles">
              <div className="gs">
                <a href={user.gsProfile} target="blank">
                  <img src={gsIcon} alt="google scholar" />
                </a>
              </div>
              <div className="wos">
                <a href={user.wosProfile} target="blank">
                  <img src={wosIcon} alt="web of science" />
                </a>
              </div>
              <div className="scopus">
                <a href={user.scopusProfile} target="blank">
                  <img src={scopusIcon} alt="scopus" />
                </a>
              </div>
              <div className="vidwan">
                <a href={user.vidwanProfile} target="blank">
                  <img src={vidwanIcon} alt="vidwan" />
                </a>
              </div>
            </div>
          </div>
          <div className="hl"></div>
          <div className="educationDetails">
            <p>Education Details</p>

            {user.education.map((ele) => {
              return (
                <div class="edetails">
                  <div className="period">{ele.period}</div>
                  <div className="degree">{ele.degree}</div>
                  <div className="institution">{ele.institute}</div>
                </div>
              );
            })}
            <div className="hl"></div>
              <p style={{color:"#cc0066"}}>Research Activities</p>
            <div className="rProfiles">
              <div>
                <a href={user.gsProfile}>Google Scholar<BiLinkExternal/></a>
                <div>
                  <p>citations:{user.gsCitations}</p>
                  <p>h-index:{user.gsHIndex}</p>
                </div>
              </div>
              <div>
                <a href={user.wosProfile}>Web Of Science<BiLinkExternal/></a>
                <div>
                  <p>citations:{user.wosCitations}</p>
                  <p>h-index:{user.wosHIndex}</p>
                </div>
              </div>
              <div>
                <a href={user.scopusProfile}>Scopus<BiLinkExternal/></a>
                <div>
                  <p>citations:{user.scopusCitations}</p>
                  <p>h-index:{user.scopusHIndex}</p>
                </div>
              </div>
              <div>
                <a href={user.vidwanProfile}>vidwan<BiLinkExternal/></a>
                <div>
                  <p>vidwan-score:{user.vidwanScore}</p>
                </div>
              </div>
            </div>
            <div className="hl"></div>
            <div className="publications">
              <p>Publications</p>
            {publications &&
              publications.map((ele) => {
                return <Publication key={ele._id} pub={ele} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />

    </>
  );
};

export default Account;
