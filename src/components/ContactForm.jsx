import React, { useRef } from "react";
import styles from "./ContactForm.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function ContactForm() {
  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1000));
    axios({
      url: import.meta.env.VITE_EMAIL_URL,
      method: "post",
      headers: { "Content-Type": "multipart/form-data" },
      data: data,
    });
  };

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm();

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputBox}>
        <label className={styles.label} htmlFor='email'>
          이메일
        </label>
        <input
          className={styles.input}
          id='email'
          type='text'
          autocomplete='off'
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
        {errors.email && <small role='alert'>{errors.email.message}</small>}
      </div>
      <div className={styles.inputBox}>
        <label className={styles.label} htmlFor='id'>
          이름
        </label>
        <input
          className={styles.input}
          id='id'
          type='id'
          autocomplete='off'
          aria-invalid={
            isSubmitted ? (errors.id ? "true" : "false") : undefined
          }
          {...register("id", {
            required: "이름은 필수 입력입니다.",
          })}
        />
        {errors.id && <small role='alert'>{errors.id.message}</small>}
      </div>
      <div className={styles.inputBox}>
        <label className={styles.label} htmlFor='id'>
          제목
        </label>
        <input
          className={styles.input}
          id='subject'
          type='subject'
          autocomplete='off'
          aria-invalid={
            isSubmitted ? (errors.subject ? "true" : "false") : undefined
          }
          {...register("subject", {
            required: "제목은 필수 입력입니다.",
          })}
        />
        {errors.subject && <small role='alert'>{errors.subject.message}</small>}
      </div>
      <div className={styles.inputBox}>
        <label className={styles.label} htmlFor='text'>
          건의사항을 적어주세요!
        </label>
        <textarea
          className={styles.inputText}
          id='text'
          type='text'
          autocomplete='off'
          aria-invalid={
            isSubmitted ? (errors.text ? "true" : "false") : undefined
          }
          {...register("text", {
            required: "건의 내용은 필수 입력 사항입니다.",
          })}
        />
        {errors.text && <small role='alert'>{errors.text.message}</small>}
      </div>

      <button type='submit' disabled={isSubmitting}>
        제출하기
      </button>
    </form>
  );
}
