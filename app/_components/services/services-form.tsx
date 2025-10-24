"use client";

import { useMemo, useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

type ServicesFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  companyName: string;
  service: string;
};

const ENDPOINT = process.env.NEXT_PUBLIC_SERVICES_FORM_ENDPOINT;

export default function ServicesForm() {
  const [values, setValues] = useState<ServicesFormValues>({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    companyName: "",
    service: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isValid = useMemo(() => {
    if (!values.firstName || !values.lastName) return false;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) return false;
    if (!values.mobile) return false;
    if (!values.companyName) return false;
    if (!values.service) return false;
    return true;
  }, [values]);

  const onChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!isValid) return;
    setSubmitting(true);
    setError(null);
    try {
      if (ENDPOINT) {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      } else {
        // Simulate network submission if no endpoint configured
        await new Promise((r) => setTimeout(r, 800));
      }
      setSubmitted(true);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Submission failed. Please try again.";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div role="status" aria-live="polite" className="p-4 rounded-lg bg-white">
        <p className="text-sm text-black">
          Thank you! Your enquiry has been submitted. We&apos;ll get back to you
          shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <label htmlFor="services-form-first-name">
        First Name
        <input
          type="text"
          id="services-form-first-name"
          name="firstName"
          placeholder="First Name"
          required
          value={values.firstName}
          onChange={onChange}
        />
      </label>

      <label htmlFor="services-form-last-name">
        Last Name
        <input
          type="text"
          id="services-form-last-name"
          name="lastName"
          placeholder="Last Name"
          required
          value={values.lastName}
          onChange={onChange}
        />
      </label>

      <label htmlFor="services-form-email">
        Email
        <input
          type="email"
          id="services-form-email"
          name="email"
          placeholder="Enter Your Email"
          required
          value={values.email}
          onChange={onChange}
        />
      </label>

      <label htmlFor="services-form-mobile">
        Mobile
        <PhoneInput
          defaultCountry="ae"
          value={values.mobile}
          onChange={(phone) => setValues((v) => ({ ...v, mobile: phone }))}
          className="w-full mt-2 flex items-stretch rounded-lg border border-gray-dark focus-within:border-primary bg-transparent transition duration-200"
          inputClassName="flex-1 p-3 bg-transparent text-black placeholder-gray-dark border-0 focus:outline-none"
          countrySelectorStyleProps={{
            buttonClassName:
              "px-3 border-0 bg-transparent text-black focus:outline-none",
            buttonStyle: { background: "white", color: "black" },
          }}
          inputProps={{
            id: "services-form-mobile",
            name: "mobile",
            required: true,
            placeholder: "Enter Your Mobile Number",
            autoComplete: "tel",
          }}
        />
      </label>

      <label htmlFor="services-form-company-name">
        Company Name
        <input
          type="text"
          id="services-form-company-name"
          name="companyName"
          placeholder="Enter Your Company Name"
          required
          value={values.companyName}
          onChange={onChange}
        />
      </label>

      <label htmlFor="services-form-service">
        Service
        <select
          id="services-form-service"
          name="service"
          required
          value={values.service}
          onChange={onChange}
        >
          <option value="">Choose Your Service</option>
          <option value="tax">Tax Advisory</option>
          <option value="vat">VAT Services</option>
          <option value="accounting">Accounting</option>
          <option value="compliance">Compliance</option>
        </select>
      </label>

      <button
        type="submit"
        disabled={!isValid || submitting}
        aria-busy={submitting}
      >
        {submitting ? "Submitting..." : "Submit Your Enquiry"}
        {!submitting && (
          <svg
            width="14"
            height="20"
            viewBox="0 0 14 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_61_126)">
              <path
                d="M3.61619 2.045C3.38185 2.27941 3.25021 2.59729 3.25021 2.92875C3.25021 3.2602 3.38185 3.57809 3.61619 3.8125L9.80369 10L3.61619 16.1875C3.38849 16.4233 3.2625 16.739 3.26535 17.0668C3.2682 17.3945 3.39966 17.708 3.63142 17.9398C3.86318 18.1715 4.17669 18.303 4.50444 18.3058C4.83218 18.3087 5.14794 18.1827 5.38369 17.955L12.4549 10.8837C12.6893 10.6493 12.8209 10.3315 12.8209 10C12.8209 9.66854 12.6893 9.35066 12.4549 9.11625L5.38369 2.045C5.14928 1.81066 4.8314 1.67902 4.49994 1.67902C4.16848 1.67902 3.8506 1.81066 3.61619 2.045Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_61_126">
                <rect
                  width="20"
                  height="14"
                  fill="white"
                  transform="matrix(0 1 -1 0 14 0)"
                />
              </clipPath>
            </defs>
          </svg>
        )}
      </button>

      {error && (
        <p role="alert" className="text-sm text-red-600 mt-2">
          {error}
        </p>
      )}
    </form>
  );
}
