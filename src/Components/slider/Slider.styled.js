import styled from "styled-components";

import SliderBg from "../../images/sliderBg.jpg"


const Wrapper = styled.div`
background: url(${SliderBg});

padding:0px 0px 50px 0px;
margin:40px 0px;
background-size:cover;
background-repeat:no-repeat;
background-attachment:fixed;
.card{
    img{
        width:100%;
    }

}
.swiper-slide{
    margin-top:50px;
}

`

export default Wrapper;