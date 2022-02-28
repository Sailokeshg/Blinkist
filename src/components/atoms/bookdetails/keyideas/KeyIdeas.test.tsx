import {render,screen } from '@testing-library/react';
import KeyIdeas from './KeyIdeas';

it("should render keyideas in book details page",()=>{
    render(<KeyIdeas />);
    expect(screen.getByText("Get the key ideas from")).toBeInTheDocument();
})
