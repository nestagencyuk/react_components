/// <reference types="react" />
/**
 * Context for displaying something that opens
 */
declare const ToggleContext: import("react").Context<{
    toggled: boolean;
    setToggled: (toggled: boolean) => void;
}>;
export default ToggleContext;
