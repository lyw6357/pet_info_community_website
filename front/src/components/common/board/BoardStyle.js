import Button from "@material-ui/core/Button";
import { Grid } from "@mui/material";
import styled from "styled-components";

const PostMenu = styled(Grid)`
    margin: 10px 0;
    text-align: center;
`;

const SelectMenu = styled(Button)`
    padding: 0px 10px;
    margin: 10px;
    color: #386150;
    font-weight: bold;
    &:hover {
        color: black;
    }
`;

const UnSelectMenu = styled(Button)`
    padding: 0px 10px;
    margin: 10px;
    color: #818479;
    font-weight: bold;

    &:hover {
        color: black;
    }
`;
const TagButton = styled(Button)`
    color: #818479;
    font-size: 0.5rem;
    border-radius: 100px;
    background-color: #ffffff;
    margin: 10px 5px 0 0;
    padding: 3px 5px;
    border: solid 1px;
    &:hover {
        background-color: #ffffff;
    }
`;

const PostList = styled(Grid)`
    background-color: #f6f5ef;
    border-radius: 20px;
    height: 100px;
    margin: 25px 0;
    justify-content: space-around;
    width: 100%;
    overflow: hidden;
    padding: 0 15px;
`;
const PostUserImg = styled(Grid)`
    background-color: #d9d9d9;
    border-radius: 100%;
    width: 60px;
    height: 60px;
    margin: 20px 0;
`;

const PostUserInfo = styled(Grid)`
    width: 25%;
    max-width: 140px;
    height: 70px;
    margin: 20px 0;
    padding: 8px 3px;
`;

const PostInfo = styled(Grid)`
    width: 53%;
    max-width: 600px;
    height: 70px;
    margin: 20px;
`;

const PostSubInfo = styled(Grid)`
    width: 15%;
    max-width: 200px;
    height: 70px;
    margin: 35px 0;
    display: flex;
`;

const ListName = styled(Grid)`
    font-size: 16px;
`;

const ListDate = styled(Grid)`
    font-size: 12px;
`;

const ListTitle = styled(Grid)`
    font-weight: bold;
    font-size: 16px;
`;

const WritePost = styled(Button)`
    background-color: #ffffff;
    color: black;
    border: solid 3px white;
    border-radius: 10px;
    padding: 0px 25px;
    margin: 5px;

    &:hover {
        background-color: white;
        font-weight: bold;
    }
`;

const Count = styled(Grid)`
    font-size: 15px;
    font-color: gray;
    margin: 0 30px 0 15px;
`;
export {
    PostList,
    PostUserImg,
    PostUserInfo,
    PostInfo,
    PostSubInfo,
    ListName,
    ListDate,
    ListTitle,
    WritePost,
    PostMenu,
    SelectMenu,
    UnSelectMenu,
    TagButton,
    Count,
};
