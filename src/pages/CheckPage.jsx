import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import MyOrder from "../components/MyOrder";

const countries = [
  { value: 'usa', label: 'USA' },
  { value: 'canada', label: 'Canada' },
  { value: 'uk', label: 'UK' },
];

const regions = {
  usa: [
    { value: 'ny', label: 'New York' },
    { value: 'ca', label: 'California' },
  ],
  canada: [
    { value: 'bc', label: 'British Columbia' },
    { value: 'on', label: 'Ontario' },
  ],
  uk: [
    { value: 'lon', label: 'London' },
    { value: 'man', label: 'Manchester' },
  ],
};
function CheckPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Enter your full name"),
    resAddress: Yup.string()
      .required("Enter your residential address")
      .min(11, "Must be more than 11 characters"),
    email: Yup.string()
      .email()
      .required("Enter a valid email address")
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ),
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
      ),
    country: Yup.string()
      .required("This field is required")
      .oneOf([
        'usa',
        'canada',
        'uk',
      ]),
    postalCode: Yup.string().required("This field is required"),
    region: Yup.string()
      .required("This field is required")
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }, watch,
  } = useForm(formOptions);
  const updateUser = (data) => {
    setUser((prevUser) => ({ ...prevUser, ...data }));
  };
  const onSubmit = (data) => {
    updateUser(data);
    navigate("/");
  };
  const [checked, setChecked] = useState(false);
  function handleChange(e) {
    setChecked(e.target.checked);
  }
  const selectedCountry = watch('country', countries[0].value); // Default to the first country
  const regionOptions = regions[selectedCountry]
  return (
    <div className="flex flex-col justify-center item-center mx-16 my-8 gap-16">
      <div>
      <h3 >Checkout</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center gap-16 w-full h-screen" >
        <div className="w-9/12">
          <div>
            <h2 className="mb-12 ">Shipping Information</h2>
            <div className="flex flex-col gap-4">
              <label >Full Name</label>
              <div>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Enter full name"
                  {...register("fullName")}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="errorMsg">{errors.fullName?.message}</div>
            </div>
            <div>
              <div className="flex flex-col gap-4">
                <label >Email Address</label>
                <div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter email address"
                    {...register("email")}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="errorMsg">{errors.email?.message}</div>
              </div>
              <div className="flex flex-col gap-4">
                <label >Phone Number</label>
                <div>
                  <input
                    name="phone"
                    type="phone"
                    placeholder="Enter number"
                    {...register("phoneNumber")}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="errorMsg">{errors.phoneNumber?.message}</div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <label >House address</label>
              <div>
                <input
                  name="resAddress"
                  type="text"
                  placeholder="Enter address"
                  {...register("resAddress")}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="errorMsg">{errors.resAddress?.message}</div>
            </div>
            <div>
              <select {...register('country')}>
                {countries.map(country => (
                  <option key={country.value} value={country.value}>{country.label}</option>
                ))}
              </select>
              {errors.country && (
                <p className="errorMsg">{errors.country.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <label >City</label>
                <div>
                  <input
                    name="email"
                    type="text"
                    placeholder="City"
                    {...register("city")}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="errorMsg">{errors.dob?.message}</div>
              </div>
              <div>
                <select {...register('region')}>
                  {regionOptions && regionOptions.map(region => (
                    <option key={region.value} value={region.value}>{region.label}</option>
                  ))}
                </select>
                {errors.region && (
                  <p className="errorMsg">{errors.region.message}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <label >Postal Code</label>
              <div>
                <input
                  name="postalCode"
                  type="text"
                  placeholder="Enter full name"
                  {...register("postalCode")}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="errorMsg">{errors.currentEmployer?.message}</div>
            </div>
          </div>
          <div>
            <p>Shipping Fees</p>
            <div>
              <div className="flex ">
                <input value="test" type="checkbox" onChange={handleChange} />
                {checked}
                <div>
                  <p>Express Shipping</p>
                  <p>3-5 working days</p>
                </div>
              </div>
              <p>$150</p>
            </div>
            <div>
              <div>
                <input value="test" type="checkbox" onChange={handleChange} />
                {checked}
                <div>
                  <p>Regular Shipping</p>
                  <p>14-21 working days</p>
                </div>
              </div>
              <p>$25</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <MyOrder />
          </div>
          <span>
            <p>Shipping</p>
            <p>$150</p>
          </span>
          <span>
            <h4>Grand Total</h4>
            <p>$577.98</p>
          </span>
          <Link to="/payment">

            <button className="bg-custom-midGreen text-white text-lg py-3 w-fullwidth px-8 border rounded"> Proceed to Payment </button>

          </Link>
        </div>
      </form>
    </div>
  );
}

export default CheckPage;