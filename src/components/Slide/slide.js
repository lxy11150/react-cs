import { Carousel } from 'antd';
import declare from '../../assets/declare.png'
import sfx from '../../assets/sfx.png'
import algebra from '../../assets/algebra.png'


const Slide = () => (
    <Carousel autoplay effect="fade">
        <div>
            <a href="#">
                <img src={declare} alt="" style={{ width: 1200 }} />
            </a>
        </div>
        <div>
            <a href="#">
                <img src={sfx} alt="" style={{ width: 1200 }} />
            </a>
        </div>
        <div>
            <a href="#">
                <img src={algebra} alt="" style={{ width: 1200 }} />
            </a>
        </div>
    </Carousel>
);
export default Slide;