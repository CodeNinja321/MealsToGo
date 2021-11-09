/* eslint-disable prettier/prettier */
import React from "react";
import { StatusBar, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const statusBarHeight = StatusBar.currentHeight;

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${statusBarHeight && `margin-top: ${statusBarHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <FlatList
        data={[
          { name: 1 }, 
          { name: 2 }, 
          { name: 3 }, 
          { name: 4 }, 
          { name: 5 }, 
          { name: 6 }, 
          { name: 7 }, 
          { name: 8 }, 
          { name: 9 }, 
          { name: 10 }, 
          { name: 11 }, 
          { name: 12 }, 
          { name: 13 }, 
          { name: 14 }]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
          )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding:16 }}
      />
    </SafeArea>
  );
};
