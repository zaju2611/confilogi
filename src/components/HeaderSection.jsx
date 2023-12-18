import BookmarkManagerSection from "./BookmarkManagerSection";
import HeroImage from "./HeroImage";

import Image from '../assets/images/illustration-hero.svg'

export default function HeaderSection(){
    const image ={source:Image, description:"hero image"};
    return <div>
        <HeroImage>{image}</HeroImage>
        <BookmarkManagerSection rotateBackground={false}/>
    </div>
}