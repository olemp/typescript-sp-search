module Model.Search {
    export interface QueryParameters {
        querytext?: string;
        querytemplate?: string;
        enableinterleaving?: boolean;
        sourceid?: string;
        rankingmodelid?: string;
        startrow?: number;
        rowlimit?: number;
        rowsperpage?: number;
        selectproperties?: string;
        culture?: number;
        refiners?: string;
        refinementfilters?: string;
        hiddenconstraints?: string;
        sortlist?: string;
        enablestemming?: boolean;
        trimduplicates?: boolean;
        trimduplicatesincludeid?: number;
        tineout?: number;
        enablenicknames?: boolean;
        enablephonetic?: boolean;
        enablefql?: boolean;
        hithighlightedproperties?: string;
        bypassresulttypes?: boolean,
        processbetbets?: boolean;
        clienttype?: string;
        personalizationdata?: string;
        resultsurl?: string;
        querytag?: string;
        enablequeryrules?: boolean;
    }
    export interface CustomResults {
        results: any[];
    }

    export interface Metadata4 {
        type: string;
    }

    export interface Metadata5 {
        type: string;
    }

    export interface Result {
        Key: string;
        Value: string;
        ValueType: string;
    }

    export interface Properties {
        results: Result[];
    }
    export interface CellResult {
        Key: string;
        Value: any;
        ValueType: string;
    }

    export interface Cells {
        results: CellResult[];
    }

    export interface RowResult {
        Cells: Cells;
    }

    export interface Rows {
        results: RowResult[];
    }

    export interface Table {
        Rows: Rows;
    }

    export interface RelevantResults {
        GroupTemplateId?: any;
        ItemTemplateId?: any;
        Properties: Properties;
        ResultTitle?: any;
        ResultTitleUrl?: any;
        RowCount: number;
        Table: Table;
        TotalRows: number;
        TotalRowsIncludingDuplicates: number;
    }

    export interface PrimaryQueryResult {
        CustomResults: CustomResults;
        QueryId: string;
        QueryRuleId: string;
        RefinementResults?: any;
        RelevantResults: RelevantResults;
        SpecialTermResults?: any;
    }

    export interface Metadata9 {
        type: string;
    }

    export interface PropertyResult {
        Key: string;
        Value: string;
        ValueType: string;
    }

    export interface Properties2 {
        results: PropertyResult[];
    }

    export interface Metadata10 {
        type: string;
    }

    export interface SecondaryQueryResults {
        results: any[];
    }

    export interface Metadata11 {
        type: string;
    }

    export interface TriggeredRules {
        results: any[];
    }

    export interface Query {
        ElapsedTime: number;
        PrimaryQueryResult: PrimaryQueryResult;
        Properties: Properties2;
        SecondaryQueryResults: SecondaryQueryResults;
        SpellingSuggestion: string;
        TriggeredRules: TriggeredRules;
    }

    export interface D {
        query: Query;
    }

    export interface SearchResultObject {
        d: D;
    }
}
    