import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useUserStore } from '../../service/userStore';
import InquiryModal from './InquiryModal';
import { headerStyles } from '../../styles/headerStyles';
import { Menu, CircleUser } from 'lucide-react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from '../../utils/Constants';
import { navigate } from '../../utils/NavigationUtils';

const HomeHeader = () => {

    const [visible, setVisible] = useState(false);
    const user = useUserStore((state) => state.user);

    useEffect(()=>{
        const checkUserName = () =>{
            const storedName = user?.name;
            if(!storedName){
                setVisible(true);
                return;
            }
        };
        checkUserName();
    },[]);

    const handleNavigation = () => {
        const storedName = user?.name;
            if(!storedName){
                setVisible(true);
                return;
            }
        navigate('JoinMeetScreen');
    }


  return (
    <View>
        <SafeAreaView />
        <View style={headerStyles.container}>
            <Menu  name="menu" size={RFValue(20)} color={Colors.text} />
            <TouchableOpacity
                style={headerStyles.textContainer}
                onPress={handleNavigation}>
                <Text style={headerStyles.placeholderText}>Enter a meeting code</Text>
            </TouchableOpacity>
            <CircleUser 
                onPress={()=>{setVisible(true)}}
                name="profile"
                size={RFValue(20)}
                color={Colors.primary}
            />
        </View>

        <InquiryModal onClose={() => setVisible(false)} visible={visible}/>
    </View>
  )
}

export default HomeHeader