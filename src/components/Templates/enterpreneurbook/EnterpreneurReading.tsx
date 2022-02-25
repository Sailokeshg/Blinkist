import React from "react";
import book1 from "../../atoms/assets/book1.png";
import book2 from "../../atoms/assets/book2.png";
import book3 from "../../atoms/assets/book3.png";
import book4 from "../../atoms/assets/book4.png";
import book5 from "../../atoms/assets/book5.png";
import bookimage from "../../atoms/assets/bookimage.png";
import AddableCard from "../../organisms/cards/addcard/AddableCard";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../../themes/Theme";

const readingbooks= [
    {image:bookimage, name:"Beyond Entrepreneurship 2.0", author:"Erica Keswin", time :"13-minute read",readcount:"19k reads"},
    {image:book1, name:"Bring Your Human to Work", author:"Erica Keswin", time :"13-minute read",readcount:"19k reads"},
    {image:book2, name:"Employee to Entrepreneur", author:"Steve Glaveski", time :"15-minute read",readcount:"19k reads"},
    {image:book3, name:`Doesn't Hurt to Ask`, author:"Trey Gowdy", time :"13-minute read",readcount:"19k reads"},
    {image:book4, name:"The Fate of Food", author:"Amanda Little", time :"12-minute read",readcount:"19k reads"},
    {image:book5, name:"Lives of the Stoics", author:"Ryan Holiday, Stephen Hansel", time :"13-minute read",readcount:"19k reads"}
  ];

  interface props{
      value:string
  }

  const EnterprenurReading = (props:props) => {

    const tempBooks=readingbooks.filter(e=>e.name.toLowerCase().indexOf(props.value)>-1)

    return (
      <ThemeProvider theme={theme}>
        <AddableCard bookdetails={tempBooks}/>  
        </ThemeProvider>
    )
  }

  export default EnterprenurReading;