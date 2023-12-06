import styled from "styled-components";
import StringtoSvg from "./StringtoSvg";

export const PostMainDiv = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.white};
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.1), 0px 2px 5px rgba(0, 0, 0, 0.2);

  margin-top: 10px;
  margin-bottom: 20px;
`;

///PostHeader

export const PostHeaderComponent = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  height: 80px;
`;
export const PostHeaderFirstBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-bottom: 3px;
  padding-top: 3px;
  justify-content: space-between;
`;
export const PostTimeStampContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const PostTimeStampIcon = styled.div<{ $icon: string }>`
  background-image: url(${(props) => props.$icon});
  background-repeat: no-repeat;
  background-position: center;
  margin-left: 10px;
  height: 16px;
  width: 16px;
`;
export const PostTimeStamp = styled.label`
  color: ${(props) => props.theme.darkgray};
  font-family: sans-serif;

  font-size: 14px;
`;
export const PostHeaderLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PostHeaderRightContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PostHeaderText = styled.div`
  font-weight: 200;
  font-style: normal;

  font-family: Arial, Helvetica, sans-serif;
`;
export const PostHeaderControls = styled.div``;
export const SeeMore = styled.button`
  border: 0;
  background-color: #ffffff;
  font-size: 24px;
  font-weight: 500;
  color: gray;
`;

export const PostExit = styled(SeeMore)``;
export const PostPoster = styled.label`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
`;
export const FirstLine = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

////PostHeaderEnd

////PostContent

export const PostContent = styled.div`
  background-position: center;
`;
export const PostImage = styled.img`
  width: 100%;
  height: auto;
`;
////PostContentEnd

////PostFooterStarts

export const PostFooterContainer = styled.div`
  height: 80px;
  padding: 10px;
`;
export const PostFooterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const ReactionContainer = styled.div`
  display: flex;
  justify-items: start;
  margin-left: 2px;
  margin-right: 10px;
`;
export const PostFooterReactions = styled.div`
  font-size: 20px;
  pointer-events: none;
`;

export const PostFooterMediaControls = styled.div`
  height: 30px;
`;

export const PostFooterLine = styled.hr`
  margin-left: 20px;
  margin-right: 20px;
`;
export const PostFooterCommentCount = styled.div``;
export const ReactionWindow = styled.dialog`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 500px;
  background-color: rgba(255, 255, 255);
  margin-top: 100px;
  border: none;
  border-radius: 10px;
`;
export const ReactionWindowHeader = styled.div`
  flex-direction: row;
  display: flex;
  height: 70px;
  justify-content: flex-start;
  align-items: center;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const ReactionLineContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 5px;
  align-items: center;
`;
export const Reaction = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 60px;
`;
export const Reactor = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  width: 50%;
`;
export const ReactionHeaderCountContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;
export const AddFriend = styled.button`
  width: 100px;
  height: 30px;
  background-color: #80808063;
  border-radius: 10%;
  margin: 5px;
  border: none;
  padding: 2px;
`;
export const SvgIcon = styled.div<{ $icon: string; $size: string }>`
  background-image: url(${(props) => props.$icon});

  height: ${(props) => (props.$size === "small" ? "20px" : "30px")};
  width: ${(props) => (props.$size === "small" ? "20px" : "30px")};

  margin-left: 2px;
  margin-right: 2px;

  background-repeat: no-repeat;
`;
export const Text = styled.div<{ $fontsize: string }>`
  margin-left: 5px;
  font-size: ${(props) => props.$fontsize};
  color: gray;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
export const StringtoSvgOverlay = styled.div<{ $icon: string }>`
  background-image: url(${(props) => props.$icon});

  position: absolute;
  bottom: 0;
  right: 0;
  background-color: blue;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
export const AvatarwithReactionContainer = styled.div`
  position: relative;
  display: inline-block;
`;
export const ReactionWindowSeperator = styled.hr`
  width: 100%;
  margin-bottom: 10px;
`;
