/// <reference types="react" />
declare namespace IBlock {
    interface IProps {
        className?: string;
        type?: 'Fill';
        header?: IHeaderProps;
        media?: IMediaProps;
        children: React.ReactNode | React.ReactNode[];
    }
    interface IClasses {
        [key: string]: 'block--fill';
    }
    interface IHeaderProps {
        className?: string;
        heading: string;
    }
    interface IMediaProps {
        type: 'Image' | 'Video' | 'Custom';
        src: string;
        alt: string;
        align?: 'Left' | 'Right';
    }
    interface IBodyProps {
        children: React.ReactNode | React.ReactNode[];
    }
}
export default IBlock;
