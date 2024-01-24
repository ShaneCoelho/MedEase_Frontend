import React from 'react';
import styled from 'styled-components';

const ChangeProfilePhoto = () => {
  var loadFile = function (event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
  };

  return (
    <ProfilePic>
      <label className="-label" htmlFor="file">
        <span className="glyphicon glyphicon-camera"></span>
        <span>Change Image</span>
      </label>
      <input id="file" type="file" onChange={loadFile} />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/510px-Default_pfp.svg.png"
        id="output"
        width="200"
        alt=""
      />
    </ProfilePic>
  );
};

const ProfilePic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: transparent;
  transition: all 0.3s ease;
  position: relative;
  input {
    display: none;
  }
  img {
    position: absolute;
    object-fit: cover;
    width: 165px; /* Use actual size or dynamic calculation if needed */
    height: 165px; /* Use actual size or dynamic calculation if needed */
    box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.35);
    border-radius: 100px;
    z-index: 0;
  }
  .-label {
    cursor: pointer;
    height: 165px; /* Use actual size or dynamic calculation if needed */
    width: 165px; /* Use actual size or dynamic calculation if needed */
  }
  &:hover {
    .-label {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 10000;
      color: rgb(250, 250, 250);
      transition: background-color 0.2s ease-in-out;
      border-radius: 100px;
      margin-bottom: 0;
    }
  }
  span {
    display: inline-flex;
    padding: 0.2em;
    height: 2em;
  }
`;

export default ChangeProfilePhoto;
