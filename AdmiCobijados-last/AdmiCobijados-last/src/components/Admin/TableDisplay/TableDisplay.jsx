import './TableDisplay.css'
import BTable from 'react-bootstrap/Table'
import { useGlobalFilter, useTable, useSortBy, usePagination } from 'react-table'
import { Pagination } from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap'
import { DropdownButton } from 'react-bootstrap'
import { GlobalFilter } from './globalFilter'
/*Recibe como parámetros 'data' que es un arrego con los objetos con la información para llenar la tabla, y
'columns' que es un ARREGLO de objetos que debe tener tres principales atributos:
1.headerName: El nombre de la columna a mostrar
2.field: El nombre del atributo que se accesara de los objetos de 'data' para rellenar las filas
3.accion: Una función que debe retornar elementos HTML.
('accion' es opcional)
*/
export default function TableDisplay({ columns, data, tHooks }) {
    // Use the state and functions returned from useTable to build your UI
    const { 
        getTableProps,
        headerGroups,
        getTableBodyProps,
        prepareRow,
        page,//Se usa en lugar de rows
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        preGlobalFilteredRows,
        setGlobalFilter,
        state,
        state: { pageIndex, pageSize },
        } = useTable({
      columns,
      data,
      initialState: {
          pageIndex: 0, 
          hiddenColumns: ["id"]}
    },
    useGlobalFilter,
    tHooks,
    useSortBy,
    usePagination)
  
    // Render the UI for your table
    return (
        <>
        <GlobalFilter preGlobalFilteredRows={preGlobalFilteredRows} setGlobalFilter={setGlobalFilter} globalFilter={state.globalFilter}/>
        {/* Este es el apartado que se encarga de la renderización de la tabla */}
        <BTable striped bordered hover size="sm" {...getTableProps()}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    {column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : "→"}
                    </th>
                ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
                prepareRow(row)
                return (
                <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                    return (
                        <td {...cell.getCellProps()}>
                        {cell.render('Cell')}
                        </td>
                    )
                    })}
                </tr>
                )
            })}
            </tbody>
        </BTable>
        {/* Este es el apartado que se encarga de la paginación de la tabla */}
        <div className="pagination">            
            <Pagination>
                <Pagination.First onClick={() => gotoPage(0)} disabled={!canPreviousPage} />
                <Pagination.Prev onClick={() => previousPage()} disabled={!canPreviousPage}/>
                <Pagination.Next onClick={() => nextPage()} disabled={!canNextPage}/>
                <Pagination.Last onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}/>
            </Pagination>
            <span className='PaginationSpanText'>
                Page{' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
            </span>
            <span className='PaginationSpanText'>
                | Go to page:{' '}
                <input
                    className='PaginationInput'
                    type="number"
                    defaultValue={pageIndex + 1}
                    onChange={e => {
                    const page = e.target.value ? Number(e.target.value) - 1 : 0
                    gotoPage(page)
                    }}
                />
            </span>{' '}
            <DropdownButton value={pageSize}
            className='PaginationPageSizeSelect'
                title={`Show ${pageSize}`}>
                {[5, 10, 20, 30, 40, 50].map(pageSize => (
                    <Dropdown.Item
                    key={pageSize} 
                    value={pageSize}
                    onClick={e => {
                        console.log(e.target.getAttribute('value'))
                        setPageSize(Number(e.target.getAttribute('value')))
                    }}>
                        Show {pageSize}
                    </Dropdown.Item>
                ))}
            </DropdownButton>
        </div>        
      </>
    )
  }