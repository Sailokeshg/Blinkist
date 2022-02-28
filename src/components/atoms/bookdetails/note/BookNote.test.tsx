import {render,screen} from '@testing-library/react';
import BookNote from './BookNote';

it("should render book note"  ,()=>{
    render(<BookNote />);
    expect(screen.getByText("Turning Your Business into an Enduring Great Company")).toBeInTheDocument();
})