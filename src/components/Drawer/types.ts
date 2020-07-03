declare namespace IDrawer {
  interface IProps {
    position?: 'Left' | 'Right';
    children: React.ReactNode;
    onClick: () => void;
  }
}

export { IDrawer };
