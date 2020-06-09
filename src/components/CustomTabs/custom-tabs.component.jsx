import React, { useState } from "react";
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import TabPanel from "../Shared/TabPanel/tab-panel.component";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import FoodCard from "../FoodCard/food-card.component";

import "./custom-tabs.styles.scss";

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
}));

const CustomTabs = ({ tabsName, tabPanels }) => {
  const classes = useStyles();

  const theme = createMuiTheme({
    typography: {
      fontFamily: "'Varela Round', sans-serif",
    },
  });

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //   const handleChangeIndex = (index) => {
  //     setValue(index);
  //   };

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            {tabsName.map((name, i) => (
              <Tab key={i} label={name} className="tab" {...a11yProps(i)} />
            ))}
          </Tabs>
        </AppBar>
        {tabPanels
          ? tabPanels.map((tp, i) => {
              return (
                <TabPanel key={i} value={value} index={i}>
                  <div className="collection-items-container">
                    {tp.map((item, i) => (
                      <FoodCard key={i} image={item.img} name={item.name} />
                    ))}
                  </div>
                </TabPanel>
              );
            })
          : null}
      </div>
    </MuiThemeProvider>
  );
};

export default CustomTabs;
