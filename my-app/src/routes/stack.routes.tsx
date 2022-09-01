import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameScreen from '../pages/GameScreen';
import Login from '../pages/Login';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name="Login"
        component={ Login }
      />
      <Screen
        name="GameScreen"
        component={ GameScreen }
      />
    </Navigator>
  )
}