import { NavigationContainer } from "@react-navigation/native";
import AuthProvider from "../contexts/auth";

import { StackRoutes } from "./stack.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackRoutes />
      </AuthProvider>
    </NavigationContainer>
  )
}