/// <amd-module name="@scom/scom-charts/components/dataForm.tsx" />
declare module "@scom/scom-charts/components/dataForm.tsx" {
    import { Module, ControlElement, Container } from '@ijstech/components';
    interface IData {
        options: any;
    }
    interface ScomChartsDataFormElement extends ControlElement {
        dataSchema?: string;
        uiSchema?: string;
        options: any;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ["i-scom-charts--data-form"]: ScomChartsDataFormElement;
            }
        }
    }
    export class ScomChartsDataForm extends Module {
        private formEl;
        private _dataSchema;
        private _uiSchema;
        private _data;
        constructor(parent?: Container, options?: any);
        get data(): IData;
        set data(value: IData);
        refreshFormData(): Promise<IData>;
        private renderUI;
        private onInputChanged;
        onCustomInputChanged(data: IData): Promise<void>;
        init(): Promise<void>;
        render(): any;
    }
}
/// <amd-module name="@scom/scom-charts/interface.ts" />
declare module "@scom/scom-charts/interface.ts" {
    import { BigNumber } from "@ijstech/eth-wallet";
    import { ModeType } from "@scom/scom-chart-data-source-setup";
    export interface IChartConfig<T> {
        dataSource: string;
        queryId?: string;
        apiEndpoint?: string;
        title: string;
        description?: string;
        options: T;
        file?: {
            cid?: string;
            name?: string;
        };
        mode: ModeType;
    }
    export interface IFormatNumberOptions {
        precision?: number;
        roundingMode?: BigNumber.RoundingMode;
    }
    export type ThemeType = 'light' | 'dark';
}
/// <amd-module name="@scom/scom-charts/components/chart.tsx" />
declare module "@scom/scom-charts/components/chart.tsx" {
    import { Module, ControlElement, Container } from '@ijstech/components';
    import { ThemeType } from "@scom/scom-charts/interface.ts";
    export interface ChartsElement extends ControlElement {
        theme?: ThemeType;
        data?: any;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-charts']: ChartsElement;
            }
        }
    }
    export class Charts<T> extends Module {
        private _data;
        private _theme;
        private _echart;
        private _chartIns;
        private _tool;
        private chartDom;
        constructor(parent?: Container, options?: any);
        get data(): T;
        set data(value: T);
        get theme(): ThemeType;
        set theme(value: ThemeType);
        registerTool(): Promise<void>;
        private addLib;
        showLoading(): void;
        drawChart(): void;
        private _drawChart;
        updateChartOptions(): void;
        resize(): void;
        private initChartDom;
        init(): Promise<void>;
        render(): void;
    }
}
/// <amd-module name="@scom/scom-charts/components/index.ts" />
declare module "@scom/scom-charts/components/index.ts" {
    export { ScomChartsDataForm } from "@scom/scom-charts/components/dataForm.tsx";
    export { Charts } from "@scom/scom-charts/components/chart.tsx";
}
/// <amd-module name="@scom/scom-charts/index.css.ts" />
declare module "@scom/scom-charts/index.css.ts" {
    export const containerStyle: string;
    export const textStyle: string;
    export const chartStyle: string;
}
/// <amd-module name="@scom/scom-charts/assets.ts" />
declare module "@scom/scom-charts/assets.ts" {
    function fullPath(path: string): string;
    const _default: {
        fullPath: typeof fullPath;
    };
    export default _default;
}
/// <amd-module name="@scom/scom-charts/utils.ts" />
declare module "@scom/scom-charts/utils.ts" {
    import { BigNumber } from '@ijstech/eth-wallet';
    export const isNumeric: (value: string | number | BigNumber) => boolean;
    export const formatNumber: (num: number, options?: {
        format?: string;
        decimals?: number;
        percentValues?: boolean;
    }) => any;
    export const formatNumberByFormat: (num: number, format: string, separators?: boolean) => any;
    export const groupArrayByKey: (arr: [Date | string, string | number][], isMerged?: boolean) => (string | number | Date)[][];
    export const groupByCategory: (data: {
        [key: string]: any;
    }[], category: string, xAxis: string, yAxis: string) => {
        [key: string]: any;
    };
    export const extractUniqueTimes: (data: {
        [key: string]: any;
    }[], keyValue: string) => {
        [key: string]: any;
    };
    export const concatUnique: (obj1: {
        [key: string]: any;
    }, obj2: {
        [key: string]: any;
    }) => {};
}
/// <amd-module name="@scom/scom-charts" />
declare module "@scom/scom-charts" {
    import { Module, ControlElement, Container, IDataSchema, VStack, IUISchema, Modal } from '@ijstech/components';
    import { Charts } from "@scom/scom-charts/components/index.ts";
    import { IChartConfig, ThemeType } from "@scom/scom-charts/interface.ts";
    export * from "@scom/scom-charts/utils.ts";
    export { Charts };
    interface ScomChartsElement<T> extends ControlElement {
        lazyLoad?: boolean;
        data: IChartConfig<T>;
        defautData?: IChartConfig<T>;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-charts']: ScomChartsElement<any>;
            }
        }
    }
    export class ScomCharts<T> extends Module {
        private chartContainer;
        private vStackInfo;
        private pnlChart;
        private loadingElm;
        private lbTitle;
        private lbDescription;
        private chartEl;
        protected _data: IChartConfig<T>;
        private _theme;
        protected chartData: {
            [key: string]: string | number;
        }[];
        private _defautData;
        private columnNames;
        tag: any;
        static create(options?: ScomChartsElement<any>, parent?: Container): Promise<ScomCharts<any>>;
        constructor(parent?: Container, options?: ScomChartsElement<T>);
        get theme(): ThemeType;
        set theme(value: ThemeType);
        getFormSchema(columns: string[]): {
            builderSchema: {
                dataSchema: {};
                uiSchema: {};
                advanced: {
                    dataSchema: {};
                    uiSchema: {};
                };
            };
            embededSchema: {
                dataSchema: {};
                uiSchema: {};
            };
        };
        getChartData(): any;
        showConfigurator(parent: Modal, prop: string): void;
        private onConfigSave;
        private getData;
        private setData;
        private getTag;
        private setTag;
        private _getActions;
        getConfigurators(): ({
            name: string;
            target: string;
            getActions: () => ({
                name: string;
                icon: string;
                command: (builder: any, userInputData: any) => {
                    execute: () => Promise<void>;
                    undo: () => void;
                    redo: () => void;
                };
                userInputDataSchema: IDataSchema;
                userInputUISchema: IUISchema;
                customUI?: undefined;
            } | {
                name: string;
                icon: string;
                command: (builder: any, userInputData: any) => {
                    execute: () => Promise<void>;
                    undo: () => void;
                    redo: () => void;
                };
                customUI: {
                    render: (data?: any, onConfirm?: (result: boolean, data: any) => void, onChange?: (result: boolean, data: any) => void) => VStack;
                };
                userInputDataSchema?: undefined;
                userInputUISchema?: undefined;
            })[];
            getData: any;
            setData: (data: IChartConfig<T>) => Promise<void>;
            getTag: any;
            setTag: any;
            getLinkParams?: undefined;
            setLinkParams?: undefined;
        } | {
            name: string;
            target: string;
            getActions: () => ({
                name: string;
                icon: string;
                command: (builder: any, userInputData: any) => {
                    execute: () => Promise<void>;
                    undo: () => void;
                    redo: () => void;
                };
                userInputDataSchema: IDataSchema;
                userInputUISchema: IUISchema;
                customUI?: undefined;
            } | {
                name: string;
                icon: string;
                command: (builder: any, userInputData: any) => {
                    execute: () => Promise<void>;
                    undo: () => void;
                    redo: () => void;
                };
                customUI: {
                    render: (data?: any, onConfirm?: (result: boolean, data: any) => void, onChange?: (result: boolean, data: any) => void) => VStack;
                };
                userInputDataSchema?: undefined;
                userInputUISchema?: undefined;
            })[];
            getLinkParams: () => {
                data: string;
            };
            setLinkParams: (params: any) => Promise<void>;
            getData: any;
            setData: any;
            getTag: any;
            setTag: any;
        })[];
        private updateStyle;
        private updateTheme;
        private onUpdateBlock;
        private updateChartData;
        private renderSnapshotData;
        private renderLiveData;
        private renderChart;
        resize(): void;
        init(): Promise<void>;
        render(): any;
    }
}
