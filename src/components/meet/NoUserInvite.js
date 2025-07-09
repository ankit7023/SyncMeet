import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { inviteStyles } from '../../styles/inviteStyles'
import { addHyphens } from '../../utils/Helpers'
import { useLiveMeetStore } from '../../service/meetStore'
import { Clipboard, Share } from 'lucide-react-native'

const NoUserInvite = () => {
    const {sessionId} = useLiveMeetStore();

  return (
    <View style={inviteStyles.container}>
      <Text style={inviteStyles.headerText}>You're the only one here</Text>
      <Text style={inviteStyles.subText}>Share this code with others that you want in this meeting.</Text>

      <View style={inviteStyles.linkContainer}>
        <Text style={inviteStyles.linkText}>Meeting ID: {addHyphens(sessionId)}</Text>
        <TouchableOpacity style={inviteStyles.iconButton}>
            <Clipboard color="#fff" size={20} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={inviteStyles.shareButton}>
        <Share color="black" size={20} />
        <Text style={inviteStyles.shareText}>Share Invite</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NoUserInvite