declare namespace ISelect {
    interface IProps {
        className?: string;
        id: string;
        state?: 'Success' | 'Warning' | 'Error';
        searchable?: boolean;
        optional?: boolean;
        placeholder?: string;
        options: Array<{
            value: string;
            label: string;
        }>;
        value: string;
        onChange: (e: any) => void;
    }
    interface IOptionsProps {
        [key: string]: any;
    }
}
export default ISelect;
