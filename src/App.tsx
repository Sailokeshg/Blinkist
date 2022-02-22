import  React from 'react';

import './App.css';


import book1 from "../src/components/atoms/assets/book1.png";
import book2 from "../src/components/atoms/assets/book2.png";
import book3 from "../src/components/atoms/assets/book3.png";
import book4 from "../src/components/atoms/assets/book4.png";
import book5 from "../src/components/atoms/assets/book5.png";
import book6 from "../src/components/atoms/assets/book6.png";
import book7 from "../src/components/atoms/assets/book7.png";
import book8 from "../src/components/atoms/assets/book8.png";
import book9 from "../src/components/atoms/assets/book9.png";
import bookimage from "../src/components/atoms/assets/bookimage.png";
import ToolBarHeader from './components/organisms/header/toolbar/ToolBarHeader';
import { useState } from 'react';
import { ThemeProvider } from '@material-ui/core';
import {theme} from './themes/Theme';
import MyLibraryHeading from './components/atoms/mylibrary/mylibrary-heading/MyLibraryHeading';


let readingBooks = [
  {
    image: bookimage,
    name: "Beyond Entrepreneurship 2.0",
    author: "Erica Keswin",
    time: "13-minute read",
    finished: false,
  },
  {
    image: book1,
    name: "Bring Your Human to Work",
    author: "Erica Keswin",
    time: "13-minute read",
    finished: false,
  },
  {
    image: book2,
    name: "Employee to Entrepreneur",
    author: "Steve Glaveski",
    time: "15-minute read",
    finished: false,
  },
  {
    image: book3,
    name: "Doesn't Hurt to Ask",
    author: "Trey Gowdy",
    time: "13-minute read",
    finished: false,
  },
  {
    image: book4,
    name: "The Fate of Food",
    author: "Amanda Little",
    time: "12-minute read",
    finished: false,
  },
  {
    image: book5,
    name: "Lives of the Stoics",
    author: "Ryan Holiday, Stephen Hansel",
    time: "13-minute read",
    finished: false,
  },
];


let finishedBooks = [
  {
    image: book6,
    name: "Loving Your Business",
    author: "Debbie King",
    time: "13-minute read",
    finished: true,
  },
  {
    image: book7,
    name: "The Lonely Century",
    author: "Noreena Hertz",
    time: "15-minute read",
    finished: true,
  },
  {
    image: book8,
    name: "Eat Better, Feel Better",
    author: "Giada De Laurentiis",
    time: "13-minute read",
    finished: true,
  },
  {
    image: book9,
    name: "Dropshipping",
    author: "James Moore",
    time: "12-minute read",
    finished: true,
  },
];

function App() {

  const [visible,setvisible] =useState(false);
  const [icon,seticon] =useState(false);
  const handleChange = () => {
    setvisible(!visible);
    seticon(!icon);
  }
  return (
    
    <div className="App">
     <ToolBarHeader icon={icon} handleChange={handleChange}/>
    </div>
    
  );
}

export default App;
