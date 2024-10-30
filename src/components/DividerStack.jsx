import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import ImgMediaCard from "./Card";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import Box from '@mui/material/Box';
import zdj1 from "../images/photos/zdj1.jpg";
import zdj2 from "../images/photos/zdj2.jpg";
import zdj3 from "../images/photos/zdj3.jpg";
import zdj4 from "../images/photos/zdj4.jpg";
import zdj5 from "../images/photos/zdj5.jpg";
import zdj6 from "../images/photos/zdj6.jpg";

function createData(title, imgSrc, description) {
  return {title, imgSrc, description};
}

const articles = [
  createData('Wilki Lodzkie vs Tychu Falcons', zdj1, "Explosive Play: A 50-yard touchdown pass lights up the field, energizing the crowd as the quarterback launches a perfect spiral to his wide receiver."),
  createData('Wilki Lodzkie vs Armia Poznan', zdj2, "Defensive Showdown: Both teams lock into a fierce battle, with each defense holding strong, forcing turnovers and keeping the score tight."),
  createData('Wilki Lodzkie vs Dukes Zabki', zdj3, "Last-Second Victory: With only seconds left, the kicker nails a 45-yard field goal, securing a dramatic win for his team."),
  createData('Wilki Lodzkie vs Tychu Falcons Revange', zdj4, "Power Running: The running back bulldozes through defenders, breaking tackles and sprinting 30 yards for an unstoppable touchdown."),
  createData('Wilki Lodzkie vs Dukes Zabki Revange', zdj5, "High-Octane Offense: The offense dominates the field, mixing precision passes and swift runs to march down the field for back-to-back scores."),
  createData('Wilki Lodzkie vs Armia Poznan Revange', zdj6, "Crucial Turnover: In a game-changing moment, the linebacker intercepts a pass, setting up his team for a game-winning drive."),
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function DividerStack() {
  return (
    <div>
     <Box sx={{ flexGrow: 1, justifyContent:'center'}} style={{paddingBottom:40}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {articles.map((article) => (
          <Grid key={article} size={{ xs: 2, sm: 4, md: 4 }}>
            <ImgMediaCard imgSrc={article.imgSrc} titles={article.title} description={article.description}/>
          </Grid>
        ))}
      </Grid>
    </Box>
    </div>
  );
}
