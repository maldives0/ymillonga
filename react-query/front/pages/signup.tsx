import React, { useCallback, useState, useEffect } from "react";
import Head from "next/head";
import { Form, Checkbox, Button, Input, message } from "antd";
import { useQuery } from "react-query";
import AppLayout from "../components/AppLayout";
import useInput from "../hooks/useInput";
import User from "../interfaces/user";
import Router from "next/router";
import { END } from "redux-saga";
import axios from "axios";
import { loadMyInfoAPI, signupAPI } from "../apis/user";
import wrapper from "../store/configureStore";

const Signup = () => {
  const { data: me } = useQuery<User>("user", loadMyInfoAPI);

  const [loading, setLoading] = useState(false);
  const [email, onChangeEmail] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);

  useEffect(() => {
    if (me && me.id) {
      alert("로그인 중입니다. 메인페이지로 이동합니다.");
      Router.replace("/"); //push는 뒤로가기 하면 히스토리가 남아있지만 replace는 지워짐
    }
  }, [me && me.id]);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  const onChangeTerm = useCallback(
    (e) => {
      setTerm(e.target.checked);
      setTermError(false);
    },
    [password]
  );

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      setPasswordError(true);
      return alert("비밀번호를 확인해주세요.");
    }
    if (!term) {
      setTermError(true);
      return alert("약관에 동의해주세요.");
    }
    setLoading(true);
    signupAPI({ email, password, nickname })
      .then(() => {
        Router.replace("/");
      })
      .catch((error) => {
        message.error(error.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [email, password, passwordCheck, term]);
  const validateMessages = {
    required: "${label}을 적어주세요!",
    types: {
      email: "${label} 이메일 형식에 맞지 않습니다!",
    },
  };
  return (
    <AppLayout>
      <Head>
        <title>회원가입 | Ymillonga</title>
      </Head>
      <>
        <Form
          name="nest-messages"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          onFinish={onSubmit}
          validateMessages={validateMessages}
        >
          <Form.Item
            label="이메일"
            rules={[{ type: "email" }, { required: true }]}
          >
            <Input
              name="user-name"
              type="email"
              value={email}
              required
              onChange={onChangeEmail}
            />
          </Form.Item>
          <Form.Item label="닉네임" rules={[{ required: true }]}>
            <Input
              name="user-nickname"
              value={nickname}
              required
              onChange={onChangeNickname}
            />
          </Form.Item>
          <Form.Item label="비밀번호" rules={[{ required: true }]}>
            <Input
              name="user-password"
              type="Password"
              value={password}
              required
              onChange={onChangePassword}
            />
          </Form.Item>
          <Form.Item label="비밀번호 확인" rules={[{ required: true }]}>
            <Input
              name="user-password-check"
              type="password"
              value={passwordCheck}
              required
              onChange={onChangePasswordCheck}
            />
            {passwordError && (
              <div style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</div>
            )}
          </Form.Item>
          <Form.Item rules={[{ required: true }]}>
            <Checkbox name="user-term" checked={term} onChange={onChangeTerm} />{" "}
            개인정보 수집 및 이용에 동의합니다.
            {termError && (
              <div style={{ color: "red" }}>약관에 동의해주세요.</div>
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              가입하기
            </Button>
          </Form.Item>
        </Form>
      </>
    </AppLayout>
  );
};
export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    const response = await loadMyInfoAPI();
    if (response.data) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    return {
      props: {},
    };
  }
);
export default Signup;
