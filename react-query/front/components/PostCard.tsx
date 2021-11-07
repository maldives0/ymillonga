import React, { useState, useCallback, VFC } from "react";
import {
  Card,
  Button,
  Avatar,
  Popover,
  List,
  Comment,
  Modal,
  Form,
  Tooltip,
  message,
} from "antd";
import { InputReport, CardWrapper } from "./style";
import moment from "moment";
import Link from "next/link";
import { default as RetweetOutlined } from "@ant-design/icons/RetweetOutlined";
import { default as HeartTwoTone } from "@ant-design/icons/HeartTwoTone";
import { default as HeartOutlined } from "@ant-design/icons/HeartOutlined";
import { default as MessageOutlined } from "@ant-design/icons/MessageOutlined";
import { default as EllipsisOutlined } from "@ant-design/icons/EllipsisOutlined";
import CommentForm from "./CommentForm";
import PostImages from "./PostImages";
import FollowButton from "./FollowButton";
import PostCardContent from "./PostCardContent";
import {
  removePostAPI,
  likePostAPI,
  unlikePostAPI,
  retweetAPI,
  updatePostAPI,
  reportPostAPI,
} from "../apis/post";
import useInput from "../hooks/useInput";
import {
  InfiniteData,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import { loadMyInfoAPI } from "../apis/user";
import User from "../interfaces/user";
import Post from "../interfaces/post";
import { AxiosError } from "axios";

moment.locale("ko");

const PostCard: VFC<{ post: Post }> = ({ post }) => {
  const queryClient = useQueryClient();
  const { data: me } = useQuery<User>("user", loadMyInfoAPI);
  const [reportText, onChangeReportText] = useInput("");
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [reportPostLoading, setReportPostLoading] = useState(false);
  const [removePostLoading, setRemovePostLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const likeMutation = useMutation<Post, AxiosError, number>(
    ["post", post.id],
    likePostAPI,
    {
      onMutate() {
        if (!me?.id) {
          return message.info("로그인 후 좋아요를 할 수 있습니다.");
        }
        queryClient.setQueryData<InfiniteData<Post[]>>("posts", (data) => {
          const found = data?.pages.flat().find((v) => v.id === post.id);
          if (found) {
            found.Likers.push({ id: me.id });
          }
          console.log("like found", found);
          return {
            pageParams: data?.pageParams || [],
            pages: data?.pages || [],
          };
        });
      },
      onSettled() {
        queryClient.refetchQueries("posts");
      },
    }
  );
  const unlikeMutation = useMutation<Post, AxiosError, number>(
    ["post", post.id],
    unlikePostAPI,
    {
      onMutate() {
        if (!me?.id) {
          return message.info("로그인 후 좋아요를 할 수 있습니다.");
        }
        queryClient.setQueryData<InfiniteData<Post[]>>("posts", (data) => {
          const found = data?.pages.flat().find((v) => v.id === post.id);
          if (found) {
            const index = found.Likers.findIndex((v) => v.id === me.id);
            found.Likers.splice(index, 1);
          }
          console.log("unlike found", found);
          return {
            pageParams: data?.pageParams || [],
            pages: data?.pages || [],
          };
        });
      },
      onSettled() {
        queryClient.refetchQueries("posts");
      },
    }
  );

  const onLike = useCallback(() => {
    if (!me?.id) {
      return message.info("로그인 후 좋아요를 할 수 있습니다.");
    }

    likeMutation.mutate(post.id);
  }, [me?.id, post?.id]);

  const onUnlike = useCallback(() => {
    if (!me?.id) {
      return alert("로그인이 필요합니다");
    }

    unlikeMutation.mutate(post.id);
  }, [me?.id, post?.id]);

  const onRemovePost = useCallback(() => {
    if (!me?.id) {
      return alert("로그인이 필요합니다");
    }
    setRemovePostLoading(true);
    removePostAPI(post.id).finally(() => setRemovePostLoading(false));
  }, [me?.id, post?.id]);

  const onRetweet = useCallback(() => {
    if (!me?.id) {
      return message.info("로그인 후 리트윗할 수 있습니다.");
    }

    retweetAPI(post.id).catch((error) => {
      message.error(error.response.data);
    });
  }, [me?.id, post?.id]);

  const onToggleComment = useCallback(() => {
    if (me?.id) {
      setCommentFormOpened((prev) => !prev);
    } else {
      return message.info("로그인 후 댓글을 입력할 수 있습니다.");
    }
  }, [me?.id]);

  const onClickUpdate = useCallback(() => {
    setEditMode(true);
  }, []);

  const onCancelUpdate = useCallback(() => {
    setEditMode(false);
  }, []);

  const onChangePost = useCallback(
    (editText) => () => {
      if (!me?.id) {
        return alert("로그인이 필요합니다.");
      }

      updatePostAPI({ postId: post.id, content: editText });
    },
    [post]
  );

  const onReport = useCallback(() => {
    if (!me?.id) {
      return message.info("로그인 후 신고할 수 있습니다.");
    }
    setModalVisible(true);
  }, []);

  const onsubmitReport = useCallback(() => {
    if (!me?.id) {
      return alert("로그인이 필요합니다.");
    }
    setReportPostLoading(true);
    reportPostAPI({ postId: post.id, content: reportText }).finally(
      () => (setReportPostLoading(false), setModalVisible(false))
    );
  }, [reportText]);

  const reportCancel = useCallback(() => {
    setModalVisible(false);
  }, []);

  const liked = post.Likers?.find((v) => v.id === me?.id);

  return (
    <CardWrapper key={post.id}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <Tooltip title="리트윗하기">
            <RetweetOutlined onClick={onRetweet} key="retweet" />
          </Tooltip>,
          <Tooltip title="좋아요">
            {liked ? (
              <HeartTwoTone
                key="heart"
                twoToneColor="#eb2f96"
                onClick={onUnlike}
              />
            ) : (
              <HeartOutlined key="heart" onClick={onLike} />
            )}
          </Tooltip>,
          <Tooltip title="댓글달기">
            <MessageOutlined key="message" onClick={onToggleComment} />
          </Tooltip>,
          <Popover
            key="ellipsis"
            content={
              <Button.Group>
                {me?.id && post.User?.id === me?.id ? (
                  <>
                    {!post.RetweetId && (
                      <Button onClick={onClickUpdate}>수정</Button>
                    )}
                    <Button
                      danger
                      onClick={onRemovePost}
                      loading={removePostLoading}
                    >
                      삭제
                    </Button>
                  </>
                ) : (
                  <Button onClick={onReport}>신고하기</Button>
                )}
              </Button.Group>
            }
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
        extra={me?.id && <FollowButton post={post} />}
        title={
          post.RetweetId
            ? `${post.User?.nickname || "탈퇴한 사용자"}님이 리트윗하셨습니다.`
            : null
        }
      >
        <Modal
          title="report"
          visible={modalVisible}
          onOk={onsubmitReport}
          confirmLoading={reportPostLoading}
          onCancel={reportCancel}
        >
          <Form>
            <InputReport
              rows={4}
              value={reportText}
              onChange={onChangeReportText}
            />
          </Form>
          <p>신고하실 경우 되돌릴 수 없습니다. 계속 진행하시겠습니까?</p>
        </Modal>
        {post.RetweetId && post.Retweet ? (
          <Card
            cover={
              post.Retweet.Images[0] && (
                <PostImages images={post.Retweet.Images} />
              )
            }
          >
            <div style={{ float: "right" }}>
              {moment(post.Retweet.createdAt).startOf("hour").fromNow()}
            </div>
            <Card.Meta
              avatar={
                <Link prefetch={false} href={`/user/${post.Retweet.User.id}`}>
                  <a>
                    <Avatar>{post.Retweet.User.nickname[0]} </Avatar>
                  </a>
                </Link>
              }
              title={post.Retweet.User.nickname}
              description={
                <PostCardContent
                  onCancelUpdate={onCancelUpdate}
                  onChangePost={onChangePost}
                  editMode={editMode}
                  postData={post.Retweet.content}
                />
              }
            />
          </Card>
        ) : (
          <>
            <div style={{ float: "right" }}>
              {moment(post.createdAt).startOf("hour").fromNow()}
            </div>
            <Card.Meta
              avatar={
                <Link href={`/user/${post.User.id}`} prefetch={false}>
                  <a>
                    <Avatar>{post.User.nickname?.[0]} </Avatar>
                  </a>
                </Link>
              }
              title={post.User?.nickname || "탈퇴한 사용자"}
              description={
                <PostCardContent
                  editMode={editMode}
                  onCancelUpdate={onCancelUpdate}
                  onChangePost={onChangePost}
                  postData={post.content}
                />
              }
            />
          </>
        )}
      </Card>
      {me?.id && commentFormOpened && (
        <>
          <CommentForm post={post} />
          <List
            header={`댓글: ${post.Comments ? post.Comments.length : 0}개`}
            itemLayout="horizontal"
            dataSource={post.Comments || []}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={
                    <Link href={`/user/${item.User.id}`} prefetch={false}>
                      <a>
                        <Avatar>{item.User.nickname[0]}</Avatar>
                      </a>
                    </Link>
                  }
                  content={item.content}
                />
              </li>
            )}
          />
        </>
      )}
    </CardWrapper>
  );
};

export default PostCard;
