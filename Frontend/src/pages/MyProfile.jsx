import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Rahal Sathsara",
    image: assets.profile_pic,
    email: "smarsathsara@gmail.com",
    phone: "+94 74 342 9610",
    address: {
      line1: "636/D",
      line2: "Sama MW",
      line3: "Ragama",
    },
    gender: "Male",
    dob: "2002-11-14",
  });

  const [isEdit, setIsEdit] = useState(false);
  const hadleChanged = (e) => {
    const { name, value } = e.target;
    // Check if it's an address field
    if (name.startsWith("address.")) {
      const field = name.split(".")[1]; // Get 'line1', 'line2', or 'line3'
      setUserData((prev) => ({
        ...prev,
        address: { ...prev.address, [field]: value },
      }));
    } else {
      setUserData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img  src={userData.image} alt="" className="w-36 rounded"/>
      {isEdit ? (
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={hadleChanged}
          className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
        />
      ) : (
        <p>{userData.name}</p>
      )}
      <hr />
      <div>
        <p>CONTACT INFORMATION</p>
        <div>
          <p>Email :</p>
          {isEdit ? (
            <input
              type="text"
              name="email"
              onChange={hadleChanged}
              value={userData.email}
            />
          ) : (
            <p>{userData.email}</p>
          )}

          <p>Phone :</p>
          {isEdit ? (
            <input
              type="text"
              name="phone"
              onChange={hadleChanged}
              value={userData.phone}
            />
          ) : (
            <p>{userData.phone}</p>
          )}

          <p>Address :</p>
          {isEdit ? (
            <p>
              <input
                type="text"
                name="address.line1"
                onChange={hadleChanged}
                value={userData.address.line1}
              />
              <br />
              <input
                type="text"
                name="address.line2"
                onChange={hadleChanged}
                value={userData.address.line2}
              />
              <br />
              <input
                type="text"
                name="address.line3"
                onChange={hadleChanged}
                value={userData.address.line3}
              />
            </p>
          ) : (
            <p>
              <p>{userData.address.line1},</p>
              <p>{userData.address.line2},</p>
              <p>{userData.address.line3}</p>
            </p>
          )}
        </div>
      </div>
      <div>
        <p>BASIC INFORMATION</p>
        <div>
          <p>Gender :</p>
          {isEdit ? (
            <select
              name="gender"
              id=""
              value={userData.gender}
              onChange={hadleChanged}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )}
          <p>Date of Birth :</p>
          {isEdit ? (
            <input type="date" name="dob" id="" value={userData.dob} onChange={hadleChanged}/>
          ) : (
            <p>{userData.dob}</p>
          )}
        </div>
      </div>
      {isEdit ? (
        <button
          onClick={() => setIsEdit(false)}
          className="border border-zinc-600 text-sm p-2 px-4 rounded-full"
        >
          Save Information
        </button>
      ) : (
        <button
          onClick={() => setIsEdit(true)}
          className="border border-zinc-600 text-sm p-2 px-4 rounded-full"
        >
          Edit
        </button>
      )}
    </div>
  );
};

export default MyProfile;
