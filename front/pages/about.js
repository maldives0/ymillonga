import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { Typography } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;
const About = () => {

    return (
        <AppLayout>
            <Head>
                <title>About | ymillonga</title>
            </Head>
            <Typography style={{ lineHeight: 2 }}>
                <div style={{ float: 'right' }}>
                    <img
                        width={250}
                        height={250}
                        src="/images/dancer2.png"
                    /></div>
                <Title>소개글(Introduction)</Title>

                <Paragraph>
                    탱고 들어보셨나요? 영화나 드라마 배경음악으로 한 번쯤 들어봤을 그 정열의 <Link href="https://ko.wikipedia.org/wiki/%ED%83%B1%EA%B3%A0_%EC%9D%8C%EC%95%85">탱고 음악</Link>에 맞추어 추는 춤을 일컬어 또한 <Link href="https://namu.wiki/w/%ED%83%B1%EA%B3%A0">탱고</Link>탱고라고 부른답니다. 탱고는 전세계에 가장 널리 퍼져있는 소셜댄스입니다.
                    파트너와 함께 호흡을 맞춰 춤이라 탱고는 <Text strong>‘네 개의 다리, 하나의 심장이 추는 춤’</Text>이라고 불리기도 해요. 아르헨티나가 고향인 이 춤은 매력적인 탱고음악에 맞추어 춤추는 상대와 교감하는 경이로운 경험을 선사하기에 전세계적으로 사랑받고 있답니다.<br />
                    <Link href="https://ko.wikipedia.org/wiki/%EB%B0%80%EB%A1%B1%EA%B0%80">밀롱가(Milonga)</Link>는 이런 탱고를 즐기기 위해 사람들이 모이는 장소 및 시간을 의미합니다. Y Millonga는 여러분이 밀롱가에서 경험했던 잊지 못할 추억을 탱고인들과 함께 나눌 수 있는 소셜 네트워크 서비스(SNS)입니다.

    </Paragraph>
                <Title style={{ textAlign: 'center' }} level={2}>Y Millonga는 탱고를 사랑하는 사람들을 위한 SNS입니다.</Title>
                <div style={{ textAlign: 'center', marginBottom: 15 }}>
                    <img
                        width={400}
                        height={70}
                        src="/images/dancers.png"
                    /></div>
                <Paragraph>
                    <Text>탱고는 춤추는 상대가 누구인지, 어떤 탱고음악에 맞춰 스탭을 밟고 있는지, 주변에 어떤 사람들이 함께 춤을 추고 있는지에 따라 색다른 경험을 선사하는 춤입니다. 무엇보다 춤을 추고 있는 내가 어떤 상상을 하며 춤을 추고 있는지가 가장 큰 영향을 미치지요. 아래의 말처럼 말이죠.</Text>
                    <br />
                    <blockquote>
                        탱고는 <Text mark>상상력의 산물</Text>이라 봐요.
                            자신이 움직이는 모습을 거울없이도 상상할 수 있고,
                            상대방의 마음 속을 상상해 볼 수 있고,
                            춤추는 상대방과의 분위기를 상상해볼 수 있고,
                            이것이 왜 즐거운지 상상해 낼 수 있다면,
                            탱고는 당신의 인생에 무엇보다 값진 선물이 될거에요.
                    </blockquote>
                    <Text style={{ float: 'right', fontSize: 10 }} type="secondary"><Link href="https://cafe.naver.com/useserver">출처 보러가기</Link></Text>
                </Paragraph>
                <Title level={3} style={{ margin: '6% 0', lineHeight: 2 }}>Y Millonga는 여러분 개개인이 밀롱가에서 경험한 누구하고도 비교할 수 없기에 소중하고 유일한 경험을 함께 나누고 싶은 바램에서 시작되었습니다.</Title>
            </Typography>
        </AppLayout>

    );
};

export default About;
