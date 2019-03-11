import styled from "styled-components/native";

export const MainContainer = styled.View`
    flex: 1;
    height: 100%;
    background: #e0e0e0;
`;

export const SearchContainer = styled.View`
    flex: 1;
    flex-direction: row;
    margin-bottom: 30px;
`;

export const Divider = styled.View`
    margin: 25px 0px 10px;
    border: 0.5px solid #ccc;
`;

export const Content = styled.TouchableOpacity`
    background: #fff;
    padding: 20px 15px;
    min-height: 70px;
    margin: 6px 0px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

export const Avatar = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`;

export const RepositoryContent = styled.View`
    flex: 1;
    justify-content: space-around;
    margin-left: 15;
`;

export const RepositoryContentTitle = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;

export const RepositoryContentSub = styled.Text`
    font-size: 14px;
    color: #999;
`;

export const RepositoryIcon = styled.TouchableOpacity`
    width: 39; 
    height:39; 
    justify-content: center;
    align-items: center;
`;
