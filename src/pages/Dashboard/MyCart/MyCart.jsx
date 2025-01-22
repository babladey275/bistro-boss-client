import React from "react";
import useCart from "../../../hooks/useCart";
import { FaRegTrashAlt } from "react-icons/fa";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = UseAxiosSecure();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();

            Swal.fire({
              title: "Deleted!",
              text: "Your item has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="-mt-12">
        <SectionTitle
          heading={"Wanna Add More?"}
          subHeading={"My Cart"}
        ></SectionTitle>
      </div>
      <div className="flex justify-evenly py-4">
        <h2 className="text-3xl font-semibold">Total Items: {cart.length}</h2>
        <h2 className="text-3xl font-semibold">Total Price: {totalPrice}</h2>
        {cart.length ? (
          <Link to={"/dashboard/payment"}>
            <button className="btn hover:bg-[#cb9748] bg-[#d9a659]">Pay</button>
          </Link>
        ) : (
          <button disabled className="btn hover:bg-[#cb9748] bg-[#d9a659]">
            Pay
          </button>
        )}
      </div>
      <div className="overflow-x-auto rounded-t-lg">
        <table className="table">
          {/* head */}
          <thead className="bg-[#D1A054] text-white">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <img
                    src={item.image}
                    alt={item.image}
                    className="w-16 h-16"
                  />
                </td>
                <td className="font-semibold">{item.name}</td>
                <td>${item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn bg-[#B91C1C] hover:bg-[#942d2d]"
                  >
                    <FaRegTrashAlt className="text-white text-xl" />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
