
const ProtectedRoute = ({component, isAuthenticated}) => {
  return(
    isAuthenticated && component
  )
}

export default ProtectedRoute;
