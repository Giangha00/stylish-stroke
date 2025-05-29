import { useEffect, useState } from "react";
import "./aboutus.css";
import Member1 from "../../../asset/member1.jpg";
import Member2 from "../../../asset/member2.jpg";
import Member3 from "../../../asset/member3.jpg";
import Member4 from "../../../asset/member4.jpeg";

const AboutUs = () => {
  const [teamMembers, setTeamMembers] = useState([
    {
      name: "Nguyễn Giang Hà",
      role: "Developer",
      image: Member4,
    },
    {
      name: "Nguyễn Nhân Tâm Tâm",
      role: "Developer",
      image: Member2,
    },
    {
      name: "Nguyễn Xuân Anh",
      role: "Developer",
      image: Member3,
    },
    {
      name: "Trần Đình Hải",
      role: "Developer",
      image: Member1,
    },
  ]);

  // useEffect(() => {
  //   fetch("sqlserver://localhost:1433").then((response) => {
  //     console.log("response", response);
  //   });
  // });

  return (
    <section id="about" className="about-us">
      <div className="about-us__container">
        <p className="about-us__title">About Us</p>
        <div className="about-us__info">
          <p className="about-us__description">
            Chào mừng bạn đến với StylishStrokes – nơi hội tụ đam mê và nghệ
            thuật thư pháp! Chúng tôi là một nhóm gồm 4 thành viên tận tâm, cùng
            nhau tạo nên một không gian để khám phá và lan tỏa vẻ đẹp của thư
            pháp từ nhiều nền văn hóa.
          </p>
          <div className="about-us__team">
            {teamMembers.map((member) => {
              return (
                <div className="about-us__team-member">
                  <img
                    src={member.image}
                    alt=""
                    className="about-us__team-img"
                  />
                  <p className="about-us__team-name">{member.name}</p>
                  <p className="about-us__team-role">{member.role}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
