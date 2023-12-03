import { useFormState, useFormStatus } from "react-dom"
import { z } from "zod"

import { Input } from "../ui/input"
import { StatusButton } from "../ui/statusbutton"

// const passwordForm = z
//   .object({
//     password: z.string(),
//     confirm: z.string
//   }).required()
//   .refine((data) => data.password === data.confirm, {
//     message: "Passwords don't match",
//     path: ["confirm"], // path of error
//   });

const schema = z
  .object({
    email: z.string(),
    username: z.string(),
    password: z.string(),
  })
  .required()

function createLogin(formData: FormData) {
  //   "use server"
  //   const parsed = schema.safeParse({
  //     email: formData.email,
  //     username: formData.username,
  //     password: formData.password,
  //   })
  console.log(formData)
}

export default function LogInForm() {
  const formId = "note-editor"
  const isSubmitting = false

  return (
    <div>
      <form
        //   action={createLogin}
        id={formId}
        method="post"
        className="flex h-full flex-col gap-y-4 overflow-y-auto overflow-x-hidden px-10 pb-28 pt-12"
      >
        <label htmlFor="username">Username</label>
        <Input name="username" maxLength={100} required type="text" />
        <label htmlFor="email">Email</label>
        <Input
          name="email"
          maxLength={100}
          required
          type="email"
          // pattern=".+@example\.com"
        />
        <label htmlFor="password" typeof="password">
          Password
        </label>
        <Input
          name="password"
          minLength={6}
          type="password"
          maxLength={100}
          required
        />
      </form>
      <StatusButton
        form={formId}
        type="submit"
        disabled={isSubmitting}
        status={isSubmitting ? "pending" : "idle"}
      >
        LogIN
      </StatusButton>
    </div>
  )
}
