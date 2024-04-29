import styled from "styled-components";
import img from '../../../images/pattern.jpg';

 
const StyleDoc2 = styled.section`
 background-image:url(${img});
  background-position: center;
  height:1000px;


.why-us .content {
  padding: 30px;
  background: #1977cc;
  border-radius: 4px;
  margin-top:200px;
  margin-right:30px;
  color: #fff;
}

.why-us .content h3 {
  font-weight: 700;
  font-size: 34px;
  margin-left:20px;
  margin-bottom: 30px;
  color: #fff;
}

.why-us .icon-boxes .icon-box {
  text-align: center;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  padding: 70px 4px;
  width: 100%;
  height:90%;
}

.navbtn{
  color:red;
  margin-right:20px;
}

.btn {
  background-color: #1977cc;
  color: #fff;
  margin-top:8px;
  border-radius:25px;
  height:40px;
  width:100px;
}

.btn2 {
  background-color: #1977cc;
  color: #fff;
  margin-top:5px;
  border-radius:25px;
  height:40px;
  width:100px;
}
.why-us .icon-boxes .icon-box .icon {
  font-size: 40px;
  color: #1977cc;
  margin-bottom: 30px;
  margin-left:1px;
  margin-top:-60px;
  margin-right:1px;
}

.why-us .icon-boxes .icon-box h4 {
  font-size: 20px;
  font-weight: 700;
  color: #2c4964;
}

.why-us .icon-boxes .icon-box p {
  font-size: 15px;
  color: #848484;
}
.container2{
  color:#1977cc;
  margin-top:-200px;
  margin-left:880px;
  font-size:60px;
  font-weight:700;
}
@media screen and (max-width: 768px) {
  .why-us .content {
    margin-top: 100px;
    margin-right: 0;
    margin-left: 0px;
  }

  .container2 {
    margin-left: 50%;
    transform: translateX(-50%);
    display:none;
    font-size: 30px;
  }
}

@media screen and (max-width: 576px) {
  .why-us .content h3 {
    font-size: 24px;
  }

  .btn,
  .btn2 {
    width: 80px;
  }

  .container2 {
    margin-top: -150px;
    display:none;
    font-size: 20px;
  }
}
`;

export default StyleDoc2;