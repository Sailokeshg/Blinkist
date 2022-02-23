import React from "react";
import CardUi from "../../organisms/cards/cardmaterial/CardUi";

interface Books {
  currentReading: {
    image: string;
    name: string;
    author: string;
    time: string;
    readcount: string;
    finished: boolean;
  }[];
  handleFinish: (item: string) => void;
  handleReadAgain: (item: string) => void;
}
const MainPageReading = (props: Books) => {
  return (
    <CardUi
      handleFinish={props.handleFinish}
      handleReadAgain={props.handleReadAgain}
      bookdetails={props.currentReading}
    />
  );
};
export default MainPageReading;