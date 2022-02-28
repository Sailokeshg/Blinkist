import {render,screen } from '@testing-library/react';
import BookDetailsTitle from './BookDetailsTitle';

it("should render title in book details page",()=>{
    render(<BookDetailsTitle />);
    expect(screen.getByText("Beyond Entrepreneurship 2.0")).toBeInTheDocument();
})
