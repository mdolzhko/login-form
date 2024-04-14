import { z } from "zod";
import { useState } from "react";
import type { MouseEvent } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import ErrorMessage from "./errorMessage";

const formLoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email address"),
  password: z.string().min(8).max(12),
});
type ValidationSchemaType = z.infer<typeof formLoginSchema>;

export default function Form() {
  const [toggle, setToggle] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ValidationSchemaType>({
    resolver: zodResolver(formLoginSchema),
  });

  const handleTogglePassword = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setToggle((prev) => !prev);
  };

  const onSubmit: SubmitHandler<ValidationSchemaType> = (formData) => {
    console.info("FORM DATA:::", formData);
  };

  return (
    <form
      name="login-form"
      className="space-y-6"
      onSubmit={handleSubmit(onSubmit)}
      method="POST"
    >
      <div>
        <label
          htmlFor="email"
          className="block text-sm text-left font-medium leading-6 text-white"
        >
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            {...register("email")}
            className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
          />
        </div>
        {!!errors?.email?.message && (
          <ErrorMessage id="email" message={errors.email.message} />
        )}
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-white"
          >
            Password
          </label>
          <div className="text-sm">
            <a
              href="#"
              className="font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Forgot password?
            </a>
          </div>
        </div>
        <div className="relative mt-2">
          <input
            id="password"
            type={!toggle ? "password" : "text"}
            autoComplete="password"
            required
            {...register("password")}
            className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
          />
          <button
            className="absolute top-0 bottom-0 right-2"
            onClick={handleTogglePassword}
          >
            {!toggle ? (
              <EyeIcon className="h-4 text-indigo-500" />
            ) : (
              <EyeSlashIcon className="h-4 text-indigo-500" />
            )}
          </button>
        </div>
        {!!errors?.password?.message && (
          <ErrorMessage id="password" message={errors.password.message} />
        )}
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Sign in
        </button>
      </div>
    </form>
  );
}
