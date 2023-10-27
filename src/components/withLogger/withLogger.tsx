import ConsoleLog from './ConsoleLog'

const defaultMessage = 'Hello from'

const withLogger = <TProps extends JSX.IntrinsicAttributes>(
  Component: React.FC<TProps>,
  message: string = defaultMessage,
) => {
  const componentName = Component.displayName || Component.name || 'Component'

  const WrappedComponent: React.FC<TProps> = function MyComponent(props) {
    return (
      <>
        <ConsoleLog componentName={componentName} message={message} />
        <Component {...props} />
      </>
    )
  }

  return WrappedComponent
}

export default withLogger
