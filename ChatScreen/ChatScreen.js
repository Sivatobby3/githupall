import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.chatContainer}>
        <View style={styles.messageContainer}>
          <View style={[styles.messageBubble, { backgroundColor: '#e6e6e6' }]}>
            <Text style={styles.messageText}>Hey there! How are you?</Text>
          </View>
        </View>
        <View style={styles.messageContainer}>
          <View style={[styles.messageBubble, { backgroundColor: '#e6e6e6' }]}>
            <Text style={styles.messageText}>I'm doing well, thanks for asking.</Text>
          </View>
        </View>
        <View style={styles.messageContainer}>
          <View style={[styles.messageBubble, { backgroundColor: '#2979FF' }]}>
            <Text style={[styles.messageText, { color: '#ffffff' }]}>What are you up to today?</Text>
          </View>
        </View>
        <View style={styles.messageContainer}>
          <View style={[styles.messageBubble, { backgroundColor: '#e6e6e6' }]}>
            <Text style={styles.messageText}>Not much, just hanging out at home.</Text>
          </View>
        </View>
        <View style={styles.messageContainer}>
          <View style={[styles.messageBubble, { backgroundColor: '#e6e6e6' }]}>
            <Text style={styles.messageText}>How about you?</Text>
          </View>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Type a message..." />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  messageContainer: {
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  messageBubble: {
    borderRadius: 10,
    padding: 10,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e6e6e6',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#2979FF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChatScreen;
