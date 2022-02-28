import { render, screen } from "@testing-library/react"
import AddToLibraryButton  from "./AddToLibraryButton"
import {BrowserRouter} from 'react-router-dom';

const MockButton =()=> {
    return(
        <BrowserRouter>
            <AddToLibraryButton />
        </BrowserRouter>
    )
}
it("Testing AddToLibraryButton",()=>{
    render(<MockButton/>)
    expect(screen.getByTestId("AddToLibBtn")).toBeInTheDocument();
})