type Props = {
  errorMessage: string
}

const ErrorMessage = (props: Props) => {
  const { errorMessage } = props

  return (
    <p className="mt-2 text-sm text-red-500">
      {errorMessage}
    </p>
  )
}

export { ErrorMessage }
