import {render,screen} from '@testing-library/react';
import {BannerItemOne} from './BannerItemOne';

it("shoudl render explore book heading",()=>{
    render(<BannerItemOne />);
    expect(screen.getByText("Explore Books on entrepreneurship")).toBeInTheDocument();
})