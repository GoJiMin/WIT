import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function useContact() {
  const [check, setChecked] = useState(false);

  const {
    reset,
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors, isSubmitSuccessful },
  } = useForm();

  const handleCheck = () => {
    setChecked(true);
  };

  const handleUnCheck = () => {
    setChecked(false);
  };

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 2000));
    axios({
      url: import.meta.env.VITE_EMAIL_URL,
      method: "post",
      headers: { "Content-Type": "multipart/form-data" },
      data: data,
    });
  };

  const handleReset = () => {
    reset({ email: "", id: "", subject: "", text: "" });
  };

  return {
    reset,
    register,
    handleReset,
    handleCheck,
    handleUnCheck,
    handleSubmit,
    onSubmit,
    check,
    isSubmitting,
    isSubmitted,
    errors,
    isSubmitSuccessful,
  };
}
