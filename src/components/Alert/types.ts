declare namespace IAlert {
  interface IProps {
    type?: 'Success' | 'Warning' | 'Error' | 'Info'
    timeout: number
    footer: any
    children: any
  }
}

export default IAlert
