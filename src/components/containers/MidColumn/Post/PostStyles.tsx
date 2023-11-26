import styled from "styled-components";

export const PostMainDiv = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.white};
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.1), 0px 2px 5px rgba(0, 0, 0, 0.2);

  margin-top: 10px;
  margin-bottom: 20px;
  border: 1px dotted red;
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
  margin-right: 2px;
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
export const ReactionWindow = styled.dialog`
  display: flex;
  height: 300px;
  width: 300px;
  background-color: rgba(255, 255, 255, 0.8);
`;

export const PostFooterCommentCount = styled.div``;
