/// <reference types="react" />
declare namespace IButton {
    interface IProps {
        className?: string;
        href?: string;
        type: 'Primary' | 'Secondary' | 'Tertiary' | 'Action';
        icon?: {
            name: string;
            align: 'Start' | 'End';
        };
        submit?: boolean;
        children: string;
        onClick?: (e: React.SyntheticEvent) => void;
    }
}
export default IButton;
