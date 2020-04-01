declare namespace IField {
    interface IProps {
        className?: string;
        id: string;
        label?: string;
        state: 'Success' | 'Warning' | 'Error';
        msg?: string;
    }
}
export default IField;
