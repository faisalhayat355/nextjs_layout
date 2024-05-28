"use client";
import { Box, Grid, Typography } from "@mui/material";
import Layout from "../components/layout";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
};

export const data1 = [
  ["City", "2010 Population", "2000 Population"],
  ["New York City, NY", 8175000, 8008000],
  ["Los Angeles, CA", 3792000, 3694000],
  ["Chicago, IL", 2695000, 2896000],
  ["Houston, TX", 2099000, 1953000],
  ["Philadelphia, PA", 1526000, 1517000],
];

export const options1 = {
  title: "Population of Largest U.S. Cities",
  chartArea: { width: "50%" },
  isStacked: true,
  hAxis: {
    title: "Total Population",
    minValue: 0,
  },
  vAxis: {
    title: "City",
  },
};

export const data2 = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options2 = {
  title: "My Daily Activities",
  is3D: true,
};

export const data3 = [
  ["Language", "Speakers (in millions)"],
  ["Assamese", 13],
  ["Bengali", 83],
  ["Bodo", 1.4],
  ["Dogri", 2.3],
  ["Gujarati", 46],
  ["Hindi", 300],
  ["Kannada", 38],
  ["Kashmiri", 5.5],
  ["Konkani", 5],
  ["Maithili", 20],
  ["Malayalam", 33],
  ["Manipuri", 1.5],
  ["Marathi", 72],
  ["Nepali", 2.9],
  ["Oriya", 33],
  ["Punjabi", 29],
  ["Sanskrit", 0.01],
  ["Santhali", 6.5],
  ["Sindhi", 2.5],
  ["Tamil", 61],
  ["Telugu", 74],
  ["Urdu", 52],
];

export const options3 = {
  title: "Indian Language Use",
  legend: "none",
  pieSliceText: "label",
  slices: {
    4: { offset: 0.2 },
    12: { offset: 0.3 },
    14: { offset: 0.4 },
    15: { offset: 0.5 },
  },
};

const Dashboard = () => {
  return (
    <>
      <Layout>
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Chart chartType="Bar"  width="100%" height="400px" data={data} options={options}/>
            </Grid>
            <Grid item xs={6}>
              <Chart chartType="BarChart" width="100%" height="400px" data={data1} options={options1}/>
            </Grid>

            <Grid item xs={6}>
              <Chart chartType="PieChart" data={data2} options={options2} width={"100%"} height={"400px"}/>
            </Grid>
            <Grid item xs={6}>
              <Chart chartType="Line" width="100%" height="400px" data={data} options={options}/>
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </>
  );
};

export default Dashboard;
