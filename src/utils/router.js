import { Navigate } from "react-router-dom";

export const replaceWith = (withPath) => () =>
  <Navigate to={withPath} replace />;
