declare namespace ITextarea {
    interface IProps {
        className?: string;
        id: string;
        name?: string;
        value: string;
        onChange: (e: any) => void;
    }
}
export default ITextarea;
