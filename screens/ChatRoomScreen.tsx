import React from 'react';
import { Text, FlatList } from "react-native";
import { useRoute } from '@react-navigation/native'
import chatRoomData from '../data/Chat';
import ChatMessage from '../components/ChatMessage';

const ChatRoomScreeen = () => {

    const route = useRoute();

    return (
        <FlatList
            data={chatRoomData.messages}
            renderItem={({ item }) => <ChatMessage message={item} />}
        />
    );
}

export default ChatRoomScreeen;