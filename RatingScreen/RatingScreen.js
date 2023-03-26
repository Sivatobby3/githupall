import { Box } from 'native-base';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
// You can use any other icon library that you prefer

const RatingScreen = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  const renderStar = (index) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => handleRating(index)}
        style={{ marginRight: 10 }}
      >
        <Icon
          name={index <= rating ? 'star' : 'star-border'}
          size={50}
          color={index <= rating ? 'gold' : 'gray'}
        />
      </TouchableOpacity>
    );
  };

  return (
   <Box py={10}>
     <View style={{ flexDirection: 'row', justifyContent:'center', alignItems:'center' }} >
      {[1, 2, 3, 4, 5].map((value) => renderStar(value))}
      <Text>{rating} out of 5</Text>
    </View>
   </Box>
  );
};

export default RatingScreen;
