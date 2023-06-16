import { Carousel } from 'antd';
import React from 'react'
import banner1 from '../../../assets/lg.webp'
import banner2 from '../../../assets/banner.png'
import banner3 from '../../../assets/banner4.png'
import { RightOutlined } from '@ant-design/icons';
import { LeftOutlined } from '@ant-design/icons';

export default class Carousels extends React.Component {
    prev = () => {
        this.card.next();
    }
    next = () => {
        this.card.prev();
    }
    setCard = c => {
        // 走马灯dom名card
        this.card = c;
    }
    render() {
        return (
            <div className='carousel'>
                <Carousel autoplay ref={this.setCard}>
                    <div>
                        <a href="">
                            <img src={banner1} alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <img src={banner2} alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <img src={banner3} alt="" />
                        </a>
                    </div>
                </Carousel>
                <ul ref={(c) => { this.show = c }}>
                    <li className='prev' onClick={this.prev}><LeftOutlined /></li>
                    <li className='next' onClick={this.next}><RightOutlined /></li>
                </ul>
            </div>
        )
    }
}