import Image, { ImageProps } from "next/image";

const PromoBanner = ({alt, ...props}: ImageProps) => {
    return (
        <Image {...props} alt={alt} height={0} width={0} className='w-full h-auto px-5' sizes="100vw" />
    );
}
 
export default PromoBanner;