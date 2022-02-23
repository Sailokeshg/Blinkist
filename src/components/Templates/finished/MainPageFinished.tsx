import React from "react";
import CardUi from "../../organisms/cards/cardmaterial/CardUi";

interface Books {
  finishedReading: {
    image: string;
    name: string;
    author: string;
    time: string;
    finished: boolean;
  }[];
  handleFinish: (item: string) => void;
  handleReadAgain: (item: string) => void;
}

const MainPageFinished = (props: Books) => {
  return (
    <CardUi
    bookdetails={props.finishedReading}
      handleFinish={props.handleFinish}
      handleReadAgain={props.handleReadAgain}
    />
  );
};

export default MainPageFinished;