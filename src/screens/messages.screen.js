import { Layout, Input, Text, Card, Spinner } from "@ui-kitten/components";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/auth";
import Toast from 'react-native-toast-message';
import { FlashList } from "@shopify/flash-list";
import { useFrappe } from "../provider/backend";
import 'react-native-get-random-values'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const TodoItem = ({ item }) => {
  return (
    <Card key={item.name} style={{ width: "100%", marginBottom: 10 }}>
      <Text>{item.description}</Text>
    </Card>
  );
};

export const MessagesScreen = () => {
  const { accessToken, refreshAccessTokenAsync } = useContext(AuthContext);
  const [todos, setTodos] = useState([]);
  const [loadingTodos, setLoadingTodos] = useState(false);
  const [todo, setTodo] = useState("");
  const { db } = useFrappe()

  useEffect(() => {
    fetchTodos();
  }, [accessToken]);

  function fetchTodos() {
    setLoadingTodos(true);
    db.getDocList("ToDo", { fields: "*", orderBy: { field: "creation", order: "desc" } })
      .then((res) => {
        setTodos(res);
      })
      .catch(async (e) => {
        if (e.httpStatus === 403 || e.httpStatus === 401) {
          await refreshAccessTokenAsync();
        } else {
          console.error(e);
          Toast.show({
            type: "error",
            position: 'top',
            text1: 'Error',
            text2: e.message
          });
        }
      })
      .finally(() => {
        setLoadingTodos(false);
      });
  }

  return (

    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyBnXwXMsLIcDuPvP2x2X3fYDlkWqjKwNq4',
        language: 'en',
      }}
    />


  );
};
