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

export default function TabsWrappedLabel() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={`${styles.paddingY}`}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Personal Details" value="1" />
            <Tab label="Working Experince" value="2" />
            <Tab label="summary" value="8" />
            <Tab label="Education" value="3" />
            <Tab label="language" value="4" />
            <Tab label="skills" value="5" />
            <Tab label="summary" value="6" />
            <Tab label="project" value="7" />
          </TabList>
        </Box>
        <TabPanel value="1">{<Personal_Info_Formes />}</TabPanel>
        <TabPanel value="2">{<Working_Exp />}</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </div>
  );
}
