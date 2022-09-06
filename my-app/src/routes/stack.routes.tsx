import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feedback from '../pages/Feedback';
import GameScreen from '../pages/GameScreen';
import Login from '../pages/Login';
import Ranking from '../pages/Ranking';

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
      <Screen
        name="Feedback"
        component={ Feedback }
      />
      <Screen
        name="Ranking"
        component={ Ranking }
      />
    </Navigator>
  )
}