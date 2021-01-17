import type { ChangeEvent } from 'react'
import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import styled from 'styled-components'

import ConvertTable from '@/components/ConvertTable'

type Param = {
  target: string | undefined
}

/**
 * 輸入文字後轉換為數字
 *
 * @param {String | Number | undefined} value
 */
function getNumber (value?: number | string): number {
  const defaultNum = 2

  if (!value) {
    return defaultNum
  }

  if (typeof value === 'number') {
    return value >= 2 ? value : defaultNum
  }

  switch (value) {
    case 'binary':
      value = 2
      break
    case 'octal':
      value = 8
      break
    case 'decimal':
      value = 10
      break
    case 'hexadecimal':
      value = 16
      break
    default:
      value = defaultNum
  }

  return value
}

const Solution = styled.p`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  word-wrap: break-word;
`

const PromptText = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
  color: gray;
`

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  padding-top: .5rem;
  padding-bottom: .5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;


  & > input,
  & > button {
    padding: .5rem .75rem;
    border-radius: .75rem;
    border: none;
    outline: none;
  }

  & > input {
    background-color: rgba(255, 255, 255, 0.25);
    border: 2px solid #b4b4b4;
    transition: .3s
  }

  & > input:focus {
    background-color: rgba(255, 255, 255, 0.75);
    border: 2px solid #2c9288;
  }

  & > button {
    color: white;
    font-weight: bold;
    background-color: #2c9288;
    transition: .3s;
    cursor: pointer;
  }

  & > button:hover,
  & > button:focus {
    background-color: #00463f;
  }

  & > input + button {
    margin-left: .5rem
  }
`

export default function Index () {
  const history = useHistory()

  const { target } = useParams<Param>()
  const radix = getNumber(Number(target) || target)

  /**
   * query string 上的 num 值
   */
  const [num, setNum] = useState(() => {
    const { search } = history.location
    return new URLSearchParams(search).get('num') || ''
  })

  /**
   * input 顯示的值
   */
  const [value, setValue] = useState('')

  /**
   * 轉換後輸出的值
   */
  const [output, setOutput] = useState('')

  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
  }

  /**
   * 更新 route 上的 search（query string）
   */
  const onUpdateSearch = () => {
    const search = new URLSearchParams()

    value
      ? search.append('num', value)
      : search.delete('num')

    setNum(value)
    history.push({ search: search.toString() })
  }

  /**
   * 執行進制轉換
   */
  const handleConvert = () => {
    return setOutput(Number(num).toString(radix).toUpperCase())
  }

  useEffect(() => {
    const handleSearchUpdate = () => {
      const { search } = history.location
      const searchParams = new URLSearchParams(search)
      const num = searchParams.get('num') || ''

      setValue(num)
      setNum(num)
    }

    history.listen(handleSearchUpdate)
    handleSearchUpdate()
  }, [history])

  useEffect(handleConvert, [target, num])

  return (
    <div>
      <main>
        <SearchBar>
          <input
            type="text"
            value={value}
            onChange={onInputChange}
            onKeyDown={(e) => e.keyCode === 13 && onUpdateSearch()}
            placeholder="請輸入 10 進制的數字"
          />
          <button onClick={onUpdateSearch}>
            Convert
          </button>
        </SearchBar>

        <div>
          <Solution>
            Solution：
            {output}
          </Solution>
          {
            num
              ? (
                <ConvertTable
                  radix={radix}
                  output={output}
                />
              )
              : (
                <PromptText>
                  請輸入內容
                </PromptText>
              )
          }
        </div>
      </main>
    </div>
  )
}
