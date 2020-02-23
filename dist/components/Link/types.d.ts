declare namespace ILink {
    interface IProps {
        className?: string;
        type: 'Primary' | 'Secondary' | 'Tertiary';
        href: string;
        children: string;
    }
    interface IClasses {
        [key: string]: 'link--primary' | 'link--secondary' | 'link--tertiary' | 'link--action';
    }
}
export default ILink;
