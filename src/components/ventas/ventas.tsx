import React from 'react'
import { useApp } from '../../hooks/useFilter'
import { useTable } from 'react-table'
import './ventas.scss'


const Ventas = () => {
  const { dataPay } = useApp()

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
  return (
    <div className='content-table'>
      <Table columns={columns} data={dataPay} />
    </div>
  )
}





export default Ventas