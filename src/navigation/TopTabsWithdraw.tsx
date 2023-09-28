import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Withdraw,HistoryWithdraw } from '../screens';

const Tab = createMaterialTopTabNavigator();

function TopTabsWithdraw() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Withdraw" component={Withdraw} />
      <Tab.Screen name="History" component={HistoryWithdraw} />
    </Tab.Navigator>
  );
}

export default TopTabsWithdraw