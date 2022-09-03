import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from '../store'
import AuthProvider from "../contexts/auth";

import { StackRoutes } from "./stack.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <AuthProvider>
          <StackRoutes />
        </AuthProvider>
      </Provider>
    </NavigationContainer>
  )
}