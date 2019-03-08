import styled from "styled-components/native";

export const MainContainer = styled.View`
    flex: 1;
    height: 100%;
    background: #e0e0e0;
    padding: 10px 25px;
`;

export const Divider = styled.View`
    margin: 10px 0px;
    border: 0.5px solid #ccc;
`;

export const Content = styled.View`
    background: #fff;
    padding: 15px;
    min-height: 70px;
    margin: 6px 0px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 6px;
`;

export const Avatar = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 35px;
`;

export const RepositoryContent = styled.View`
    flex: 1;
    justify-content: space-around;
    margin-left: 15;
`;

export const RepositoryContentTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;

export const RepositoryContentSub = styled.Text`
    font-size: 16px;
    color: #999;
`;

export const RepositoryIcon = styled.TouchableOpacity``;
