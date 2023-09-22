import styled from "@emotion/styled";
import { Box, Card, Typography } from "@mui/material";
import { v4 as uuid } from "uuid";

const TemperatureBox = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  overflowX: "auto",
  minWidth: "100%",
  borderRadius: "20px",
}));

const PrevDataContainer = styled(Card)(() => ({
  minWidth: "7rem",
  height: "4rem",
  padding: "20px",
  margin: "5px",
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#2e2e39",
}));

type DataItem = {
  city: string;
  state: string;
  temp: number;
  userval?: string; // Include other properties as needed
};

type FifthBoxProps = {
  prevData: DataItem[];
};

function FifthBox({ prevData }: FifthBoxProps) {
  return (
    <TemperatureBox>
      {prevData?.map((each: DataItem) => (
        <PrevDataContainer key={uuid()} sx={{ color: "white" }}>
          <Typography fontSize={"1.25rem"}>{each.city}</Typography>
          <Typography fontSize={"0.65rem"}>{each.state}</Typography>
          <Box display={"flex"}>
            <Typography fontSize={"1.25rem"}>{each.temp}</Typography>
            <Typography component="span" sx={{ fontSize: "1rem" }}>
              °
            </Typography>
          </Box>
        </PrevDataContainer>
      ))}
    </TemperatureBox>
  );
}

export default FifthBox;
