/// <reference path="./js/crud.d.ts" />

import { RowId, RowElement } from './interface';
import * as CRUD from './js/crud';

const row: RowElement = {
	firstName: 'Guillaume',
	lastName: 'Salva'
};

const newRowID: RowID = CRUD.insertRow(row);

const updateRow: RowElement = {
	firstName: 'Guillaume', 
    	lastName: 'Salva', 
    	age: 23
};

CRUD.updateRow(newRowId, updateRow);
CRUD.deleteRow(newRowId);
