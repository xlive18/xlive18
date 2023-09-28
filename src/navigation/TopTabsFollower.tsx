import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Following } from '../screens';
import { Follower } from '../screens';

const Tab = createMaterialTopTabNavigator();

function TopTabsFOllower() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Pengikut" component={Follower} />
      <Tab.Screen name="Diikuti" component={Following} />
    </Tab.Navigator>
  );
}

export default TopTabsFOllower