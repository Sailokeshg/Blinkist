import {render,screen} from '@testing-library/react';
import ReadNow from './ReadNow';

it("should render read now button",()=>{
    render(<ReadNow />);
    const button = screen.getByRole("button");
    expect(button.textContent).toBe("Read now")
})
