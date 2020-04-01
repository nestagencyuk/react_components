declare namespace IImage {
    interface IProps {
        className?: string;
        type?: 'Rounded' | 'Round';
        aspect: '1x1' | '4x3' | '16x9';
        src: string;
        alt: string;
    }
}
export default IImage;
