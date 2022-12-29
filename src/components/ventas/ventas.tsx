import React, { useContext } from 'react'
import { useTable } from 'react-table'
import './ventas.scss'
import { DataContext } from '../../context/dataProvider'


const Ventas = () => {
  // const { dataPay } = useApp()
  const { data } = useContext(DataContext);


function Table({ columns, data }: any) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

  const columns = React.useMemo(
    () => [
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Transacción',
            accessor: 'transaction',
          },
          {
            Header: 'Fecha',
            accessor: 'date',
          },
          {
            Header: 'Método de pago',
            accessor: 'payMethod',
          },
          {
            Header: 'ID transacciones Bold',
            accessor: 'transactionId',
          },
          {
            Header: 'Monto',
            accessor: 'amount',
          },
        ],
      },
    ],
    []
  )
  const dataSession = sessionStorage.getItem("state");
  return (
    <div className='content-table'>
      <Table columns={columns} data={data} />
    </div>
  )
}





export default Ventas