import styled from "styled-components";

const StyleViewReview = styled.section`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

.patient-page-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.title {
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 20px;
}

.patient-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
}

.patient-item {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    display: flex;
    align-items: center;
}

.avatar {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-right: 20px;
}

.patient-info h3 {
    font-size: 18px;
    margin-bottom: 10px;
}

.patient-info .rating {
    color: #FFD700; /* Gold color */
    font-size: 16px;
    margin-bottom: 5px;
}

.patient-info .review {
    font-size: 14px;
    color: #666;
}

@media only screen and (max-width: 768px) {
    .patient-list {
        grid-template-columns: repeat(minmax(200px, 1fr));
    }
}

@media only screen and (max-width: 500px) {
    .patient-list {
        grid-template-columns: repeat(minmax(150px, 1fr));
    }
}
`;

export default StyleViewReview;
