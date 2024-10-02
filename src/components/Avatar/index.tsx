import { ImgHTMLAttributes } from "react";
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
}
export const Avatar = ({ src, ...props }: AvatarProps) => {
    return <div className="w-20 h-20 rounded-full bg-gray-300">
        <img src={src} {...props} />
        
        </div>;
};  