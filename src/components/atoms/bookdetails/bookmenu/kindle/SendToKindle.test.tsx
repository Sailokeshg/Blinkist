import {render,screen} from '@testing-library/react';
import SendToKindle from './SendToKindle';

it("Should render send to kindle button",()=>{
      render(<SendToKindle />);
      const button = screen.getByRole("button");
    expect(button.textContent).toBe("Send to kindle")
})