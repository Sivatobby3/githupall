import React from 'react'
import { Select, VStack, CheckIcon, Center, NativeBaseProvider, Box, Text } from "native-base";

const SelectPage = () => {
  let [service, setService] = React.useState("");

  return (
    <>
<VStack alignItems="center" space={4}>
      <Select shadow={2} selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
      bg: "teal.600",
      endIcon: <CheckIcon size="5" />
    }} _light={{
      bg: "coolGray.100",
      _hover: {
        bg: "coolGray.200"
      },
      _focus: {
        bg: "coolGray.200:alpha.70"
      }
    }} _dark={{
      bg: "coolGray.800",
      _hover: {
        bg: "coolGray.900"
      },
      _focus: {
        bg: "coolGray.900:alpha.70"
      }
    }} onValueChange={itemValue => setService(itemValue)}>
        <Select.Item shadow={2} label="UX Research" value="ux" />
        <Select.Item shadow={2} label="Web Development" value="web" />
        <Select.Item shadow={2} label="Cross Platform Development" value="cross" />
        <Select.Item shadow={2} label="UI Designing" value="ui" />
        <Select.Item shadow={2} label="Backend Development" value="backend" />
      </Select>
    </VStack>  
</>
    )
}

export default SelectPage