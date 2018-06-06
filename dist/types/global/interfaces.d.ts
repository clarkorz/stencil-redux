import { Store as ReduxStore } from 'redux';
export interface Store extends ReduxStore {
    getStore: () => any;
    setStore: (any: any) => void;
    mapStateToProps: (component: any, props: any) => void;
    mapDispatchToProps: (component: any, props: any) => void;
}
export declare type Action = Function;
