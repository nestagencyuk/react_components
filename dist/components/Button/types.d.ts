/// <reference types="react" />
declare namespace IButton {
    type Type = 'Primary' | 'Secondary' | 'Tertiary' | 'Action';
    type Class = 'btn--primary' | 'btn--secondary' | 'btn--tertiary' | 'btn--action';
    interface IProps {
        className?: string;
        href?: string;
        type: Type;
        submit?: boolean;
        children: string;
        onClick?: (e: React.SyntheticEvent) => void;
    }
    interface IClasses {
        [key: string]: Class;
    }
}
export default IButton;
