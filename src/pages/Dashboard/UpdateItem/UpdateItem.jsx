import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { name, category, recipe, price, _id } = useLoaderData();
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = UseAxiosSecure();

  const onSubmit = async (data) => {
    // console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the menu item to the server with the image url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      // console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is updated to the menu.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div>
      <div className="bg-base-200 p-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control mb-4">
            <label className="block text-sm font-medium mb-2">
              Recipe Name*
            </label>
            <input
              type="text"
              defaultValue={name}
              {...register("name", { required: true })}
              placeholder="Enter recipe name"
              className="w-full input input-bordered"
            />
          </div>
          <div className="flex gap-6">
            <div className="form-control mb-4 flex-1">
              <label className="block text-sm font-medium mb-2">
                Category*
              </label>
              <select
                {...register("category", { required: true })}
                className="select select-bordered w-full"
                defaultValue={category}
              >
                <option disabled value="">
                  Select a Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            <div className="form-control flex-1 mb-4">
              <label className="block text-sm font-medium mb-2">Price*</label>
              <input
                type="number"
                defaultValue={price}
                {...register("price", { required: true })}
                placeholder="Price"
                className="w-full input input-bordered"
              />
            </div>
          </div>
          {/* recipe details */}

          <div className="form-control mb-4">
            <label className="block text-sm font-medium mb-2">
              Recipe Details*
            </label>
            <textarea
              defaultValue={recipe}
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-36"
              placeholder="Recipe Details"
            ></textarea>
          </div>

          <div className="form-control mb-4">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center bg-gradient-to-r from-[#A67529] to-[#caa051] text-white font-medium text-lg py-2 px-6 rounded-md shadow-md hover:brightness-110 transition-all"
          >
            <span className="mr-2">Update Menu Item</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
