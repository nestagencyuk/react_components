declare namespace IAlert {
    interface IProps {
        type?: 'Success' | 'Warning' | 'Error' | 'Info';
        footer?: any;
        children: any;
        onClose: () => {};
    }
}
export default IAlert;
