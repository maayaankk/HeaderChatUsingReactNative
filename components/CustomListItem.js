import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { db, auth } from '../firebase';

const CustomListElement = ({ id, chatName, enterChat }) => {

    const [chatMessages, setChatMessages] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection('chats').doc(id).collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setChatMessages(snapshot.docs.map(doc => doc.data()))
        ))

        return unsubscribe
    }, [])
    return (
        <ListItem key={id} onPress={() => enterChat(id, chatName)} key={id} bottomDivider >
            <Avatar
                rounded
                source={{
                    uri:
                        "https://avatars.githubusercontent.com/u/67364983?v=4",
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "600" }}>{chatName}</ListItem.Title>
                <ListItem.Subtitle numberOfLines={1}
                    ellipsizeMode="tail">
                    {chatMessages?.[0]?.displayName} : {chatMessages?.[0]?.message}
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListElement

const styles = StyleSheet.create({})
