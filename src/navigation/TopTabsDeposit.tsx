import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Deposit } from '../screens';
import { HistoryDeposit } from '../screens';

const Tab = createMaterialTopTabNavigator();

function TopTabsDeposit() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Deposit" component={Deposit} />
      <Tab.Screen name="History" component={HistoryDeposit} />
    </Tab.Navigator>
  );
}

export default TopTabsDeposit