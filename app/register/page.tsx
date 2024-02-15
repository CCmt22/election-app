"use client"; //this needs to be there
import Link from "next/link";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "../ballot/page";

export default function Component() {
  const [formData, setFormData] = useState({
    firstName: "First Name",
    lastName: " Last Name",
    idNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    idNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showErrors, setShowErrors] = useState(false);

  const isRegistrationDisabled =
    Object.values(formData).some((value) => value.trim() === "") ||
    Object.values(errors).some((error) => error !== "") ||
    formData.idNumber.length < 12 ||
    formData.password !== formData.confirmPassword;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: value.trim() === "" ? `${name} is required` : "",
      idNumber:
        name === "ID Number" &&
        (value.length > 12 || isNaN(value) || value.length < 1)
          ? "ID number must be exactly 12 digits and contain only numbers"
          : "",
      confirmPassword:
        name === "confirmPassword" &&
        value !== formData.password &&
        formData.password !== ""
          ? "Passwords do not match"
          : "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowErrors(true);

    // Additional validation logic if needed
    if (formData.password !== formData.confirmPassword) {
      setErrors({
        ...errors,
        confirmPassword: "Passwords do not match",
      });
      return;
    }

    // Proceed with registration logic if validation passes
    console.log("Form submitted successfully!");
  };

  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/back3.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="max-w-3xl bg-gray-100 p-6 rounded-lg space-y-8">
            <div className="flex items-center justify-between">
              <Link href="/">
                <HomeIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              </Link>
              <div className="text-center space-y-2">
                <h1 className="text-4xl font-bold">Register</h1>
                <p
                  className="text-gray-500 dark:text-gray-400"
                  style={{ fontWeight: "bold", fontStyle: "italic" }}
                >
                  Enter your information to create an account
                </p>
              </div>
              <div />
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name" style={{ fontWeight: "bold" }}>
                    First name
                  </Label>
                  <Input
                    id="first-name"
                    name="firstName"
                    placeholder="Enter your first name"
                    required
                    onChange={handleChange}
                  />
                  {showErrors && (
                    <span className="error" style={{ color: "red" }}>
                      {errors.firstName}
                    </span>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name" style={{ fontWeight: "bold" }}>
                    Last name
                  </Label>
                  <Input
                    id="last-name"
                    name="lastName"
                    placeholder="Enter your last name"
                    required
                    onChange={handleChange}
                  />
                  {showErrors && (
                    <span className="error" style={{ color: "red" }}>
                      {errors.lastName}
                    </span>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="id-number" style={{ fontWeight: "bold" }}>
                  ID Number
                </Label>
                <Input
                  id="id-number"
                  name="idNumber"
                  placeholder="Enter your ID number"
                  required
                  onChange={handleChange}
                />
                {showErrors && (
                  <span className="error" style={{ color: "red" }}>
                    {errors.idNumber}
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" style={{ fontWeight: "bold" }}>
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  type="email"
                  onChange={handleChange}
                />
                {showErrors && (
                  <span className="error" style={{ color: "red" }}>
                    {errors.email}
                  </span>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password" style={{ fontWeight: "bold" }}>
                    Create Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    placeholder="Create your password"
                    required
                    type="password"
                    onChange={handleChange}
                  />
                  {showErrors && (
                    <span className="error" style={{ color: "red" }}>
                      {errors.password}
                    </span>
                  )}
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="confirm-password"
                    style={{ fontWeight: "bold" }}
                  >
                    Confirm Password
                  </Label>
                  <Input
                    id="confirm-password"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    required
                    type="password"
                    onChange={handleChange}
                  />
                  {showErrors && (
                    <span className="error" style={{ color: "red" }}>
                      {errors.confirmPassword}
                    </span>
                  )}
                </div>
              </div>
              <Button
                className="w-full bg-black text-white py-2 rounded-md"
                onClick={handleSubmit}
              >
                Register
              </Button>
              <div className="space-y-2 text-red-500">
                {isRegistrationDisabled &&
                  showErrors &&
                  "Please complete all fields correctly to register"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
