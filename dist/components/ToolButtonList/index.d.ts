import { Component } from 'react';
interface State {
    show: boolean;
}
export declare class ToolButtonList extends Component<{}, State> {
    toolButtons: {
        [index: string]: () => void;
    };
    private bound;
    constructor(props: {});
    componentWillMount(): void;
    render(): JSX.Element;
    help(): string;
    beforeComplete(): Promise<any>;
    private dispatch;
    private hide;
    private setDefaultButtonList;
    private getList;
}
export {};
