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
import { useEffect } from "react";
// import { useRef } from "react";
import Education from "./Forms/Education";
import Skills from "./Forms/InputLable";
import InputLabel from "./Forms/InputLable";
import Project from "./Forms/Projects";

export default function TabsWrappedLabel() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    // let Tabref = useRef();
    // Tabref.current.fouce();
  });
  return (
    <div className={`${styles.paddingY}`}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            ScrollButtonComponent={true}
          >
            <Tab label="Personal Details" value="1" />
            <Tab label="Working Experince" value="2" />
            <Tab label="summary" value="3" />
            <Tab label="language" value="6" />
            <Tab label="EDUCATION" value="4" />
            <Tab label="skills" value="5" />
            <Tab label="project" value="7" />
            {/* <Tab label="summary" value="6" /> */}
          </TabList>
        </Box>
        <TabPanel autoFocus value="1">
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
