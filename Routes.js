import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './SRC/Screens/Splash';
import WelcomeScreen from './SRC/Screens/WelcomeScreen';
import Login from './SRC/Screens/Login';
import ForgotPassword from './SRC/Screens/ForgotPassword';
import Home from './SRC/Screens/Home';
import Skip1 from './SRC/Screens/Skip1';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './SRC/Drawer/CustomDrawer'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HomeScreen from './SRC/Screens/HomeScreen';
import Profile from './SRC/Screens/Profile';
import ApplicationType from './SRC/Screens/ApplicationType';
import ApplyLeave from './SRC/Screens/ApplyLeave';
import Outstation from './SRC/Screens/Outstation';
import AttendenceMarked from './SRC/Screens/AttendenceMarked';
import LateArivel from './SRC/Screens/LateArivel';
import EarliLeaving from './SRC/Screens/Earlileving';
import ToilLeave from './SRC/Screens/ToilLeave';
import Notification from './SRC/Screens/Notification';
import Wfh from './SRC/Screens/Wfh';
import Financial from './SRC/Screens/Financial';
import TimeLine from './SRC/Screens/TimeLine';
import ChildBss from './SRC/Screens/ChildBss';
import FeedBack from './SRC/Screens/FeedBack';
import WorkFromHome from './SRC/Screens/WorkFromHome';
import Approcial from './SRC/Screens/Approcial';
import Attendance from './SRC/Screens/Attendance';
import Reportee from './SRC/Screens/Reportee';
import TestScreen from './SRC/Screens/TestScreen';
import LeaveBalance from './SRC/Screens/LeaveBalance';
import LeaveHistory from './SRC/Screens/LeaveHistory';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from './SRC/Screens/Search';
import Scanner from './SRC/Screens/Scanner';
import Index from './SRC/Screens/Index';
import ScannerDetail from './SRC/Screens/ScannerDetail';
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
function DrawerStack() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        drawerStyle: {width: wp('100'),backgroundColor:'#E6E6E6'},
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="HomeScreenDrawer" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Approcial" component={Approcial} />
      <Drawer.Screen name="Attendance" component={Attendance} />
      <Drawer.Screen name="Reportee" component={Reportee} />
      <Drawer.Screen name="Scanner" component={Scanner} />
     
    </Drawer.Navigator>
  );
}


const BottomTab = () => {

  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name=""ApplicationType component={ApplicationType} />
      
    </Tab.Navigator>
  );
};


const Routes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Splash'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Skip1" component={Skip1} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="HomeScreen" component={DrawerStack} />
        <Stack.Screen name="ApplicationType" component={ApplicationType} />
        <Stack.Screen name="ApplyLeave" component={ApplyLeave} />
        <Stack.Screen name="Outstation" component={Outstation} />
        <Stack.Screen name="AttendenceMarked" component={AttendenceMarked} />
        <Stack.Screen name="LateArivel" component={LateArivel} />
        <Stack.Screen name="EarliLeaving" component={EarliLeaving} />
        <Stack.Screen name="ToilLeave" component={ToilLeave} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Wfh" component={Wfh} />
        <Stack.Screen name="Financial" component={Financial} />
        <Stack.Screen name="TimeLine" component={TimeLine} />
        <Stack.Screen name="ChildBss" component={ChildBss} />
        <Stack.Screen name="FeedBack" component={FeedBack} />
        <Stack.Screen name="WorkFromHome" component={WorkFromHome} />
        <Stack.Screen name="LeaveBalance" component={LeaveBalance} />
        <Stack.Screen name="LeaveHistory" component={LeaveHistory} />
        <Stack.Screen name="Search" component={Search} />
        {/* <Stack.Screen name="Scanner" component={Scanner} /> */}
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="ScannerDetail" component={ScannerDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
