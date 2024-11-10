import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from '../../../firebase/firebase.config';
import { Link } from "react-router-dom";
// import LoadingSpinner from '../../../Layout/LoadingSpinner';
import { auth } from "../firebase/firebase.config";
import LoadingSpinner from "../Layout/LoadingSpinner";

const Profile = () => {
    const [user] = useAuthState(auth);
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (user) {
            fetch(`https://server-0bf5.onrender.com/users/${user?.email}`)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return res.json();
                })
                .then((data) => {
                    setUserInfo(data);
                    setLoading(false);
                })

                .catch((error) => {
                    console.error("Error fetching data:", error);
                    setError(error);
                    setLoading(false);
                });
        }
    }, [user]);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }
    const breakfasts = [
        {
            "id": "1",
            "title": "Pad Thaier",
            "price": "10.99",
            "image": "https://i.ibb.co/CzNMkLN/dinner-3.jpg ",
            "category": "Thai",

        },
        {
            "id": "2",
            "title": "Beef Wellington",
            "price": "29",
            "image": "https://i.ibb.co/XSsy0GR/dinner-4.jpg",
            "category": "Mexican",

        },
        {
            "id": "3",
            "title": "Falafel Wrap",
            "price": "8.99",
            "image": "https://i.ibb.co/S7GvJpL/dish-3.jpg",
            "category": "Middle Eastern",

        },
        {
            "id": "4",
            "title": "Cold Cofee",
            "price": "7.99",
            "image": "https://i.dailymail.co.uk/1s/2018/11/01/18/5668494-0-image-a-4_1541098633929.jpg",
            "category": "French",

        },
        {
            "id": "5",
            "title": "Tikkia chop",
            "price": "13.99",
            "image": "https://i.ibb.co/nCcQbFf/WK36-Lamb-small.png",

        },
        {
            "id": "6",
            "title": "Vegetable Stir Fry",
            "price": 9.99,
            "image": "https://i0.wp.com/ulzza.com/wp-content/uploads/2018/10/2013072917110983854_3_59_20130730072402.jpg?fit=520%2C329&ssl=1",
            "category": "Chinese",

        },

    ]

    return (
        <div className="mb-24">
            <div className="profil-sectioner"></div>
            <img className="p-1 shadow-lg rounded-full  mt-[-110px] bg-gray-100 h-72 w-72  justify-center items-center m-auto" src="https://researchaddict.com/wp-content/uploads/2020/01/girl-eating-healthy-2.jpg" alt="product image" />
            <h2 className="text-center text-5xl py-5 pb-8"> {userInfo?.name}</h2>
            <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 gap-4 pb-8 max-w-[1200px] justify-center items-center m-auto">
                {breakfasts?.map((breakfast) => (
                    <>
                        <img className="p-1 shadow-lg bg-gray-100 h-32 w-full " src={breakfast?.image} alt="product image" />
                    </>
                ))}
            </div>
            <div className="max-w-[900px] m-auto py-5">
                <div className="flex justify-between mb-7">
                    <h1 className="text-3xl">Profile Information</h1>
                    <Link to={`/dashboard/profile-edit/${userInfo?._id}`} className="hover:text-red-800">
                        Edit Profile
                    </Link>
                </div>
                <div>
                    <h2>Name: {userInfo?.name}</h2>
                    <h2>Email: {userInfo?.email}</h2>
                    <h2>Age: {userInfo?.age}</h2>
                    <h2>Number: {userInfo?.mobileNumber}</h2>
                </div>
            </div>
        </div>

    );
};

export default Profile;
