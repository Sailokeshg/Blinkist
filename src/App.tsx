import React from "react";

import "./App.css";

import book1 from "../src/components/atoms/assets/book1.png";
import book2 from "../src/components/atoms/assets/book2.png";
import book3 from "../src/components/atoms/assets/book3.png";
import book4 from "../src/components/atoms/assets/book4.png";
import book5 from "../src/components/atoms/assets/book5.png";
import book6 from "../src/components/atoms/assets/book6.png";
import book7 from "../src/components/atoms/assets/book7.png";
import book8 from "../src/components/atoms/assets/book8.png";
import book9 from "../src/components/atoms/assets/book9.png";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import bookimage from "../src/components/atoms/assets/bookimage.png";
import ToolBarHeader from "./components/organisms/header/toolbar/ToolBarHeader";
import { useState } from "react";
import MyLibraryHeading from "./components/atoms/mylibrary/mylibrary-heading/MyLibraryHeading";
import FooterMain from "./components/molecules/footer/mainfooter/FooterMain";
import MainSearch from "./components/organisms/search/MainSearch";
import ReadingTabs from "./components/organisms/tabs/ReadingTabs";
import ExploreMenu from "./components/molecules/explore-items/explore-menu/ExploreMenu";
import { ThemeProvider } from "@mui/styles";
import { theme } from "./themes/Theme";
import MainBanner from "./components/molecules/banner/mainbanner/MainBanner";
import BookDetailsPage from "./components/organisms/bookdetails/BookDetailsPage";
import KeyIdeas from "./components/atoms/bookdetails/keyideas/KeyIdeas";
import BookDetailsTabs from "./components/molecules/bookdetailstabs/BookDetailsTabs";
import EnterprenurReading from "./components/Templates/enterpreneurbook/EnterpreneurReading";
import Heading from "./components/atoms/heading/Heading";

const books = [
  "Beyond Entrepreneurship 2.0",
  "Bring Your Human to Work",
  "Employee to Entrepreneur",
  "Doesn't Hurt to Ask",
  "The Fate of Food",
  "Lives of the Stoics",
  "Loving Your Business",
  "The Lonely Century",
  "Eat Better, Feel Better",
  "Dropshipping",
];

let readingBooks = [
  {
    image: bookimage,
    name: "Beyond Entrepreneurship 2.0",
    author: "Erica Keswin",
    time: "13-minute read",
    readcount: "1.9k reads",
    finished: false,
  },
  {
    image: book1,
    name: "Bring Your Human to Work",
    author: "Erica Keswin",
    time: "13-minute read",
    readcount: "1.9k reads",
    finished: false,
  },
  {
    image: book2,
    name: "Employee to Entrepreneur",
    author: "Steve Glaveski",
    time: "15-minute read",
    readcount: "1.9k reads",
    finished: false,
  },
  {
    image: book3,
    name: "Doesn't Hurt to Ask",
    author: "Trey Gowdy",
    time: "13-minute read",
    readcount: "1.9k reads",
    finished: false,
  },
  {
    image: book4,
    name: "The Fate of Food",
    author: "Amanda Little",
    time: "12-minute read",
    readcount: "1.9k reads",
    finished: false,
  },
  {
    image: book5,
    name: "Lives of the Stoics",
    author: "Ryan Holiday, Stephen Hansel",
    time: "13-minute read",
    readcount: "1.9k reads",
    finished: false,
  },
];

let finishedBooks = [
  {
    image: book6,
    name: "Loving Your Business",
    author: "Debbie King",
    time: "13-minute read",
    readcount: "1.9k reads",
    finished: true,
  },
  {
    image: book7,
    name: "The Lonely Century",
    author: "Noreena Hertz",
    time: "15-minute read",
    readcount: "1.9k reads",
    finished: true,
  },
  {
    image: book8,
    name: "Eat Better, Feel Better",
    author: "Giada De Laurentiis",
    time: "13-minute read",
    readcount: "1.9k reads",
    finished: true,
  },
  {
    image: book9,
    name: "Dropshipping",
    author: "James Moore",
    time: "12-minute read",
    readcount: "1.9k reads",
    finished: true,
  },
];

function App() {
  const [visible, setvisible] = useState(false);
  const [icon, seticon] = useState(false);
  const [search, setSearch] = useState("");
  const handleChange = () => {
    setvisible(!visible);
    seticon(!icon);
  };

  const [button, setButton] = useState(false);
  const handleReadAgain = (item: string) => {
    if (books.includes(item)) {
      let temp = finishedBooks.find((x) => x.name === item);
      if (temp === undefined) {
        temp = {
          image: "",
          name: "",
          author: "",
          time: "",
          readcount: "",
          finished: false,
        };
      }
      temp.finished = false;
      const a = finishedBooks.filter((x) => x.name !== item);
      finishedBooks = a;
      readingBooks.push(temp);
      setButton(!button);
    }
  };

  const handleFinish = (item: string) => {
    if (books.includes(item)) {
      let temp = readingBooks.find((x) => x.name === item);
      if (temp === undefined) {
        temp = {
          image: "",
          name: "",
          author: "",
          time: "",
          readcount: "",
          finished: false,
        };
      }
      temp.finished = true;
      const a = readingBooks.filter((x) => x.name !== item);
      readingBooks = a;
      finishedBooks.push(temp);
      setButton(!button);
    }
  };

  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <div className="App">
        <ToolBarHeader icon={icon} handleChange={handleChange} />
        {visible ? <ExploreMenu handleChange={handleChange} /> : undefined}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MyLibraryHeading />
                <ReadingTabs
                  currentReading={readingBooks}
                  finishedReading={finishedBooks}
                  handleReadAgain={handleReadAgain}
                  handleFinish={handleFinish}
                />
              </>
            }
          ></Route>
          <Route
            path="/bookdetails"
            element={
              <>
                <BookDetailsPage button={button} handleFinish={handleFinish}/>
                <BookDetailsTabs/>
              </>
            }>
          </Route>
          <Route path="/explore"
          element={
            <>
            <MainBanner/>
            <MainSearch search={setSearch} />
            <Heading/>
            <EnterprenurReading value={search}/>
            </>
          }>
          </Route>
        </Routes>
        <FooterMain />
      </div>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
