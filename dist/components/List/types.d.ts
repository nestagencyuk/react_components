/// <reference types="react" />
declare namespace IList {
    interface IProps {
        className?: string;
        children: React.ReactElement<IItemProps>[];
    }
    interface IItemProps {
        className?: string;
        children: React.ReactElement<ILinkProps> | string;
    }
    interface ILinkProps {
        className?: string;
        href?: string;
        external?: boolean;
        children?: any;
    }
}
export default IList;
