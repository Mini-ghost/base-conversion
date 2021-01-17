import styled from 'styled-components'

type ConvertTableProps = {
  output: string
  radix: number
}

const Table = styled.table`
  border: 2px solid #232425;
  border-collapse: collapse;
  border-spacing: 0;
  width: 95%;
  max-width: 992px;
  background-color: #efefef;
  margin-right: auto;
  margin-left: auto;
  & td {
    text-align: center;
    border: 1px solid #232425;
    padding: .25rem 1rem;
  }
`

const TableWapper = styled.div`
  background-color: #e5e5e5;
  border-radius: .75rem;
  padding: 1rem 1.5rem;

  & > div {
    padding: .5rem 0;

    // -webkit-
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      height: .5rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: gray;
      border-radius: .5rem;
      background-clip: padding-box;
    }

    // -moz-
    scrollbar-color: gray transparent;
    scrollbar-width: thin;
  }
`

export default function ConvertTable (props: ConvertTableProps) {
  const { output, radix = 2 } = props
  const data = output.split('')
  const { length } = data

  return (
    <TableWapper>
      <div>
        <Table>
          <colgroup>
            {
              data.map((str, id) => {
                const key = `${id}:${str}`
                const width = `${Math.floor(100 / length)}%`

                return <col
                  key={key}
                  width={width}
                />
              })
            }
          </colgroup>

          <thead>
            <tr>
              {
                data.map((_, id) => {
                  return (
                    <td key={id}>
                      {length - id}
                    </td>
                  )
                })
              }
            </tr>
          </thead>

          <tbody>
            <tr>
              {
                data.map((str, id) => {
                  const key = `${id}:${str}`

                  return (
                    <td key={key}>
                      {Math.pow(radix, (length - 1) - id)}
                    </td>
                  )
                })
              }
            </tr>
            <tr>
              {
                data.map((str, id) => {
                  const key = `${id}:${str}`

                  return (
                    <td key={key}>
                      {str}
                    </td>
                  )
                })
              }
            </tr>
          </tbody>
        </Table>
      </div>
    </TableWapper>
  )
}
