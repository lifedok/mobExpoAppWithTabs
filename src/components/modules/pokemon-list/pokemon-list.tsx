'use client'
import { Text, View } from "../../Themed";

interface IPokemonList {
  list: any;
}
export default function PokemonList({list}: IPokemonList) {

  console.log('pokemonList', list);

  return (
    <View>
      {
        list.map((item, index) => (
          <Text key={`${item.name}_${index}`}>{item.name}</Text>
        ))
      }
    </View>
  );
}
