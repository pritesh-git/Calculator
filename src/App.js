import { useState } from 'react'

const buttonArray = [
  [1, 2, 3, '*'],
  [4, 5, 6, '/'],
  [7, 8, 9, '-'],
  ['.', 0, '+'],
]

const App = () => {
  const [firstVal, newVal] = useState('')
  const [optVal, newOpt] = useState('')
  const [iValue, fValue] = useState('')

  const numPress = n => fValue(iValue + n)

  const clr = () => {
    newOpt('')
    fValue('')
    newOpt('')
  }

  const optPress = opt => {
    if (optVal !== '') resultPress(0)
    else if (typeof iValue === 'number') newVal(iValue)
    else {
      clr()
      return
    }

    fValue('')
    newOpt(opt)
  }

  const resultPress = n => {
    if (typeof firstVal === 'number' && typeof iValue === 'number') {
      switch (optVal) {
        case '+': {
          const res = parseInt(firstVal) + parseInt(iValue)
          newVal(res)
          break
        }
        case '-': {
          const res = parseInt(firstVal) - parseInt(iValue)
          newVal(res)
          break
        }
        case '/': {
          const res = parseInt(firstVal) / parseInt(iValue)
          newVal(res)
          break
        }
        case '*': {
          const res = parseInt(firstVal) * parseInt(iValue)
          newVal(res)
          break
        }
        default:
          break
      }
      if (n) {
        newOpt('')
        fValue('')
      }
    }
  }

  return (
    <div class="grid min-h-screen place-items-center bg-slate-300">
      <div class="w-96 border border-gray-500 bg-blue-700 p-5 rounded-md shadow-lg">
        <h2 className="float-right">
          {firstVal} {optVal} {iValue}
        </h2>
        <input
          type="text"
          name="inputValue"
          value={iValue}
          className="w-full p-3 bg-white rounded-md shadow-md"
          onKeyPress={() => {
            'if(isNaN(String.fromCharCode(event.keyCode))) return false;'
          }}
          readOnly
        />

        <div className="grid grid-flow-row gap-4 m-4">
          {buttonArray?.map((btn, idx) => {
            return (
              <div className="grid grid-flow-col gap-4" key={idx}>
                {btn?.map((btnVal, btnIdx) => (
                  <button
                    type="button"
                    key={btnIdx}
                    className="p-2 border rounded-md shadow-md"
                    onClick={() => {
                      if (typeof btnVal === 'string') optPress(btnVal)
                      else numPress(btnVal)
                    }}>
                    {btnVal}
                  </button>
                ))}
              </div>
            )
          })}
          <div className="grid grid-flow-col gap-4">
            <button
              type="button"
              key={'clear'}
              className="p-2 border rounded-md shadow-md"
              onClick={() => {
                clr()
              }}>
              C
            </button>
            <button
              type="button"
              key={'result'}
              className="p-2 border rounded-md shadow-md"
              onClick={() => {
                resultPress(1)
              }}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
