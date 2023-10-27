import { useEffect } from 'react'
import { IConsoleLog } from './IConsoleLog'

const ConsoleLog: React.FC<IConsoleLog> = ({ componentName, message }: IConsoleLog) => {
  useEffect(() => {
    console.log(`${message} ${componentName}`)
  }, [componentName, message])

  return null
}

export default ConsoleLog
