import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { Layout, Text, Button } from "@ui-kitten/components";
import { AuthContext } from "../provider/auth";
import * as ImagePicker from "expo-image-picker";
import { Image } from "expo-image";
import uploadFile from "../utils/fileUploader";
import { useFrappe } from "../provider/backend";
import { CircularProgressBar } from "@ui-kitten/components";

const LogoutButton = styled(Button)`
  border-radius: 6px;
`;

const ProfileImage = styled(Image)`
  width: 120px;
  height: 120px;
  border-radius: 9999px;
`;

export const ProfileScreen = () => {
  const { isAuthenticated, logout, userInfo, accessToken, fetchUserInfo } =
    useContext(AuthContext);
  const { db } = useFrappe();
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <LogoutButton
          onPress={() => {
            logout();
          }}
        >
          Logout
        </LogoutButton>
      </Layout>
    </SafeAreaView>
  );
};