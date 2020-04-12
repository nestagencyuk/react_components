/// <reference types="react" />
import ILink from '../Link/types';
declare namespace IList {
    interface IProps {
        className?: string;
        items?: Array<{
            text: string;
            href?: string;
        }>;
        children: Array<React.ReactElement<IItemProps>>;
    }
    interface IItemProps {
        className?: string;
        children: React.ReactElement<ILink.IProps> | string;
    }
    type ILinkProps = ILink.IProps;
}
export default IList;
