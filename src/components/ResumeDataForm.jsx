import * as React from "react";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
// import file
import styles from "../style/Style";
import Personal_Info_Formes from "./Forms/Personal_InfoFrom";
import Working_Exp from "./Forms/Work_Exper";
import Summary from "./Forms/Summary";
import { useEffect, useRef } from "react";
import Education from "./Forms/Education";
import InputLabel from "./Forms/InputLable";
import Project from "./Forms/Projects";
import { BsPersonCircle } from "react-icons/bs";
import { MdCastForEducation } from "react-icons/md";
import { FaLanguage } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { MdSummarize } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";

export default function TabsWrappedLabel() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={`${styles.paddingY}`}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            variant="scrollable"
            // ScrollButtonComponent={true}
          >
            <Tab
              icon={<BsPersonCircle />}
              label="Personal Details"
              value="one" iconPosition="end"
            />
            <Tab icon={<GrUserExpert/>} label="Working Experince" value="2" iconPosition="end"/>
            <Tab icon={<MdSummarize/>} label="summary" value="3"  iconPosition="end"/>
            <Tab icon={<FaLanguage />} label="language" value="6"  iconPosition="end"/>
            <Tab icon={<MdCastForEducation />} label="EDUCATION" value="4"  iconPosition="end"/>
            <Tab icon={<GiSkills />} label="skills" value="5"  iconPosition="end"/>
            <Tab
              icon={<AiOutlineFundProjectionScreen />}
              label="project"
              value="7" iconPosition="end"
            />
            {/* <Tab label="summary" value="6" /> */}
          </TabList>
        </Box>
        <TabPanel autoFocus value="one">
          {<Personal_Info_Formes />}
        </TabPanel>
        <TabPanel value="2">{<Working_Exp />}</TabPanel>
        <TabPanel value="3">{<Summary />}</TabPanel>
        <TabPanel value="4">{<Education />}</TabPanel>
        <TabPanel value="5">{<InputLabel label={"Skill"} />}</TabPanel>
        <TabPanel value="6">{<InputLabel label={"Language"} />}</TabPanel>
        <TabPanel value="7">{<Project />}</TabPanel>
        {handleChange}
      </TabContext>
    </div>
  );
}
