import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard({imgSrc, title, description}) {
  return (
    <Card sx={{ maxWidth: 640 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="280"
        image={imgSrc}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
         {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read More...</Button>
      </CardActions>
    </Card>
  );
}
