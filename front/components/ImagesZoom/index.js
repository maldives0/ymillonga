import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slick from 'react-Slick';
import { Overlay, ImageGlobal, Header, CloseButton, SlickWrapper, ImageWrapper, Indicator } from './imageStyle';
import { backUrl } from '../../config/config';

const ImagesZoom = ({ images, onClose }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    return (
        <Overlay>
            <ImageGlobal />
            <Header>
                <h1>이미지 목록 보기</h1>
                <CloseButton onClick={onClose} />
            </Header>
            <SlickWrapper>
                <div>
                    <Slick
                        initialSlide={0}
                        beforeChange={(slide) => setCurrentSlide(slide)}
                        infinite
                        arrows={false}
                        slidesToShow={1}
                        slidesToScroll={1}
                    >
                        {images.map((v) => (
                            <ImageWrapper key={v.src}>
                                <img
                                    src={`${backUrl}/${v.src}`}
                                    alt={v.src} />
                            </ImageWrapper>
                        ))}
                    </Slick>
                    <Indicator>
                        <div>
                            {currentSlide + 1}
                            {' '}/
                            {images.length}
                        </div>
                    </Indicator>
                </div>
            </SlickWrapper>
        </Overlay>
    );
};
ImagesZoom.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClose: PropTypes.func.isRequired,
};
export default ImagesZoom;