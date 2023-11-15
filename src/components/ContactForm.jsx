import React, { useEffect, useState } from "react";
import styles from "./ContactForm.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import Modal from "./Modal.jsx";
import PersonalInformation from "./PersonalInformation.jsx";

export default function ContactForm() {
  const [check, setChecked] = useState(false);
  const handleCheck = () => {
    setChecked(true);
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

  const {
    reset,
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors, isSubmitSuccessful },
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ email: "", id: "", subject: "", text: "" });
    }
  }, [isSubmitSuccessful, reset]);
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {/* <p className={styles.title}>Contact</p> */}
      <div className={styles.inputBox}>
        <label className={styles.label} htmlFor='email'>
          이메일
        </label>
        <input
          className={styles.input}
          id='email'
          type='text'
          autoComplete='off'
          aria-invalid={
            isSubmitted ? (errors.email ? "true" : "false") : undefined
          }
          {...register("email", {
            required: "이메일은 필수 입력입니다.",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "이메일 형식에 맞지 않습니다.",
            },
          })}
        />
        {errors.email && (
          <small className={styles.error} role='alert'>
            {errors.email.message}
          </small>
        )}
      </div>
      <div className={styles.inputBox}>
        <label className={styles.label} htmlFor='id'>
          이름
        </label>
        <input
          className={styles.input}
          id='id'
          type='id'
          autoComplete='off'
          aria-invalid={
            isSubmitted ? (errors.id ? "true" : "false") : undefined
          }
          {...register("id", {
            required: "이름은 필수 입력입니다.",
          })}
        />
        {errors.id && (
          <small className={styles.error} role='alert'>
            {errors.id.message}
          </small>
        )}
      </div>
      <div className={styles.inputBox}>
        <label className={styles.label} htmlFor='id'>
          제목
        </label>
        <input
          className={styles.input}
          id='subject'
          type='subject'
          autoComplete='off'
          aria-invalid={
            isSubmitted ? (errors.subject ? "true" : "false") : undefined
          }
          {...register("subject", {
            required: "제목은 필수 입력입니다.",
          })}
        />
        {errors.subject && (
          <small className={styles.error} role='alert'>
            {errors.subject.message}
          </small>
        )}
      </div>
      <div className={styles.inputBox}>
        <label className={styles.label} htmlFor='text'>
          메세지
        </label>
        <textarea
          className={styles.inputText}
          id='text'
          type='text'
          autoComplete='off'
          aria-invalid={
            isSubmitted ? (errors.text ? "true" : "false") : undefined
          }
          {...register("text", {
            required: "메세지는 필수 입력 사항입니다.",
          })}
        />
        {errors.text && (
          <small className={styles.error} role='alert'>
            {errors.text.message}
          </small>
        )}
      </div>
      <div className={styles.checkbox}>
        <input
          className={styles.checkbox_input}
          type='checkbox'
          onChange={() => setChecked(false)}
          checked={check}
        />
        <Modal
          type={"alert"}
          text={"(확인) 개인 정보 수집 및 이용동의"}
          handleConfirm={handleCheck}
          btnText={"개인정보 보호를 위한 이용자 동의사항에 동의합니다."}
          component={<PersonalInformation />}
        />
      </div>
      <button
        className={
          check
            ? isSubmitting
              ? `${styles.submit} ${styles.post}`
              : `${styles.submit}`
            : `${styles.submit} ${styles.disabled}`
        }
        type='submit'
        disabled={isSubmitting || !check}
      >
        {isSubmitting ? "전송에 성공했어요!" : "제출하기"}
      </button>
    </form>
  );
}
