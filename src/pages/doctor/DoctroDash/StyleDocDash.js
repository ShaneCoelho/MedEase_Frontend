import styled from "styled-components";

const StyleDocDash = styled.section`
  .navbar {
    background-color: #1977cc;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    position: relative;
  }

  .navbar ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  .navbar ul li {
    margin-right: 1rem;
  }

  .navbar ul li a {
    color: #fff;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  .navbar ul li a:hover {
    background-color: #135ca9;
  }

  .profile {
    position: relative;
  }

  .profile-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
  }

  .profile-icon img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .profile-dropdown {
    position: absolute;
    top: 50px;
    right: 0;
    background-color: #fff;
    padding: 0.5rem;
    border-radius: 5px;
    display: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .profile:hover .profile-dropdown {
    display: block;
  }

  @media screen and (max-width: 768px) {
    .navbar ul {
      flex-direction: column;
      position: absolute;
      top: 70px;
      left: 0;
      background-color: #1977cc;
      width: 100%;
      padding: 1rem 0;
      text-align: center;
      border-radius: 0 0 10px 10px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      display: none;
    }

    .navbar ul.open {
      display: flex;
    }

    .navbar ul li {
      margin-right: 0;
      margin-bottom: 1rem;
    }

    .navbar ul li:last-child {
      margin-bottom: 0;
    }

    .navbar ul li a {
      display: block;
    }
  }
`;

export default StyleDocDash;
