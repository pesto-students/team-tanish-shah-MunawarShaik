import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export function Results({ plan }) {
  const paragraphs = plan.split(/\n\s*\n/);
  return (
    <Box sx={{ width: 800, bgcolor: "azure" }}>
      <Typography component="h2" fontSize={"20px"} textAlign={"center"}>
        Your WorkOut Plan
      </Typography>
      {paragraphs.map((paragraph, index) => (
        <Grid sx={{ width: 800 }} key={index}>
          <Typography mt={1} color="black">
            {paragraph.includes("Sure!") ? paragraph.slice(6) : paragraph}
          </Typography>
        </Grid>
      ))}
    </Box>
  );
}
