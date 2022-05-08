import * as React from 'react';
import { FAB, Portal, Provider } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const FAButton = () => {
    const [state, setState] = React.useState({ open: false });
    const onStateChange = ({ open }) => setState({ open });
    const { open } = state;
    const navigation = useNavigation();
  
    return (
      <Provider>
        <Portal>
          <FAB.Group
            open={open}
            icon={open ? 'calendar-today' : 'plus'}
            actions={[
              {
                icon: 'phone',
                label: 'Chat Bot',
                onPress: () => navigation.navigate('ChatBot'),
                small: false,
              },
              {
                icon: 'home',
                label: 'Home',
                onPress: () => navigation.navigate('DashBoard'),
                small: false,
              },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
                // do something if the speed dial is open
              }
            }}
          />
        </Portal>
      </Provider>
    );
  };
  
  export default FAButton;