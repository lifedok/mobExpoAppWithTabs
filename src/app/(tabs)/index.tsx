import { ScrollView, StyleSheet } from 'react-native';
import { getPokemonList } from "../../services/user-service/user.service";
import PokemonList from "../../components/modules/pokemon-list/pokemon-list";
import { useEffect, useState } from "react";

export default function TabOneScreen() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await getPokemonList();
      // set state when the data received
      setPosts(data);
    };

    dataFetch();
  }, []);

  return (
    <ScrollView>
      {/*<View style={styles.container}></View>*/}
      <PokemonList list={posts}/>
      {/*<Text style={styles.title}>Start Page ==> Tab One</Text>*/}
      {/*<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />*/}
      {/*<EditScreenInfo path="app/(tabs)/index.tsx" />*/}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // overflowX: 'auto',
    // overflow: 'visible'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
