import {render,screen} from '@testing-library/react';
import BannerImage from './BannerImage';


it("should render banner image",()=>{
         render(<BannerImage />);
         const image = screen.getByRole('img')
        
        expect(image).toHaveAttribute('alt',"main logo")
    })