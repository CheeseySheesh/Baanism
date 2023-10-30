import React, { useState, useEffect } from "react";
import "./Admin.css"; // Import the CSS file for this component
import "react-icons/fa";

import {
  FaCamera,
  FaHistory,
  FaRegAddressBook,
  FaUserCircle,
  FaSignOutAlt
} from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

import AllProjects from "../all-projects/All_Projects";
import Assign_admin from "../assign-project/assign-admin";
import Content from "../all-projects/all_content";
import Add_content from "../content/content";
import UpdateProject from "../update-project/update"
import EditUpdateContent from "../content/editcontent"
import { Editestimate } from "../Edit-estimate/Editestimate";

function Project() {
  const [isMobile, setIsMobile] = useState(false);
  const [isProjectClicked, setIsProjectClicked] = useState(true);
  const [isUpdateClicked, setIsUpdateClicked] = useState(false);
  const [isAddClicked, setIsAddClicked] = useState(false);
  const [isAddcontentClicked, setIsAddcontentClicked] = useState(false);
  const [isUpdatecontentClicked, setIsUpdatecontentClicked] = useState(false);
  const [isEditEstimateClicked, setisEditEstimateClicked] = useState(false);

  const handleProjectClick = () => {
    setIsProjectClicked(true);
    setIsUpdateClicked(false);
    setIsAddClicked(false);
    setIsAddcontentClicked(false);
    setisEditEstimateClicked(false);
  };

  // Step 2: Create a click handler function
  const handleAddContentClick = () => {
    setIsAddcontentClicked(true);
    setIsProjectClicked(false);
    setIsUpdateClicked(false);
    setIsAddClicked(false);
    setisEditEstimateClicked(false);

  };

  const handleUpdateClick = () => {
    setIsProjectClicked(false);
    setIsUpdateClicked(true);
    setIsAddClicked(false);
    setIsAddcontentClicked(false);
    setisEditEstimateClicked(false);
  };

  const handleAddClick = () => {
    setIsProjectClicked(false);
    setIsUpdateClicked(false);
    setIsAddClicked(true);
    setIsAddcontentClicked(false);
    setisEditEstimateClicked(false);

  };

  const handleEditClick = () => {
    setIsProjectClicked(false);
    setIsUpdateClicked(false);
    setIsAddClicked(false);
    setIsAddcontentClicked(false);
    setisEditEstimateClicked(true);
  };

  useEffect(() => {
    // Add an event listener to track window size changes
    function handleResize() {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    }

    // Initial check
    handleResize();

    // Add event listener on component mount
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`Admincontainer ${isMobile ? "mobile" : "desktop"}`}>
      <div className="admin-sidebar">
        <br />
        <br />
        <br />
        <div>
          <div
            onClick={handleProjectClick}
            className={`${isProjectClicked ? "admin-select-button" : "admin-botton"
              }`}
          >
            <FaFile
              size={isMobile ? 10 : 17}
              color={isProjectClicked ? "white" : "gray"}
              className="button-icon"
            />{" "}
            โครงการทั้งหมด
          </div>
          <br />


          <div
            onClick={handleUpdateClick}
            className={`${isUpdateClicked ? "admin-select-button" : "admin-botton"
              }`}
          >
            <FaHistory
              size={isMobile ? 10 : 17}
              color={isUpdateClicked ? "white" : "gray"}
              className="button-icon"
            />{" "}
            อัพเดต Home GURU Content
          </div>
          <br />


          <div
            onClick={handleAddClick}
            className={`${isAddClicked ? "admin-select-button" : "admin-botton"
              }`}
          >
            <FaRegAddressBook
              size={isMobile ? 10 : 17}
              color={isAddClicked ? "white" : "gray"}
              className="button-icon"
            />{" "}
            เพิ่มแบบโครงการเข้าระบบ
          </div>
          <br />


          <div
            onClick={handleEditClick}
            className={`${isEditEstimateClicked ? "admin-select-button" : "admin-botton"
              }`}
          >
            <FaRegAddressBook
              size={isMobile ? 10 : 17}
              color={isEditEstimateClicked ? "white" : "gray"}
              className="button-icon"
            />{" "}
            แก้ไขหน้าประเมินราคา
          </div>

          <br />
          <Link to = "/">
            <div className={"admin-botton"}>
              <FaSignOutAlt
                size={isMobile ? 10 : 17}
                color={"grey"}
                className="button-icon"
              />{" "}
              ออกจากระบบ
            </div>
          </Link>
        </div>
        <br />
      </div>
      <div className="admin-profilebar over">
        {isProjectClicked && <AllProjects />}
        {isUpdateClicked && (
          <div>
            <div className="addcontent">

                <div className="adcontent-button" onClick={handleAddContentClick}>
                  <FaPlus size={10} color="white" /> เพิ่ม Home GURU Content
                </div>

              <br></br>
            </div>
            

          </div>
        )}
        {isUpdateClicked && <UpdateProject />}
        {isAddClicked && (
          <div>
            <Assign_admin />
          </div>
        )}
        {isAddcontentClicked && (
          <div>
            <Add_content />
          </div>
        )}
        {isEditEstimateClicked && (
          <div>
            <div className="addcontent">

              <div className="add-question-button" >
                <FaPlus size={10} color="white" /> เพิ่มคำถาม
              </div>

              <br></br>
            </div>
            <Editestimate />
          </div>
        )}
      </div>
        {isUpdatecontentClicked && (
          <div>
            <EditUpdateContent />
          </div>
        )}
    </div>
  );
}

export default Project;
