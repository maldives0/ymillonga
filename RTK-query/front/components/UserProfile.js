import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Avatar, Card, Divider, Tooltip, message, Modal } from "antd";
import { default as SettingOutlined } from "@ant-design/icons/SettingOutlined";
import { default as ClearOutlined } from "@ant-design/icons/ClearOutlined";
import NicknameEditForm from "./NicknameEditForm";
import { useSelector, useDispatch } from "react-redux";
import { LEAVE_REQUEST, LOG_OUT_REQUEST } from "../reducers/user";
import { CardWrapper } from "./style";
import { useGetLoadMyInfoQuery } from "../services/user";

const UserProfile = () => {
  const dispatch = useDispatch();
  const {
    data: me,
    isError: isLoadMyInfoError,
    isLoading: isLoadMyInfoLoading,
  } = useGetLoadMyInfoQuery(null);
  // const leaveLoading = useSelector((state) => state.post.leaveLoading);

  const [modalVisible, setModalVisible] = useState(false);
  // const changeNicknameDone = useSelector(
  //   (state) => state.user.changeNicknameDone
  // );
  const [editNickname, setEditNickname] = useState(false);

  const onClickEditNickname = useCallback(() => {
    setEditNickname((prev) => !prev);
  }, []);

  const onLeave = useCallback(() => {
    setModalVisible(true);
  }, []);
  const onsubmitLeave = useCallback(() => {
    if (!(me && me.id)) {
      return message.info("로그인이 필요합니다.");
    }
    dispatch({
      type: LEAVE_REQUEST,
    });
    dispatch({
      type: LOG_OUT_REQUEST,
    });
    setModalVisible(false);
  }, [me]);
  const leaveCancel = useCallback(() => {
    setModalVisible(false);
  }, []);

  const onCancel = useCallback(() => {
    setEditNickname((prev) => !prev);
  }, []);
  // useEffect(() => {
  //   if (changeNicknameDone) {
  //     setEditNickname(false);
  //     message.success("닉네임이 변경되었습니다.");
  //   }
  // }, [changeNicknameDone]);

  return (
    <CardWrapper>
      <Card
        key={`${me.id}_profile`}
        style={{ width: "300", marginTop: 16 }}
        type="inner"
        extra={[
          <Tooltip title="닉네임 바꾸기">
            <SettingOutlined
              key="edit-nickname"
              onClick={onClickEditNickname}
            />
          </Tooltip>,
          <Divider type="vertical" />,
          <Tooltip title="탈퇴하기">
            <ClearOutlined
              key="leave"
              onClick={onLeave}
              // loading={leaveLoading}
            />
          </Tooltip>,
        ]}
        actions={[
          <div key={`${me.id}_twit`}>
            <Link prefetch={false} href={`/user/${me.id}`}>
              <a>
                게시글
                <br />
                {me.Posts.length}
              </a>
            </Link>
          </div>,
          <div key={`${me.id}_following`}>
            <Link prefetch={false} href={`/posts/related`}>
              <a>
                팔로잉
                <br />
                {me.Followings.length}
              </a>
            </Link>
          </div>,
          <div key={`${me.id}_follower`}>
            <Link href="/profile">
              <a>
                팔로어
                <br />
                {me.Followers.length}
              </a>
            </Link>
          </div>,
          <div key={`${me.id}_ignoring`}>
            <Link href="/profile">
              <a>
                차단자
                <br />
                {me.Ignorings.length}
              </a>
            </Link>
          </div>,
        ]}
      >
        <Modal
          title="report"
          visible={modalVisible}
          onOk={onsubmitLeave}
          // confirmLoading={leaveLoading}
          onCancel={leaveCancel}
        >
          <p>탈퇴하실 경우 되돌릴 수 없습니다. 계속 진행하시겠습니까?</p>
        </Modal>
        <Card.Meta
          key={`${me.id}_modal`}
          avatar={
            <Link prefetch={false} href={`/user/${me.id}`}>
              <a>
                <Avatar>{me.nickname[0]}</Avatar>
              </a>
            </Link>
          }
          title={me.nickname}
          style={{ marginBottom: "10px" }}
        />
        {editNickname && <NicknameEditForm onCancel={onCancel} />}
      </Card>
    </CardWrapper>
  );
};
export default UserProfile;
