/// <reference types="react" />
import ILink from '../Link/types';
declare namespace INavigation {
    interface IProps {
        className?: any;
        style?: any;
        history?: any;
        brand?: {
            img?: {
                src: string;
                alt: string;
            };
            align?: 'Start' | 'Center' | 'End';
        };
        links: Array<{
            text: string;
            align: 'Start' | 'Center' | 'End';
            href: string;
            onClick?: (e: React.SyntheticEvent) => void;
        }>;
        children?: any;
    }
    interface IBrandProps {
        img?: {
            src?: string;
            alt?: string;
        };
        href?: string;
    }
    interface IListProps {
        align?: 'Start' | 'Center' | 'End';
        items: any[];
    }
    interface IItemProps {
        active?: boolean;
        children: React.ReactElement<ILinkProps>;
    }
    interface ILinkProps extends ILink.IProps {
        active: boolean;
        onClick?: (e: React.SyntheticEvent) => void;
    }
}
export default INavigation;
