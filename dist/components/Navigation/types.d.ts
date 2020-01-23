/// <reference types="react" />
declare namespace Navigation {
    type Brand = {
        img: string;
        location: 'left' | 'center' | 'right';
    };
    type Link = {
        text: string;
        location?: 'left' | 'right';
        href: string;
        onClick?: (e: React.SyntheticEvent) => void;
    };
    interface IProps {
        className?: any;
        style?: any;
        history?: any;
        brand?: Brand;
        links: Link[];
        onClick: () => void;
    }
    interface IState {
        [key: string]: any;
    }
    interface IBrandProps {
        className?: string;
        img?: string;
    }
    interface IListProps {
        className?: string;
        children: React.ReactElement<IItemProps>[];
    }
    interface IItemProps {
        className?: string;
        active?: boolean;
        children: React.ReactElement<ILinkProps>;
    }
    interface ILinkProps {
        className?: string;
        component?: any;
        href: string;
        active: boolean;
        clicked?: boolean;
        children: string;
        onClick?: (e: React.SyntheticEvent) => void;
    }
}
export default Navigation;
