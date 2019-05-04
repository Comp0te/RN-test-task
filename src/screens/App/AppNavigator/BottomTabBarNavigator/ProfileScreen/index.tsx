import React from 'react';

import { SafeAreaView, Text } from 'react-native';

const ProfileScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <Text>Profile</Text>
    </SafeAreaView>
  );
};

export default React.memo(ProfileScreen);
