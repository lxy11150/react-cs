import Slide from "../../components/Slide/slide"
import Menus from "../../components/Menus/menus"
import Substance from "../../components/Substance/substance"
import './index.scss'

const Contest = () => {
    return (
        <div className="contest">
            <div className="slide">
                <Slide></Slide>
            </div>
            <div className="display_con">
                <div className="display_menu">
                    <Menus></Menus>
                </div>
                <div className="con_content">
                    <Substance></Substance>
                </div>
            </div>
        </div>
    )
}

export default Contest