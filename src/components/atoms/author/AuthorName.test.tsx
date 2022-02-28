import AuthorName from "./AuthorName";
import {render,screen} from '@testing-library/react';

it("should render authornme",()=>{
    render(<AuthorName authorName="john"/>);
    expect(screen.getByText("john")).toBeInTheDocument();
    })