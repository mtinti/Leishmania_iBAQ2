let X1='C1';
let Y1='C2';
let X2='T1';
let Y2='T2';

let Y_LABEL_SCATTER1 = 'intensity C1';
let X_LABEL_SCATTER1 = 'intensity C2';

let Y_LABEL_SCATTER2 = 'intensity T1';
let X_LABEL_SCATTER2 = 'intensity T2';

let FLIP_Y1=false;
let FLIP_Y2=false;

let PLOT_WIDTH=550;
let PLOT_HEIGHT=400;

let PROJECT_TITLE='Absolute Protein Quantification TMT';
let TAB_TITLE='Leishmania'

let _margin_1 = 0;
let _margin_2 = 0;

let _border_1_x = 5;
let _border_1_y =5;

let _border_2_x = 5;
let _border_2_y = 5;

let BOX_PLOT_COLS_1 = ['C1', 'C2'];
let BOX_PLOT_COLS_2 = ['T1', 'T2'];

//for the bar plot legend
let CONDITION_1 = 'Control';
let CONDITION_2 = 'Treatment';


let COLOR_SELECTION_TABLE = 'orange';
let COLOR_SELECTION_CIRCLE = 'orange';

let Y_LABEL_BARPLOT = 'iBAQ';

//names of the file with the data
//scatter plots
let File_1 = 'indata.csv';
//bar plots
let File_2 = 'indata2.csv';

//these are th columns to show from file n1
//positions og Gene_acc','Gene_id' must not change
let COLUMNS_TO_TABULATE = ['Gene_acc','Gene_id','C1','C2','T1', 'T2', 'Desc', 'pg_index'];