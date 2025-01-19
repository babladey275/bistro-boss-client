import React from "react";
import useMenu from "../../../hooks/useMenu";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = UseAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${id}`);
        if (res.data.deletedCount > 0) {
          refetch();

          Swal.fire({
            title: "Deleted!",
            text: "Your item has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div>
      <div className="-mt-12 -mb-6">
        <SectionTitle
          heading={"Manage all items"}
          subHeading={"Hurry Up"}
        ></SectionTitle>
      </div>
      <div className="py-4">
        <h2 className="text-3xl font-semibold">Total Items: {menu.length}</h2>
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
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
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
                <td>
                  <Link
                    to={`/dashboard/manage-items/update-item/${item._id}`}
                    className="btn hover:bg-[#cb9748] bg-[#d9a659]"
                  >
                    <FaRegEdit className="text-white text-xl" />
                  </Link>
                </td>
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

export default ManageItems;
